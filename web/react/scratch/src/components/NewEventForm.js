import { useState } from "react";
import "../assets/NewEventForm.css";

export default function NewEventForm({ addEvent }) {
  const [titleValue, setTitleValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const resetForm = () => {
    setTitleValue("");
    setDateValue("");
  };

  const handleSubmit = (e) => {
    // prevent refresh by default form
    e.preventDefault();
    const event = {
      id: Math.floor(Math.random() * 100000),
      title: titleValue,
      date: dateValue,
    };
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event title: </span>
        <input type="text" onChange={(e) => setTitleValue(e.target.value)} value={titleValue} required />
      </label>
      <label>
        <span>Event date:</span>
        <input type="date" onChange={(e) => setDateValue(e.target.value)} value={dateValue} required />
      </label>
      <button>Create</button>
    </form>
  );
}
