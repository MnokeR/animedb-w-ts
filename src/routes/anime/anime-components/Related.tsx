import { AnimeDetails } from "../../../apis/queries/types/animeDetails";
import CharacterCard from "../../../components/cards/CharacterCard";
import Heading from "../../../components/Heading";

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
      <div key={relation.id} className="flex w-full lg:w-96">
        <CharacterCard
          img={relation.node.coverImage.large}
          name={relation.node.title.userPreferred}
          info={[
            relation.relationType,
            `${relation.node.type} ${relation.node.status}`,
          ]}
          link={link}
        />
      </div>
    );
  });
  return (
    <div className="flex flex-wrap justify-center max-h-[232px] gap-2 overflow-auto scrollbar">
      <Heading heading={["Relations"]} />
      {renderRelations}
    </div>
  );
}

export default Related;
