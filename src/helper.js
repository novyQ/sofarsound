export const timeFormat = string => {
  const timeArray = string.split(":");
  if (Number(timeArray[0]) < 12) {
    return `${timeArray[0]}:${timeArray[1]}am`;
  }

  if (Number(timeArray[0]) === 12) {
    return `${string}pm`;
  }

  return `${Number(timeArray[0] - 12)}:${timeArray[1]}pm`;
};
