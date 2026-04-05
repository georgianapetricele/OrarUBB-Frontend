import { NoDataComponent } from "../NoDataComponent";
import PropTypes from "prop-types";
import "../professorSchedule/ProfessorSchedule.scss";

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

const CourseSchedule = ({ scheduleData }) => {
  console.log("Data", scheduleData);
  return (
    <div className="professor-schedule-table-container">
      <h2 className="professor-schedule-table-title">
        Orar {scheduleData[0].courseInstanceName}
      </h2>
      {scheduleData.length === 0 ? (
        <NoDataComponent />
      ) : (
        <table className="professor-schedule-table">
          <thead>
            <tr>
              <th>Ziua</th>
              <th>Orele</th>
              <th>Frecventa</th>
              <th>Sala</th>
              {/* <th>Anul</th> */}
              <th>Formatia</th>
              <th>Tipul</th>
              <th>Cadrul didactic</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item) => (
              <tr key={item.classId}>
                <td>{item.classDay}</td>
                <td>
                  {item.startHour} - {item.endHour}
                </td>
                <td>{formatFrequency(item.frequency)}</td>
                <td>
                  <a href={`#${item.room}`} className="link">
                    {item.room}
                  </a>
                </td>
                {/* <td>
                <a href={`#${item.formation}`} className="link">
                  {item.formation}
                </a>
              </td> */}
                <td>{item.formation}</td>
                <td>{item.classType}</td>
                <td>
                  <a href={`/teacher/${item.teacherCode}`} className="link">
                    {item.teacher}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

CourseSchedule.propTypes = {
  scheduleData: PropTypes.arrayOf(
    PropTypes.shape({
      classId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      classDay: PropTypes.string,
      startHour: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      endHour: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      frequency: PropTypes.number,
      room: PropTypes.string,
      formation: PropTypes.string,
      classType: PropTypes.string,
      teacher: PropTypes.string,
      teacherCode: PropTypes.string,
      courseInstanceName: PropTypes.string,
    }),
  ).isRequired,
};

export default CourseSchedule;
