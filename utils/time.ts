const formatTimestampToObj = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return {
    hours: hours < 0 ? "0" : `${hours}`,
    minutes: minutes < 0 ? "0" : `${minutes}`,
    secs: secs < 0 ? "0" : `${secs}`,
  };
};

const calcRemainingHours = (dateTime: string, hours: number = 0) => {
  const targetTime = new Date(
    new Date(dateTime).getTime() + hours * 60 * 60 * 1000, //12 hours in seconds,
  );
  const newTimeRemaining = targetTime.getTime() - new Date().getTime();
  return newTimeRemaining;
};

export { formatTimestampToObj, calcRemainingHours };
