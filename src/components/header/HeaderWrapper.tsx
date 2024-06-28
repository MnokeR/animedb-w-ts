import { WrapperProps } from "../../types/wrappers";

function HeaderWrapper({ children }: WrapperProps) {
  return (
    <div className="flex flex-wrap px-4 bg-slate-200 dark:bg-slate-800 items-center">
      {children}
    </div>
  );
}

export default HeaderWrapper;
