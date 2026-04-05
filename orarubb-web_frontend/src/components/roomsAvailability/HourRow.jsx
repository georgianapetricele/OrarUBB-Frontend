import PropTypes from "prop-types";
import { getFrequencySymbol, getRoomFrequency } from "./Utils";

const HourRow = ({ day, hour, allRooms, dayData }) => {
  return (
    <tr>
      <td className="sticky">{day}</td>
      <td className="hour">
        {hour}-{hour + 1}
      </td>
      {allRooms.map((room) => {
        const frequency = getRoomFrequency(dayData, room.name, hour);

        return (
          <td key={room.name}>
            {frequency === undefined ? "" : getFrequencySymbol(frequency)}
          </td>
        );
      })}
    </tr>
  );
};

HourRow.propTypes = {
  day: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  allRooms: PropTypes.array.isRequired,
  dayData: PropTypes.array.isRequired,
};

export default HourRow;
