export const formatUnixTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  const meridiem = hours >= 12 ? "pm" : "am";

  return `${formattedHours}:${formattedMinutes} ${meridiem}`;
};
