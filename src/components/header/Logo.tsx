import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex-none mb-1 py-2 select-none">
      <Link to="/">
        <h1 className="font-semibold text-2xl leading-none">
          ANIME<span className="text-red-500">DB</span>
        </h1>
        <p className="text-sm tracking-tighter leading-none">
          SOURCE FOR ANIME
        </p>
      </Link>
    </div>
  );
}

export default Logo;
