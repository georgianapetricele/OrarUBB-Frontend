import React from "react";
import PropTypes from "prop-types";
import "./RoomsAvailability.scss";

const RoomsAvailability = ({ data, allRooms }) => {
  // Days of the week in the specified language
  const days = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];

  // Function to get the frequency symbol based on frequency value
  const getFrequencySymbol = (frequency) => {
    if (frequency === 2) return "x";
    if (frequency === 1) return "-/x";
    if (frequency === 0) return "x/-";
    return "";
  };

  return (
    <div className="rooms-availability-scrollable-container">
      <table border="1px solid black">
        <tbody>
          {days.map((day) => {
            // Filter data for the current day
            // console.log(data);
            const dayData = data.filter((item) => item.classDay === day);
            // console.log(dayData)

            return (
              <React.Fragment key={day}>
                {/* Header Row */}
                <tr>
                  <th className="room">&nbsp;</th>
                  <th className="room">&nbsp;</th>
                  {allRooms.map((room) => (
                    <th className="room" key={room.name}>
                      <a href={`/room/${room.name.replace(/\//g, "-")}`}>
                        {room.name}
                      </a>
                    </th>
                  ))}
                </tr>

                {/* Morning Sessions (Hours 8-13) */}
                {Array.from({ length: 6 }).map((_, rowIndex) => {
                  const currentHour = 8 + rowIndex;

                  return (
                    <tr key={`morning-${day}-${currentHour}`}>
                      <td className="sticky">{day}</td>
                      <td className="hour">
                        {currentHour}-{currentHour + 1}
                      </td>
                      {allRooms.map((room) => {
                        const roomData = dayData.find(
                          (item) =>
                            item.startHour === currentHour &&
                            item.rooms.some((r) => r.roomName === room.name),
                        );

                        const frequency = roomData
                          ? roomData.rooms.find((r) => r.roomName === room.name)
                              ?.frequency
                          : undefined;

                        return (
                          <td key={room.name}>
                            {frequency === undefined
                              ? ""
                              : getFrequencySymbol(frequency)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}

                {/* Second Header Row */}
                <tr>
                  <th className="room">&nbsp;</th>
                  <th className="room">&nbsp;</th>
                  {allRooms.map((room) => (
                    <th className="room" key={room.name}>
                      {room.name}
                    </th>
                  ))}
                </tr>

                {/* Afternoon Sessions (Hours 14-19) */}
                {Array.from({ length: 6 }).map((_, rowIndex) => {
                  const currentHour = 14 + rowIndex;

                  return (
                    <tr key={`afternoon-${day}-${currentHour}`}>
                      <td className="sticky">{day}</td>
                      <td className="hour">
                        {currentHour}-{currentHour + 1}
                      </td>
                      {allRooms.map((room) => {
                        const roomData = dayData.find(
                          (item) =>
                            item.startHour === currentHour &&
                            item.rooms.some((r) => r.roomName === room.name),
                        );

                        const frequency = roomData
                          ? roomData.rooms.find((r) => r.roomName === room.name)
                              ?.frequency
                          : undefined;

                        return (
                          <td key={room.name}>
                            {frequency === undefined
                              ? ""
                              : getFrequencySymbol(frequency)}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

RoomsAvailability.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      classDay: PropTypes.string,
      startHour: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      rooms: PropTypes.arrayOf(
        PropTypes.shape({
          roomName: PropTypes.string,
          frequency: PropTypes.number,
        }),
      ),
    }),
  ).isRequired,
  allRooms: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default RoomsAvailability;
