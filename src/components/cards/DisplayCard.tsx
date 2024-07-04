import { NavLink } from "react-router-dom";

interface DisplayCardProps {
  id: number;
  title: string;
  image: string;
}

function DisplayCard({ id, title, image }: DisplayCardProps) {
  return (
    <div className="relative flex flex-col">
      <div className="p-2 bg-slate-200 dark:bg-slate-800 rounded">
        <NavLink
          to={`/anime/${id}`}
          className="bg-slate-200 dark:bg-slate-800 "
        >
          <img
            className="h-60 hover:scale-105 transition duration-200 rounded"
            src={image}
            alt={title}
          />
        </NavLink>
      </div>
      <div>
        <p className="text-sm line-clamp-2 overflow-hidden">{title}</p>
      </div>
    </div>
  );
}

export default DisplayCard;
