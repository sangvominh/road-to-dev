import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';

function App() {
  const [tripsList, setTripList] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setTripList(!tripsList)}>hide trip list</button>
      {tripsList && <TripList />}
    </div>
  );
}

export default App;
