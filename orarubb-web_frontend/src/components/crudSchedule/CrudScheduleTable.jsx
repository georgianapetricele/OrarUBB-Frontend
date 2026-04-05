import "./CrudScheduleTable.scss";
import PropTypes from "prop-types";

const CrudScheduleTable = ({ scheduleData, onDelete }) => {
  return (
    <div className="crud-table-container">
      <h2 className="crud-table-title">Orarul meu</h2>
      <table className="crud-table">
        <thead>
          <tr>
            <th>Ziua</th>
            <th>Orele</th>
            <th>Frecvența</th>
            <th>Sala</th>
            <th>Formația</th>
            <th>Tipul</th>
            <th>Disciplina</th>
            <th>Cadrul Didactic</th>
            <th>Acțiuni</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={item.classId || index}>
              <td>{item.classDay}</td>
              <td>
                {item.startHour} - {item.endHour}
              </td>
              <td>
                {item.frequency === 0
                  ? "Săptămânal"
                  : item.frequency === 1
                    ? "Săptămâna impară"
                    : "Săptămâna pară"}
              </td>
              <td>
                <a href={`/${item.room}`} className="link">
                  {item.room}
                </a>
              </td>
              <td>{item.formation}</td>
              <td>{item.classType}</td>
              <td>
                <span>{item.courseInstanceName}</span>
              </td>
              <td>
                <a href={`/${item.teacher}`} className="link">
                  {item.teacher}
                </a>
              </td>
              <td>
                {/*<button*/}
                {/*    className="edit-button"*/}
                {/*    onClick={() => onEdit(index)}*/}
                {/*>*/}
                {/*  Editează*/}
                {/*</button>*/}
                <button
                  className="delete-button"
                  onClick={() => onDelete(index)}
                >
                  Șterge
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CrudScheduleTable.propTypes = {
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
      courseInstanceName: PropTypes.string,
      teacher: PropTypes.string,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CrudScheduleTable;
