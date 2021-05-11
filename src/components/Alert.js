import React from "react";

function Alert(props) {
  console.log(props);

  return (
    <div className={`alert alert-${props.something || "success"}`} role="alert">
      {props.children}
    </div>
  );
}

export default Alert;
