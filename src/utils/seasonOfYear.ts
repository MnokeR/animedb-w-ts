interface Seasons {
  label: string;
  months: number[];
}

const date = new Date();
const monthIndex = date.getMonth();
const month = monthIndex + 1;
const year = date.getFullYear();
const seasons: Seasons[] = [
  { label: "Winter", months: [1, 2, 3] },
  { label: "Spring", months: [4, 5, 6] },
  { label: "Summer", months: [7, 8, 9] },
  { label: "Fall", months: [10, 11, 12] },
];
const currentYear = year;

export const seasonOfYear = () => {
  let currentSeason = "";
  let nextSeason = "";

  let nextYear = year;

  seasons.forEach((season) => {
    if (season.months.includes(month)) {
      currentSeason = season.label;
    }
    const currentIndex = seasons.findIndex((s) => s.label === currentSeason);
    const nextIndex = (currentIndex + 1) % seasons.length;
    nextSeason = seasons[nextIndex].label;
  });
  if (currentSeason === "Fall") nextYear += 1;

  return { currentSeason, nextSeason, currentYear, nextYear };
};
