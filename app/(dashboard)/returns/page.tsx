'use client';

// external
import MultipleXAxis from '@/app/components/charts/multpileXAxis';
import VerticalBar from '@/app/components/charts/verticalBar';
import XAxis from '@/app/components/charts/xAxis';
// internal
import GridLayout from '@/app/components/gridLayout';
import CustomCard from '@/app/components/customCard';

const Returns = () => {
  const percentageReturns = {
    type: 'percentage',
    symbol: '%',
    heading: 'Your % returns',
    label: 'You are up',
    value: 35,
    caption: 'in 1 month, 3 weeks and 5 days',
  };

  const ranking = {
    type: 'percentage',
    symbol: '%',
    heading: 'Your ranking',
    label: 'You are top',
    value: 1.3,
    caption: 'of the traders',
  };

  return (
    <GridLayout>
      <CustomCard data={percentageReturns} />
      <VerticalBar />
      <XAxis />
      <CustomCard data={ranking} />
      <MultipleXAxis />
    </GridLayout>
  );
};

export default Returns;
