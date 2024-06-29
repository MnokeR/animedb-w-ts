import { WrapperProps } from "../types/wrappers";
interface Props extends WrapperProps {
  className?: string;
}

function ContentWrapper({ children, className }: Props) {
  return (
    <div className={`max-w-[1200px] mx-auto my-4 ${className}`}>{children}</div>
  );
}

export default ContentWrapper;
