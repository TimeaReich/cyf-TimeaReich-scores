import "./App.css";
import "./AllCountryScores.js";
import allCountryScores from "./AllCountryScores.js";
import CountryScores from "./CountryScores.js";
import Button from "./Button";
import React, { useState } from "react";
import WorldWideScores from "./WorldWideScores";

function App() {
  let score = allCountryScores;
  const [descending, setDescending] = useState(1);
  const [ascending, setAscending] = useState(-1);

  return (
    <div className="App">
      <div>
        <Button
          ascending={ascending}
          setAscending={setAscending}
          setDescending={setDescending}
          descending={descending}
        />
        <h1>High Scored World-Wide</h1>
        <WorldWideScores scores={score} />
        <h2>High Scores per Country</h2>
        <CountryScores
          ascending={ascending}
          descending={descending}
          scores={score}
        />
      </div>
    </div>
  );
}

export default App;
