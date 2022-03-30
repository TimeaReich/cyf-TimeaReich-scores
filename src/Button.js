import React from "react";

const Button = (props) => {
  const setDescending = props.setDescending;
  const descending = props.descending;
  const ascending = props.ascending;
  const setAscending = props.setAscending;

  console.log(ascending);
  console.log(descending);
  function changeOrder() {
    setAscending(() => {
      return ascending * -1;
    });
    setDescending(() => {
      return descending * -1;
    });
  }
  return <button onClick={changeOrder}>Change Score Order</button>;
};
export default Button;
