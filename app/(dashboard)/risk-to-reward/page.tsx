'use client';

// internal
import GridLayout from '@/app/components/gridLayout';
import CustomCard from '@/app/components/customCard';
// external
import MultipleXAxis from '@/app/components/charts/multpileXAxis';
import VerticalBar from '@/app/components/charts/verticalBar';
import XAxis from '@/app/components/charts/xAxis';

const RiskToReward = () => {
  const riskToRewardratio = {
    type: 'ratio',
    symbol: ':',
    heading: 'Average risk to reward ratio',
    label: 'some text',
    value: [1, 2],
    caption: 'some text',
  };

  const averageRiskPerTrade = {
    type: 'percentage',
    symbol: '%',
    heading: 'Average risk per trade',
    label: 'some text',
    value: [1.7],
    caption: 'some text',
  };

  return (
    <GridLayout>
      <CustomCard data={riskToRewardratio} />
      <MultipleXAxis />
      <XAxis />
      <CustomCard data={averageRiskPerTrade} />
      <VerticalBar />
    </GridLayout>
  );
};

export default RiskToReward;
