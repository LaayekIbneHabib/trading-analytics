"use client";

// internal
import CustomButton from "../../components/ui/customButton";
// external
import { MdAlternateEmail } from "react-icons/md";

const Explore = () => {
  return (
    <CustomButton
      name="Send"
      type="button"
      variant="outline"
      leftIcon={<MdAlternateEmail />}
      isLoading={false}
    />
  );
};

export default Explore;
