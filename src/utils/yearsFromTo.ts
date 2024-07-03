export const yearsFromTo = (to: number) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  let years = [];
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
