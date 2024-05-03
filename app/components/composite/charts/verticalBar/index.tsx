// external
import { useColorMode } from '@chakra-ui/react';
import { defaults } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
// internal
import theme from '../../../../theme/theme';

const revenueData = [
  {
    label: 'Sun',
    net: -83809,
  },
  {
    label: 'Mon',
    net: 64854,
  },
  {
    label: 'Tue',
    net: -42393,
  },
  {
    label: 'Wed',
    net: 117238,
  },
  {
    label: 'Thu',
    net: 82830,
  },
  {
    label: 'Fri',
    net: -41893,
  },
  {
    label: 'Sat',
    net: 103609,
  },
];

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.color = theme.colors.brand.primary;
defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';

const VerticalBar = () => {
  const { colorMode } = useColorMode();

  return (
    <Bar
      style={{
        backgroundColor: colorMode === 'light' ? '#ffffff' : theme.colors.brand.light,
        width: '100%',
        height: '100%',
        padding: '1rem',
        borderRadius: '1rem',
      }}
      data={{
        labels: revenueData.map(data => data.label),
        datasets: [
          {
            label: 'net',
            data: revenueData.map(data => data.net),
            backgroundColor: revenueData.map(data =>
              data.net > 1 ? theme.colors.brand.primary : theme.colors.brand.danger,
            ),
            borderColor: revenueData.map(data =>
              data.net > 1 ? theme.colors.brand.primary : theme.colors.brand.danger,
            ),
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.1,
          },
        },
        scales: {
          y: {
            display: false,
          },
        },
        plugins: {
          title: {
            font: {
              size: 15,
            },
            text: 'Last 7 days',
          },
        },
      }}
    />
  );
};

export default VerticalBar;
