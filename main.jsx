import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("/api/strava") // Ajuste conforme seu backend ou mock
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Minhas atividades recentes</h2>
      <ul>
        {activities.map((act, index) => (
          <li key={index}>
            {act.name} — {(act.distance / 1000).toFixed(2)} km
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
