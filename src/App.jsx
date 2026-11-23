
import { useState } from "react";
import "./App.css";

function AttendanceCard({ name, rollNo, status, onPresent, onAbsent }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Roll No: {rollNo}</p>
      <p>
        Status: <b>{status}</b>
      </p>

      <button className="present" onClick={onPresent}>
        Present
      </button>

      <button className="absent" onClick={onAbsent}>
        Absent
      </button>
    </div>
  );
}

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Pravin Kumar", rollNo: "101", status: "Not Marked" },
    { id: 2, name: "Rahul", rollNo: "102", status: "Not Marked" },
    { id: 3, name: "Vishnu", rollNo: "103", status: "Not Marked" },
    { id: 4, name: "Arun", rollNo: "104", status: "Not Marked" }
  ]);

  const updateAttendance = (id, status) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? { ...student, status: status }
          : student
      )
    );
  };

  return (
    <div className="container">
      <h1>Student Attendance System</h1>

      <div className="student-list">
        {students.map((student) => (
          <AttendanceCard
            key={student.id}
            name={student.name}
            rollNo={student.rollNo}
            status={student.status}
            onPresent={() => updateAttendance(student.id, "Present")}
            onAbsent={() => updateAttendance(student.id, "Absent")}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
