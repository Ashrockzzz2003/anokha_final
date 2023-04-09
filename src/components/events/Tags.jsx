import React, { useState } from "react";
import "../styles/events.css"; // import custom CSS file for Glassmorphism styling

const days = ["day1", "day2", "day3"];
const departments = ["use", "cys", "eee"];
const tags = ["iot", "hacking", "drone"];

function Dropdowns() {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  function handleDayChange(event) {
    setSelectedDay(event.target.value);
  }

  function handleDepartmentChange(event) {
    setSelectedDepartment(event.target.value);
  }

  function handleTagChange(event) {
    setSelectedTag(event.target.value);
  }

  return (
    <div className="glassmorphism-container mt-5 w-fit ml-auto mr-auto">
      <div className="glassmorphism-card w-fit block lg:flex">
        <div className="glassmorphism-dropdown block">
          <label htmlFor="day-select">Day:</label>
          <select
            id="day-select"
            value={selectedDay}
            onChange={handleDayChange}
          >
            <option value="">Day</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>

        <div className="glassmorphism-dropdown inline-block">
          <label htmlFor="department-select">Department:</label>
          <select
            id="department-select"
            value={selectedDepartment}
            onChange={handleDepartmentChange}
          >
            <option value="">Department</option>
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div className="glassmorphism-dropdown inline-block">
          <label htmlFor="tag-select">Tag:</label>
          <select id="tag-select" value={selectedTag} onChange={handleTagChange}>
            <option value="">Tag</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Dropdowns;
