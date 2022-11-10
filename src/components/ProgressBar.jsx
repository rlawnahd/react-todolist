import React from "react";

const ProgressBar = (props) => {
  const containerStyles = {
    height: 20,
    width: "80%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 0,
    transition: "0.2s",
    margin: "auto",
    marginTop: "10px",
    marginBottom: "10px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${props.progress ? props.progress : 0}%`,
    backgroundColor: "#6a1b9a",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "0.5s",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };
  const progressLength = Math.floor(props.progress);
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>
          {props.progress ? `${progressLength}%` : "0%"}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
