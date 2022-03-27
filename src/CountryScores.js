//import React from "react";

const CountryScores = (props) => {
  const countryScore = props.scores;
  return countryScore.map((item) => (
    <div className="table-container">
      <h3>High Scores: {item.name}</h3>
      <table className="table">
        <tbody className="table-body">
          {item.scores.map((item) => (
            <tr>
              <th className="table-rows" scope="row">
                {item.n}
              </th>
              <th className="table-rows" scope="row">
                {item.s}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ));
};

export default CountryScores;
