import { useSynthetixRead } from './useDeploymentRead';
import { BigNumber } from 'ethers';
import { useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useContractReads, useProvider } from 'wagmi';
import { chainIdState, collateralTypesState } from '../utils/state';
import { localCollateralTypes } from '../utils/constants';
import { getContract } from './useContract';

export const useCollateralTypes = () => {
  const [supportedCollateralTypes, setSupportedCollateralTypes] =
    useRecoilState(collateralTypesState);
  const [isLoading, setIsLoading] = useState(true);
  const provider = useProvider();
  const [localChainId] = useRecoilState(chainIdState);

  // Get this list of collateral types from a network request, use deployments data for now
  // TODO: Rename this function on chain to getCollateralTypesId, getCollateralTypes can return an array of structs and we can skip the calls in the useContractReads call below
  useSynthetixRead({
    functionName: 'getCollateralConfigurations',
    args: [true],
    onError() {
      // TODO: throw up a toast
      // report to sentry or some other tool
    },
    onSuccess(data) {
      const mappedCollateralTypes = localCollateralTypes(localChainId).map((coll) => {
        const onChainCollType = data.find((d) => d.tokenAddress === coll.address);
        return {
          ...coll,
          symbol: coll.symbol.toLowerCase(),
          targetCRatio: onChainCollType?.targetCRatio,
          minimumCRatio: onChainCollType?.minimumCRatio,
        };
      });
      setSupportedCollateralTypes(mappedCollateralTypes);
    },
  });

  // This fetches price and price decimal data for the collateral types when the above hook recieves a response
  const priceCalls = useMemo(() => {
    if (!supportedCollateralTypes) {
      return [];
    }

    const latestRoundData = supportedCollateralTypes.map((ct) => {
      const symbol = ct.symbol === 'eth' ? 'weth' : ct.symbol;

      const aggregatorContract = getContract(
        `aggregator_${symbol}.aggregator`,
        provider,
        localChainId
      );
      return {
        addressOrName: aggregatorContract?.address,
        contractInterface: aggregatorContract?.abi,
        functionName: 'latestRoundData',
        chainId: aggregatorContract?.chainId,
      };
    });

    const priceDecimals = supportedCollateralTypes.map((ct) => {
      let symbol = ct.symbol.toLowerCase();
      if (symbol === 'eth') symbol = 'weth';
      const aggregatorContract = getContract(
        `aggregator_${symbol}.aggregator`,
        provider,
        localChainId
      );
      return {
        addressOrName: aggregatorContract?.address,
        contractInterface: aggregatorContract?.abi,
        functionName: 'decimals',
        chainId: aggregatorContract?.chainId,
      };
    });

    return [...latestRoundData, ...priceDecimals];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supportedCollateralTypes, provider]);

  // After the price data is fetched, set the data in recoil and turn off the loading state.
  useContractReads({
    contracts: priceCalls,
    enabled: Boolean(supportedCollateralTypes.length),
    onSuccess: (data) => {
      setIsLoading(false);
      setSupportedCollateralTypes(
        supportedCollateralTypes.map((ct, i) => {
          // wagmi types broken
          // @ts-ignore
          const priceDecimals = data[i + supportedCollateralTypes.length];
          const priceData = data[i];

          return {
            ...ct,
            price: Array.isArray(priceData) ? priceData[1] : BigNumber.from(0),
            priceDecimals: Array.isArray(priceDecimals)
              ? 0
              : // wagmi types broken
                // @ts-ignore
                (priceDecimals as number) || 0,
          };
        })
      );
    },
  });

  return {
    isLoading,
  };
};
