import React from "react";
import { MdErrorOutline } from "react-icons/md";

export const Error = ({ error }) => {
  return (
    <div>
      <MdErrorOutline className="errorIcon" />
      <div className="errorLine"></div>
      <span className="errorText">{error}</span>
    </div>
  );
};
