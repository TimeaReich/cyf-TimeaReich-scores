import React from "react";

const CountryScores = (props) => {
  const countryScore = props.scores;
  const ascending = props.ascending;
  const descending = props.descending;
  countryScore.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });
  return countryScore.map((item) => (
    <div className="table-container">
      <h3>High Scores: {item.name}</h3>
      <table className="table">
        <tbody className="table-body">
          {item.scores
            .sort((a, b) => {
              if (a.s > b.s) {
                return descending;
              } else if (a.s < b.s) {
                return ascending;
              } else {
                return 0;
              }
            })
            .map((item) => (
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
