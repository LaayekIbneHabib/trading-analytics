// interal
import theme from "../../../../theme/theme";
import { useColorMode } from "@chakra-ui/react";
// external
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const revenueData = [
  {
    label: "Jan",
    you: 12,
    nifty50: 6,
  },
  {
    label: "Feb",
    you: -6,
    nifty50: 2,
  },
  {
    label: "Mar",
    you: -15,
    nifty50: 3,
  },
  {
    label: "Apr",
    you: -35,
    nifty50: 16,
  },
  {
    label: "May",
    you: 25,
    nifty50: 19,
  },
  {
    label: "Jun",
    you: 45,
    nifty50: 24,
  },
  {
    label: "Jul",
    you: 76,
    nifty50: 32,
  },
  {
    label: "Aug",
    you: 64,
    nifty50: 36,
  },
  {
    label: "Sep",
    you: 32,
    nifty50: 24,
  },
  {
    label: "Oct",
    you: 89,
    nifty50: 29,
  },
  {
    label: "Nov",
    you: 12,
    nifty50: 37,
  },
  {
    label: "Dec",
    you: 78,
    nifty50: 45,
  },
];

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.color = theme.colors.brand.primary;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";

const MultipleXAxis = () => {
  const { colorMode } = useColorMode();
  defaults.plugins.title.color = colorMode === "light" ? "#000000" : "#ffffff";

  return (
    <Line
      style={{
        backgroundColor:
          colorMode === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.1)",
        width: "100%",
        height: "100%",
        padding: "1rem",
      }}
      data={{
        labels: revenueData.map((data) => data.label),
        datasets: [
          {
            label: "You",
            data: revenueData.map((data) => data.you),
            backgroundColor: "#064FF0",
            borderColor: "#064FF0",
          },
          {
            label: "Nifty 50",
            data: revenueData.map((data) => data.nifty50),
            backgroundColor: "#FF3030",
            borderColor: "#FF3030",
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            position: "right",
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
            text: "You vs Nifty 50",
          },
        },
      }}
    />
  );
};

export default MultipleXAxis;
