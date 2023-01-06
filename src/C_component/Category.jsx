/* eslint-disable */
//import React from "react";
import "../App.css";

function Category(props) {
  return (
    <>
      <select onChange={props.onChange}>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Category;
