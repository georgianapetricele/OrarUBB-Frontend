import React from "react";
import PropTypes from "prop-types";
import "./RoomsAvailability.scss";

import HourRow from "./HourRow";
import HeaderRow from "./HeaderRow";

const RoomsAvailability = ({ data, allRooms }) => {
  const days = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];

  return (
    <div className="rooms-availability-scrollable-container">
      <table border="1px solid black">
        <tbody>
          {days.map((day) => {
            const dayData = data.filter((item) => item.classDay === day);

            return (
              <React.Fragment key={day}>
                <HeaderRow allRooms={allRooms} withLinks />

                {Array.from({ length: 6 }).map((_, i) => (
                  <HourRow
                    key={`morning-${day}-${i}`}
                    day={day}
                    hour={8 + i}
                    allRooms={allRooms}
                    dayData={dayData}
                  />
                ))}

                <HeaderRow allRooms={allRooms} />

                {Array.from({ length: 6 }).map((_, i) => (
                  <HourRow
                    key={`afternoon-${day}-${i}`}
                    day={day}
                    hour={14 + i}
                    allRooms={allRooms}
                    dayData={dayData}
                  />
                ))}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

RoomsAvailability.propTypes = {
  data: PropTypes.array.isRequired,
  allRooms: PropTypes.array.isRequired,
};

export default RoomsAvailability;
