import { InfoIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Grid, GridItem, Tooltip, Skeleton, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { CollateralType } from '../../../utils/constants';
import { formatValue } from '../../../utils/helpers';
import { BigNumber } from 'ethers';
import { currency } from '../../../utils/currency';

interface Props {
  collateral: CollateralType;
  collateralAmount: number;
  collateralValue: number;
  debt: number;
  cRatio: number;
}

export const StakingStats: FC<Props> = ({
  collateral,
  debt,
  collateralAmount,
  collateralValue,
  cRatio,
}) => (
  <Box>
    <Grid mb="1" textAlign="center" templateColumns="repeat(4, 1fr)">
      <GridItem mb="3">
        <Text fontSize="sm" fontWeight="semibold">
          Collateral
        </Text>
        <Heading size="md">
          <Skeleton isLoaded={collateralAmount !== undefined}>
            {collateralAmount?.toString()} SNX
          </Skeleton>
        </Heading>
        <Text opacity="0.6" fontSize="sm">
          ${currency(collateralValue)}
        </Text>
      </GridItem>
      <GridItem mb="3">
        <Text fontSize="sm" fontWeight="semibold">
          Debt
        </Text>
        <Skeleton isLoaded={debt !== undefined}>${currency(debt.toString())}</Skeleton>
        <Text opacity="0.6" fontSize="sm">
          snxUSD minted {/* or burned */}
        </Text>
      </GridItem>
      <GridItem mb="3">
        <Text fontSize="sm" fontWeight="semibold">
          C-Ratio
        </Text>
        <Skeleton isLoaded={true}>
          <Flex alignItems="center" justify="center">
            {currency(cRatio?.toString())}%
            {Number(debt?.toString() || 0) === 0 && (
              <Tooltip label="You Don't have a C-Ratio if you have no Debt.">
                <InfoIcon fontSize="sm" ml={1} />
              </Tooltip>
            )}
          </Flex>
        </Skeleton>
        <Text opacity="0.6" fontSize="sm">
          Minimum {formatValue(collateral!.minimumCRatio!.mul(BigNumber.from(100)), 6).toFixed(0)}%
        </Text>
      </GridItem>
      <GridItem mb="3">
        <Text fontSize="sm" fontWeight="semibold">
          Projected Fees
        </Text>
        {/* TODO: when subgraph is ready */}
        <Heading size="md">25% APY</Heading>
        <Text opacity="0.6" fontSize="sm">
          ${currency(1000)} earned
          <Tooltip label="Your fees, earned when the synths in your staking position are exchanged, are automatically deducted from your debt. You can retrieve the earned fees by minting sUSD.">
            <InfoOutlineIcon ml="1" transform="translateY(-1.5px)" />
          </Tooltip>
        </Text>
      </GridItem>
    </Grid>
  </Box>
);
