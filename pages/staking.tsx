import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import AppLayout from 'sections/shared/Layout/AppLayout';

import Main from 'sections/staking';
import StatBox from 'components/StatBox';
import { LineSpacer, StatsSection } from 'styles/common';
import { formatFiatCurrency, formatPercent } from 'utils/formatters/number';
import useStakingCalculations from 'sections/staking/hooks/useStakingCalculations';

export enum StakingPanelType {
	BURN = 'burn',
	MINT = 'mint',
}

const StakingPage = () => {
	const { t } = useTranslation();

	const { stakedCollateralValue, currentCRatio, debtBalance } = useStakingCalculations();

	return (
		<>
			<Head>
				<title>{t('staking.page-title')}</title>
			</Head>
			<AppLayout>
				<StatsSection>
					<StakedValue
						title={t('common.stat-box.staked-value')}
						value={formatFiatCurrency(stakedCollateralValue, { sign: '$' })}
					/>
					<CRatio
						title={t('common.stat-box.c-ratio')}
						value={formatPercent(currentCRatio ? 1 / currentCRatio : 0)}
						size="lg"
					/>
					<ActiveDebt
						title={t('common.stat-box.active-debt')}
						value={formatFiatCurrency(debtBalance, { sign: '$' })}
					/>
				</StatsSection>
				<LineSpacer />
				<Main />
			</AppLayout>
		</>
	);
};

const StakedValue = styled(StatBox)`
	.title {
		color: ${(props) => props.theme.colors.brightBlue};
	}
`;
const CRatio = styled(StatBox)`
	.value {
		text-shadow: ${(props) => props.theme.colors.brightBlueTextShadow};
		color: ${(props) => props.theme.colors.darkBlue};
	}
`;
const ActiveDebt = styled(StatBox)`
	.title {
		color: ${(props) => props.theme.colors.brightPink};
	}
`;

export default StakingPage;
