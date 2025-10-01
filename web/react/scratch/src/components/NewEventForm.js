import { useState, useRef } from "react";
import "../assets/NewEventForm.css";

export default function NewEventForm({ addEvent }) {
  // const [titleValue, setTitleValue] = useState("");
  // const [dateValue, setDateValue] = useState("");

  const title = useRef()
  const date = useRef()

  const resetForm = () => {
    // setTitleValue("");
    // setDateValue("");
  };

  const handleSubmit = (e) => {
    // prevent refresh by default form
    e.preventDefault();

    const event = {
      id: Math.floor(Math.random() * 100000),
      title: title.current.value,
      date: date.current.value,
    };
    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event title: </span>
        <input type="text" ref={title} />
      </label>
      <label>
        <span>Event date:</span>
        <input type="date" ref={date} />
      </label>
      <button>Create</button>
    </form>
  );
}
