import React, { useContext } from "react";
import "./detailPage.css";
import { RootContext } from "../../Context/rootContext";

export const DetailPage = (props) => {
  const { movie, setMovie } = useContext(RootContext);
  props = movie;
  const { id, title, URL, releaseDate, timeDuration, gener, age } = props;

  return (
    <div className="page">
      <div className="dp-card">
        <div className="dp-card-image">
          <img src={URL} alt="" />
        </div>

        <div className="dp-card-detail">
          <div className="dp-h1-btn">
            <h1>{title}</h1>
          </div>

          <div className="dp-card-d1">
            <span>{releaseDate}</span>
            <div className="dp-card-age-icon">
              <span>{age}</span>
            </div>
            <p>{timeDuration}</p>
            <div className="dp-card-hd-icon">
              <span>HD</span>
            </div>
          </div>

          <div className="dp-card-d2">
            <span>{gener}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
