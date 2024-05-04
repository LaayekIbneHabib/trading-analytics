// external
import { useColorMode } from '@chakra-ui/react';
import { defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
// internal
import theme from '@/app/theme/theme';
import CustomBorder from '../../customBorder';

const revenueData = [
  {
    label: 'Jan',
    revenue: 54,
  },
  {
    label: 'Feb',
    revenue: 28,
  },
  {
    label: 'Mar',
    revenue: 238,
  },
  {
    label: 'Apr',
    revenue: 30,
  },
  {
    label: 'May',
    revenue: 8,
  },
  {
    label: 'Jun',
    revenue: 609,
  },
  {
    label: 'Jul',
    revenue: 74,
  },
  {
    label: 'Aug',
    revenue: 74,
  },
  {
    label: 'Sep',
    revenue: 74,
  },
  {
    label: 'Oct',
    revenue: 74,
  },
  {
    label: 'Nov',
    revenue: 74,
  },
  {
    label: 'Dec',
    revenue: 74,
  },
];

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.color = theme.colors.brand.primary;
defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.color = '#000000';

const XAxis = () => {
  const { colorMode } = useColorMode();
  defaults.plugins.title.color = colorMode === 'light' ? '#000000' : '#ffffff';

  return (
    <CustomBorder sx={{ height: '100%' }}>
      <Line
        style={{
          width: '100%',
          height: '100%',
          padding: '1rem',
        }}
        data={{
          labels: revenueData.map(data => data.label),
          datasets: [
            {
              label: '45%',
              data: revenueData.map(data => data.revenue),
              backgroundColor: theme.colors.brand.primary,
              borderColor: theme.colors.brand.primary,
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
              text: 'Projected Returns',
            },
          },
        }}
      />
    </CustomBorder>
  );
};

export default XAxis;
