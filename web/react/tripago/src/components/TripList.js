import { useCallback, useEffect, useState } from "react";

export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    setTrips(json);
  }, [url]);

  useEffect(() => {
    fetchTrips();
  }, [url, fetchTrips]);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h2>{trip.title}</h2>
            <p>{trip.price}</p>
            <p>{trip.loc}</p>
          </li>
        ))}
      </ul>
      <div className="filter">
        <button
          onClick={() => {
            setUrl("http://localhost:3000/trips?loc=europe");
          }}
        >
          trip europe
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/trips?loc=america");
          }}
        >
          trip europe
        </button>
      </div>
    </div>
  );
}
