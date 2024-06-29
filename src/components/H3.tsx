import { WrapperProps } from "../types/wrappers";

interface Props extends WrapperProps {
  className?: string;
}

function H3({ children, className }: Props) {
  return <h3 className={`font-semibold mt-2 ${className}`}>{children}</h3>;
}

export default H3;
