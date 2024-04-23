"use client";

// internal
import GridLayout from "@/app/components/composite/gridLayout";
import CustomCard from "@/app/components/composite/customCard";
// external
import MultipleXAxis from "@/app/components/composite/charts/multpileXAxis";
import VerticalBar from "@/app/components/composite/charts/verticalBar";
import XAxis from "@/app/components/composite/charts/xAxis";

const RiskToReward = () => {
  const riskToRewardratio = {
    type: "ratio",
    heading: "Average risk to reward ratio",
    label: "some text",
    value: [1, 2],
    caption: "some text",
  };

  const averageRiskPerTrade = {
    type: "percentage",
    heading: "Average risk per trade",
    label: "some text",
    value: [1.7],
    caption: "some text",
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
