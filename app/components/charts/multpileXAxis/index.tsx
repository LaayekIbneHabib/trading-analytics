// external
import { defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
// interal
import theme from '@/app/theme/theme';
import { useColorMode } from '@chakra-ui/react';
import CustomBorder from '../../customBorder';

const revenueData = [
  {
    label: 'Jan',
    you: 12,
    nifty50: 6,
  },
  {
    label: 'Feb',
    you: -6,
    nifty50: 2,
  },
  {
    label: 'Mar',
    you: -15,
    nifty50: 3,
  },
  {
    label: 'Apr',
    you: -35,
    nifty50: 16,
  },
  {
    label: 'May',
    you: 25,
    nifty50: 19,
  },
  {
    label: 'Jun',
    you: 45,
    nifty50: 24,
  },
  {
    label: 'Jul',
    you: 76,
    nifty50: 32,
  },
  {
    label: 'Aug',
    you: 64,
    nifty50: 36,
  },
  {
    label: 'Sep',
    you: 32,
    nifty50: 24,
  },
  {
    label: 'Oct',
    you: 89,
    nifty50: 29,
  },
  {
    label: 'Nov',
    you: 12,
    nifty50: 37,
  },
  {
    label: 'Dec',
    you: 78,
    nifty50: 45,
  },
];

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.color = theme.colors.brand.primary;
defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';

const MultipleXAxis = () => {
  const { colorMode } = useColorMode();
  defaults.plugins.title.color = colorMode === 'light' ? '#000000' : '#ffffff';

  return (
    <CustomBorder sx={{ height: '100%', width: '100%' }}>
      <Line
        style={{
          height: '100%',
          width: '100%',
          padding: '1rem',
        }}
        data={{
          labels: revenueData.map(data => data.label),
          datasets: [
            {
              label: 'You',
              data: revenueData.map(data => data.you),
              backgroundColor: theme.colors.brand.primary,
              borderColor: theme.colors.brand.primary,
            },
            {
              label: 'Nifty 50',
              data: revenueData.map(data => data.nifty50),
              backgroundColor: theme.colors.brand.danger,
              borderColor: theme.colors.brand.danger,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              position: 'right',
            },
          },
          elements: {
            line: {
              tension: 0.1,
            },
          },
          plugins: {
            title: {
              font: {
                size: 15,
              },
              text: 'You vs Nifty 50',
            },
          },
        }}
      />
    </CustomBorder>
  );
};

export default MultipleXAxis;
