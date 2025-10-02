import { useState } from "react";
import { useFetch } from '../hook/useFetch'

export default function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const {data: trips, isPending, error} = useFetch(url)
  
  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <p>Loading trips.........</p>}
      {error && <p>{error}</p>}
      <ul>
        {trips && trips.map((trip) => (
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
