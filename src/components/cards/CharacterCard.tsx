import { Link } from "react-router-dom";
import { capitalize } from "../../utils/capitalize";

interface CharacterCard {
  img: string;
  name: string;
  info: string[];
  className?: string;
  link?: string;
}

function CharacterCard({ img, name, info, className, link }: CharacterCard) {
  const renderInfo = info.map((i) => {
    return (
      <p className="text-xs" key={i}>
        {capitalize(i)}
      </p>
    );
  });

  const image = <img className="h-20" src={img} alt={name} />;

  return (
    <div
      className={`flex flex-1 gap-2 h-20 text-sm bg-slate-100 dark:bg-slate-900 ${className}`}
    >
      <div>{link ? <Link to={link}>{image}</Link> : image}</div>
      <div className="flex flex-col py-1">
        <p className="flex-1">{name}</p>
        {renderInfo}
      </div>
    </div>
  );
}

export default CharacterCard;
