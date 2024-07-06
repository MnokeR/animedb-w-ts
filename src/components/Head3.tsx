import { WrapperProps } from "../types/wrappers";

interface H3Props extends WrapperProps {
  className?: string;
}

function Head3({ children, className }: H3Props) {
  return <h3 className={`font-semibold mt-2 ${className}`}>{children}</h3>;
}

export default Head3;
