import { FaChartLine } from "react-icons/fa";
import { LogoProps } from "@/app/types/interfaces";

const Logo = (props: LogoProps) => (
  <FaChartLine size={props.size} color={props.color} />
);

export default Logo;
