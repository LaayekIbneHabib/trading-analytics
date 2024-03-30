import { FaChartLine } from "react-icons/fa";

interface LogoProps {
  size: string;
  color: string;
}

const Logo: React.FC<LogoProps> = (props) => (
  <FaChartLine size={props.size} color={props.color} />
);

export default Logo;
