export const capitalize = (word: string | undefined) => {
  if (word === undefined) return;

  let words: string[] = [];

  if (word?.includes("_")) {
    words = word.split("_");
  }
  if (word?.includes(" ")) {
    words = word.split(" ");
  } else {
    const capitalizeWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return capitalizeWord;
  }

  const capitalizeWords = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return capitalizeWords;
};
