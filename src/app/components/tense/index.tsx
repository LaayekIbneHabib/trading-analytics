import { TenseProps } from "@/app/types/interfaces";

export const ToPast = ({ word }: TenseProps) => {
  if (word === "Send") {
    return "Sent";
  }
};

export const ToPresentContinuous = ({ word }: TenseProps) => {
  if (word === "Send") {
    return "Sending";
  }
};
