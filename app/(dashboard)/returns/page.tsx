'use client';

// external
import MultipleXAxis from '../../components/composite/charts/multpileXAxis';
import VerticalBar from '../../components/composite/charts/verticalBar';
import XAxis from '../../components/composite/charts/xAxis';
// internal
import GridLayout from '../../components/composite/gridLayout';
import CustomCard from '../../components/composite/customCard';

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
