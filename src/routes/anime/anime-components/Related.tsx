import { NavLink } from "react-router-dom";
import { AnimeDetails } from "../../../apis/queries/types/animeDetails";

interface RelatedProps {
  data: AnimeDetails;
}

function Related({ data }: RelatedProps) {
  const renderRelations = data?.Media?.relations?.edges?.map((relation) => {
    const type = relation.node.type;
    let link: string = "";
    if (type === "MANGA") link = `/manga/${relation.node.id}`;
    if (type === "ANIME") link = `/anime/${relation.node.id}`;

    return (
      <div className="relative" key={relation.id}>
        <NavLink to={link}>
          <img
            className="h-[192px]"
            src={relation.node.coverImage.large}
            alt={relation.node.title.userPreferred}
          />
          <span className="absolute top-0 h-[192px] w-full text-sm text-slate-50 opacity-0 hover:bg-slate-800/60 hover:opacity-100 transition ease-in-out duration-200">
            {relation.node.title.userPreferred}
          </span>
          <p className="text-sm">{relation.relationType}</p>
          <p className="text-sm">{relation.node.type}</p>
        </NavLink>
      </div>
    );
  });
  return (
    <div className="flex flex-wrap justify-center gap-2">{renderRelations}</div>
  );
}

export default Related;
