import { AnimeCharacters } from "../../apis/queries/types/animeCharacters";

interface CharacterCard {
  charImage: string;
  charName: string;
  charRole: string;
  voiceImage: string;
  voiceName: string;
}

function CharacterCard({
  charImage,
  charName,
  charRole,
  voiceImage,
  voiceName,
}: CharacterCard) {
  return (
    <div className="flex flex-wrap xs:w-full text-sm p-3 rounded bg-slate-50 dark:bg-slate-900">
      <div className="flex flex-1 gap-2">
        <img className="w-[70px] h-[110px" src={charImage} />
        <div>
          <p>{charName}</p>
          <p className="text-xs">"{charRole}"</p>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-2">
        <img className="w-[70px] h-[110px" src={voiceImage} />
        <p className="self-end">{voiceName}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
