import { FC } from 'react';
import Head from 'react-helmet';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import StatBox from 'components/StatBox';
import StatsSection from 'components/StatsSection';
import { LineSpacer } from '@snx-v1/styles';
import Main from 'sections/synths';
import { formatCurrency } from 'utils/formatters/number';
import useSelectedPriceCurrency from 'hooks/useSelectedPriceCurrency';
import useSynthetixQueries from '@synthetixio/queries';
import { wei } from '@synthetixio/wei';
import Connector from 'containers/Connector';

const SynthsPage: FC = () => {
  const { t } = useTranslation();

  const { walletAddress } = Connector.useContainer();
  const { useSynthsBalancesQuery } = useSynthetixQueries();

  const synthsBalancesQuery = useSynthsBalancesQuery(walletAddress);
  const { selectedPriceCurrency, getPriceAtCurrentRate } = useSelectedPriceCurrency();

  const totalSynthValue = synthsBalancesQuery.data?.totalUSDBalance || wei(0);

  return (
    <>
      <Head>
        <title>{t('synths.page-title')}</title>
      </Head>
      <Content>
        <StatsSection>
          <div />
          <TotalSynthValue
            title={t('common.stat-box.synth-value')}
            value={formatCurrency(
              selectedPriceCurrency.name,
              getPriceAtCurrentRate(totalSynthValue),
              {
                sign: selectedPriceCurrency.sign,
              }
            )}
            size="lg"
          />
          <div />
        </StatsSection>
        <LineSpacer />
        <Main />
      </Content>
    </>
  );
};
const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const TotalSynthValue = styled(StatBox)`
  .value {
    text-shadow: ${(props) => props.theme.colors.blueTextShadow};
    color: ${(props) => props.theme.colors.black};
  }
`;

export default SynthsPage;
