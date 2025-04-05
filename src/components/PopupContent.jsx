import React from "react";
import { createPortal } from "react-dom";

const PopupContent = ({ display }) => {
  return createPortal(
    <div>
      {display && (
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
          }}
        >
          This is popup content
        </div>
      )}
    </div>,
    document.querySelector("#popup-content"),
  );
};

export default PopupContent;
