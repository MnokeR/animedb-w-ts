const date = new Date();
const currentYear = date.getFullYear();

interface Years {
  value: number;
}

export const yearsFromTo = (to: number) => {
  const years: Years[] = [];

  if (currentYear > to) {
    for (let i = currentYear; i >= to; i--) {
      years.push({ value: i });
    }
  }

  if (currentYear < to) {
    for (let i = currentYear; i < to; i++) {
      years.push({ value: i });
    }
  }
  return years;
};
