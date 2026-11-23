
function AttendanceCard({
  name,
  rollNo,
  status,
  onPresent,
  onAbsent
}) {
  return (
    <div className="card">
      <h3>{name}</h3>

      <p>Roll No: {rollNo}</p>

      <p>
        Attendance Status:
        <span className={status === "Present" ? "present" : "absent"}>
          {" "}{status}
        </span>
      </p>

      <button onClick={onPresent}>
        Present
      </button>

      <button onClick={onAbsent}>
        Absent
      </button>
    </div>
  );
}

export default AttendanceCard;
