import { WrapperProps } from "../types/wrappers";

function ContentWrapper({ children }: WrapperProps) {
  return <div className="w-[1200px] mx-auto my-4">{children}</div>;
}

export default ContentWrapper;
