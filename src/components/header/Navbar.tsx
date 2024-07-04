import { NavLink } from "react-router-dom";

interface Links {
  label: string;
  path: string;
}

function Navbar() {
  const active: string = "text-red-500 font-semibold select-none";
  const inActive: string =
    "hover:text-red-500 select-none transition ease-in duration-100";

  const links: Links[] = [
    { label: "HOME", path: "/" },
    { label: "SEARCH", path: "search" },
    { label: "RANKINGS", path: "rankings" },
  ];

  const renderLinks = links.map((link) => {
    return (
      <NavLink
        to={link.path}
        key={link.label}
        className={({ isActive }) => (isActive ? active : inActive)}
      >
        {link.label}
      </NavLink>
    );
  });
  return <div className="flex-1 flex justify-center gap-4">{renderLinks}</div>;
}

export default Navbar;
