import React, { useState } from "react";
import "./popup.css";
import cx from "classnames";

export const Popup = ({ msg, color }) => {
  return (
    <div className="popup">
      <div className="popup-wrapper">
        <div className={cx({ popuparrow: true, popupcolor: color })}></div>
        <div className={cx({ popupbanner: true, popupcolor: color })}>
          <span className="popup-msg">{msg}</span>
        </div>
      </div>
    </div>
  );
};
