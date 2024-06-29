import { WrapperProps } from "../../types/wrappers";

interface Props extends WrapperProps {
  className?: string;
}

function ContentCard({ children, className }: Props) {
  return (
    <div
      className={`bg-slate-200 dark:bg-slate-800 rounded-lg p-2 ${className}`}
    >
      {children}
    </div>
  );
}

export default ContentCard;
