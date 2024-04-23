"use client";

// internal
import GridLayout from "@/app/components/composite/gridLayout";
import CustomCard from "@/app/components/composite/customCard";
// external
import MultipleXAxis from "@/app/components/composite/charts/multpileXAxis";
import VerticalBar from "@/app/components/composite/charts/verticalBar";
import XAxis from "@/app/components/composite/charts/xAxis";

const Returns = () => {
  const percentageReturns = {
    type: "percentage",
    heading: "Your returns %",
    label: "You are up",
    value: 35,
    caption: "in 1 month, 3 weeks and 5 days.",
  };

  const ranking = {
    type: "percentage",
    heading: "Your ranking",
    label: "You are top",
    value: 1.3,
    caption: "of the traders",
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
