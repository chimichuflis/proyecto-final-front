import React from "react";

export default function SortButton(props) {
  return (
    <div>
      <div className="sort-btn">
        <span>{props.type}</span>
      </div>
    </div>
  );
}
