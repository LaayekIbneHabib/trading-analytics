import { FaUncharted } from "react-icons/fa";

interface LogoProps {
  size: string;
  color: string;
}

const Logo: React.FC<LogoProps> = (props) => (
  <FaUncharted size={props.size} color={props.color} />
);

export default Logo;
