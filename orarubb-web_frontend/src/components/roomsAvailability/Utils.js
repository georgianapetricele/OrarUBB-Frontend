export const getFrequencySymbol = (frequency) => {
  if (frequency === 2) return "x";
  if (frequency === 1) return "-/x";
  if (frequency === 0) return "x/-";
  return "";
};

export const getRoomFrequency = (dayData, roomName, hour) => {
  const roomData = dayData.find(
    (item) =>
      item.startHour === hour &&
      item.rooms.some((r) => r.roomName === roomName),
  );

  return roomData?.rooms.find((r) => r.roomName === roomName)?.frequency;
};
