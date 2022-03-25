//import React from "react";

const CountryScores = (props) => {
  console.log(props.scores);
  const countryScore = props.scores;
  return countryScore.map((item) => (
    <div>
      <h3>High Scores: {item.name}</h3>
      <table className="table">
        <tbody>
          {item.scores.map((item) => (
            <tr>
              <th scope="row">{item.n}</th>
              <th scope="row">{item.s}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ));
};

export default CountryScores;
