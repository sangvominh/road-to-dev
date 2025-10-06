import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hi {name}, Contact</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aspernatur quae voluptatum sed at tempore sequi
        maxime nulla ut incidunt?
      </p>
    </div>
  );
}
