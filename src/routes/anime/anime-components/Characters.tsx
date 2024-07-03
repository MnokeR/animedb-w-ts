import { AnimeDetails } from "../../../apis/queries/types/animeDetails";
import CharacterCard from "../../../components/cards/CharacterCard";
interface CharactersProps {
  data: AnimeDetails;
}

function Characters({ data }: CharactersProps) {
  const renderPreviewCharacters = data.Media.characterPreview.edges.map(
    (character) => {
      return (
        <div key={character.id}>
          <CharacterCard
            charImage={character.node.image?.large}
            charName={character.node.name?.userPreferred}
            charRole={character?.role}
            voiceImage={character.voiceActors[0]?.image.large || undefined}
            voiceName={
              character.voiceActors[0]?.name.userPreferred || undefined
            }
          />
        </div>
      );
    }
  );
  console.log(data);
  return (
    <div className="lg:flex flex-wrap justify-center max-h-[400px] overflow-y-auto scrollbar gap-2">
      {renderPreviewCharacters}
    </div>
  );
}

export default Characters;
