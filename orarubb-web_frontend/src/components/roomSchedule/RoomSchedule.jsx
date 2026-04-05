import "./RoomSchedule.scss";
import PropTypes from "prop-types";

const formatFrequency = (frequency) => {
  switch (frequency) {
    case 0:
      return "Săptămânal";
    case 1:
      return "Săptămâna impară";
    default:
      return "Săptămâna pară";
  }
};

const getScheduleRowKey = (item) =>
  item.classId ??
  `${item.classDay}-${item.startHour}-${item.endHour}-${item.courseInstanceCode}-${item.formation}-${item.teacherCode ?? item.teacher}`;

const RoomSchedule = ({ scheduleData, room }) => {
  return (
    <div className="room-schedule-table-container">
      <h2 className="room-schedule-table-title">Orar: Sala {room}</h2>
      <table className="room-schedule-table">
        <thead>
          <tr>
            <th>Ziua</th>
            <th>Orele</th>
            <th>Frecventa</th>
            <th>Formatia</th>
            <th>Tipul</th>
            <th>Disciplina</th>
            <th>Cadru didactic</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item) => (
            <tr key={getScheduleRowKey(item)}>
              <td>{item.classDay}</td>
              <td>
                {item.startHour} - {item.endHour}
              </td>
              <td>{formatFrequency(item.frequency)}</td>
              <td>{item.formation}</td>
              <td>{item.classType}</td>
              <td>
                <a href={`/course/${item.courseInstanceCode}`} className="link">
                  {item.courseInstanceName}
                </a>
              </td>
              <td>
                <a href={`/teacher/${item.teacherCode}`} className="link">
                  {item.teacher}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

RoomSchedule.propTypes = {
  scheduleData: PropTypes.arrayOf(
    PropTypes.shape({
      classId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      classDay: PropTypes.string,
      startHour: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      endHour: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      frequency: PropTypes.number,
      formation: PropTypes.string,
      classType: PropTypes.string,
      courseInstanceCode: PropTypes.string,
      courseInstanceName: PropTypes.string,
      teacher: PropTypes.string,
      teacherCode: PropTypes.string,
    }),
  ).isRequired,
  room: PropTypes.string,
};

export default RoomSchedule;
