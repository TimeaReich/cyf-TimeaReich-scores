import React from "react";

const WorldWideScores = (props) => {
  const scores = props.scores;
  let top3 = [...scores];

  top3 = scores.map((item) =>
    item.scores.sort((a, b) => {
      if (a.s > b.s) {
        return -1;
      } else if (a.s < b.s) {
        return 1;
      } else {
        return 0;
      }
    })
  );

  let arr = [];
  top3.map((item) => arr.push(item[0]));
  arr.sort((a, b) => {
    return a.s > b.s ? -1 : a.s < b.s ? 1 : 0;
  });
  arr = arr.slice(0, 3);

  return (
    <div className="table-container">
      <table className="table">
        <tbody className="table-body">
          {arr.map((item) => (
            <tr key={item.name}>
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
  );
};
export default WorldWideScores;
