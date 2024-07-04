import { Link } from "react-router-dom";

interface HeadingProps {
  heading: string[] | string;
  path?: string;
}

function Heading({ heading, path }: HeadingProps) {
  const renderHeading = (
    <h1 className="text-xl font-medium">
      {heading[0]}
      <span className="text-red-500">{heading[1]}</span>
    </h1>
  );
  return (
    <div className="w-full text-center">
      {path ? <Link to={path}>{renderHeading}</Link> : renderHeading}
    </div>
  );
}

export default Heading;
