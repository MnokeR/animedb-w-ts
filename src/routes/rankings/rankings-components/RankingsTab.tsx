import { NavLink } from "react-router-dom";

function RankingsTab() {
  const tabs = [
    { label: "TOP", path: "top" },
    { label: "POPULAR", path: "/rankings/popular" },
    { label: "TRENDING", path: "/rankings/trending" },
  ];

  const active =
    "text-red-500 font-semibold select-none border-b-4 border-red-500";
  const inActive =
    "hover:text-red-500 select-none transition ease-in duration-100 h-10 hover:border-b-4 hover:border-red-500";

  const renderTabs = tabs.map((tab) => {
    return (
      <NavLink
        key={tab.label}
        to={tab.path}
        className={({ isActive }) => (isActive ? active : inActive)}
      >
        {tab.label}
      </NavLink>
    );
  });

  return (
    <div className="flex justify-evenly h-10 mb-2 border-b-2 border-slate-200 dark:border-slate-800">
      {renderTabs}
    </div>
  );
}

export default RankingsTab;
