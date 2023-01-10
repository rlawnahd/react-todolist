import React from "react";
import "./button.css";
function FilterButton(props) {
  const FilterButtonStyle = {
    backgroundColor: `${props.name === props.filter ? "skyblue" : "white"}`,
    border: "none",
    margin: 10,
    padding: 10,
    cursor: "pointer",
    borderRadius: "50%",
    transition: "0.5s",
  };
  return (
    <button
      style={FilterButtonStyle}
      type="button"
      className={props.name === props.filter ? "rotate-scale-up-hor" : ""}
      aria-pressed={props.isPressed}
      onClick={() => {
        props.setFilter(props.name);
      }}
    >
      {props.name}
    </button>
  );
}

export default FilterButton;
