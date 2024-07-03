import { AnimeDetails } from "../../../apis/queries/types/animeDetails";
import Heading from "../../../components/Heading";
import CharacterCard from "../../../components/cards/CharacterCard";
interface CharactersProps {
  data: AnimeDetails;
}

function AnimeCharacters({ data }: CharactersProps) {
  const renderPreviewCharacters = data.Media.characterPreview.edges.map(
    (character) => {
      return (
        <div key={character.id} className="flex w-full lg:w-96">
          <CharacterCard
            img={character.node.image?.large}
            name={character.node.name?.userPreferred}
            info={[character?.role]}
          />

          <CharacterCard
            img={character?.voiceActors[0]?.image.large}
            name={character?.voiceActors[0]?.name.userPreferred}
            info={[character?.voiceActors[0]?.language]}
            className="flex-row-reverse text-end"
          />
        </div>
      );
    }
  );
  console.log(data);
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Heading heading={["Characters"]} />
      {renderPreviewCharacters}
    </div>
  );
}

export default AnimeCharacters;
