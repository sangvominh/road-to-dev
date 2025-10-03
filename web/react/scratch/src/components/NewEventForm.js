import { useState } from "react";
import "../assets/NewEventForm.css";

export default function NewEventForm({ addEvent }) {
  const [titleValue, setTitleValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [locationValue, setLocationValue] = useState("HCM");

  const resetForm = () => {
    setTitleValue("");
    setDateValue("");
    setLocationValue("HCM");
  };

  const handleSubmit = (e) => {
    // prevent refresh by default form
    e.preventDefault();

    const event = {
      id: Math.floor(Math.random() * 100000),
      title: titleValue,
      date: dateValue,
      location: locationValue,
    };
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event title: </span>
        <input type="text" value={titleValue} onChange={(e) => setTitleValue(e.target.value)} required />
      </label>
      <label>
        <span>Event date:</span>
        <input type="date" value={dateValue} onChange={(e) => setDateValue(e.target.value)} />
      </label>
      <label>
        <select onChange={(e) => setLocationValue(e.target.value)}>
          <option value="HCM">HCM</option>
          <option value="SG">SG</option>
          <option value="BD">BD</option>
        </select>
      </label>
      <button>Create</button>
    </form>
  );
}
