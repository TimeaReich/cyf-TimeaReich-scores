import "./App.css";
import "./AllCountryScores.js";
import allCountryScores from "./AllCountryScores.js";
import CountryScores from "./CountryScores.js";

function App() {
  console.log(allCountryScores);
  let score = allCountryScores;
  return (
    <div className="App">
      <div>
        <h1>High Scores per Country</h1>
        <CountryScores scores={score} />
      </div>
    </div>
  );
}

export default App;
