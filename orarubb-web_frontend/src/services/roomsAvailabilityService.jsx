const getRoomsSchedules = async (language) => {
  const response = await fetch(`/rooms/rooms-schedule/${language}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch rooms schedule (${response.status})`);
  }
  return response.json();
};

export default getRoomsSchedules;
