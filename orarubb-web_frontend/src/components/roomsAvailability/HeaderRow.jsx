import PropTypes from "prop-types";

const HeaderRow = ({ allRooms, withLinks }) => (
  <tr>
    <th className="room">&nbsp;</th>
    <th className="room">&nbsp;</th>
    {allRooms.map((room) => (
      <th className="room" key={room.name}>
        {withLinks ? (
          <a href={`/room/${room.name.replace(/\//g, "-")}`}>{room.name}</a>
        ) : (
          room.name
        )}
      </th>
    ))}
  </tr>
);

HeaderRow.propTypes = {
  allRooms: PropTypes.array.isRequired,
  withLinks: PropTypes.bool,
};

export default HeaderRow;
