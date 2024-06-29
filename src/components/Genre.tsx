interface Props {
  className?: string;
  genres: string[];
}
function Genre({ className, genres }: Props) {
  const renderGenres = genres.map((genre) => {
    return (
      <span
        key={genre}
        className={`bg-red-700 text-slate-200 rounded text-sm px-1 ${className}`}
      >
        {genre}
      </span>
    );
  });
  return <div className="flex gap-1">{renderGenres}</div>;
}

export default Genre;
