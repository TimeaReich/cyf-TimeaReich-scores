import React from "react";

const Button = (props) => {
  const descending = props.descending;
  const setDescending = props.setDescending;
  const ascending = props.ascending;
  const setAscending = props.setAscending;

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
