interface CharacterCard {
  charImage?: string;
  charName?: string;
  charRole?: string;
  voiceImage?: string;
  voiceName?: string;
}

function CharacterCard({
  charImage,
  charName,
  charRole,
  voiceImage,
  voiceName,
}: CharacterCard) {
  return (
    <div className="flex flex-wrap text-sm rounded bg-slate-50 dark:bg-slate-900">
      <div className="flex-1 w-[188px] flex justify-start gap-2">
        <img className="w-[60px] h-[90px]" src={charImage} />
        <div>
          <p>{charName}</p>
          <p className="text-xs">"{charRole}"</p>
        </div>
      </div>
      <div className="flex-1 w-[188px] flex flex-row-reverse gap-2">
        <img className="w-[60px] h-[90px]" src={voiceImage} />
        <p>{voiceName}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
