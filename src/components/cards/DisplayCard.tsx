import { NavLink } from "react-router-dom";

interface DisplayCardProps {
  id: number;
  title: string;
  image: string;
}

function DisplayCard({ id, title, image }: DisplayCardProps) {
  return (
    <div className="relative flex flex-col">
      <NavLink to={`/anime/${id}`} className="bg-slate-200 dark:bg-slate-800 ">
        <img
          className="max-h-60 object-contain hover:scale-110 transition duration-200"
          src={image}
          alt={title}
        />
      </NavLink>
      <div className="">
        <p className="line-clamp-2 overflow-hidden">{title}</p>
      </div>
    </div>
  );
}

export default DisplayCard;
