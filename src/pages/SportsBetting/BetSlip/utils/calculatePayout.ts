export const calculatePayout = (odds: number, stake: number) => {
  if (odds > 0) {
    return Number(stake + (odds / 100) * stake);
  } else if (odds < 0) {
    return Number((stake + (stake / Math.abs(odds)) * 100).toFixed(2));
  } else {
    return stake;
  }
};
