import { AnimeDetails } from "../../../apis/queries/types/animeDetails";
import CharacterCard from "../../../components/cards/CharacterCard";
interface CharactersProps {
  data: AnimeDetails;
}

function Characters({ data }: CharactersProps) {
  const renderPreviewCharacters = data.Media.characterPreview.edges.map(
    (character) => {
      return (
        <div key={character.id} className="my-2">
          <CharacterCard
            charImage={character.node.image.large}
            charName={character.node.name.userPreferred}
            charRole={character.role}
            voiceImage={character.voiceActors[0].image.large}
            voiceName={character.voiceActors[0].name.userPreferred}
          />
        </div>
      );
      // <div key={character.id} className="flex flex-wrap xs:w-full text-sm">
      //   <div className="flex flex-1">
      //     <img
      //       className="w-[80px] h-[120px"
      //       src={character.node.image.large}
      //     />
      //     <div>
      //       <p>{character.node.name.userPreferred}</p>
      //       <p>{character.role}</p>
      //     </div>
      //   </div>
      //   <div className="flex flex-row-reverse">
      //     <img
      //       className="w-[80px] h-[120px"
      //       src={character.voiceActors[0].image.large}
      //     />
      //     <p className="self-end">
      //       {character.voiceActors[0].name.userPreferred}
      //     </p>
      //   </div>
      // </div>
    }
  );
  console.log(data);
  return (
    <div className="max-h-[400px] overflow-y-auto scrollbar">
      {renderPreviewCharacters}
    </div>
  );
}

export default Characters;
