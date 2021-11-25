import React, { useContext } from "react";
import "./style.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { RootContext } from "../../Context/rootContext";

export const MovieCard = (props) => {
  const history = useHistory();
  const { movie, setMovie } = useContext(RootContext);
  const { id, title, URL, releaseDate, timeDuration, gener, age } = props;
  return (
    <div className="card">
      <div
        className="card-image"
        onClick={() => {
          setMovie(props);
          history.push("/detail:" + id);
        }}
      >
        <img src={URL} alt="" />
      </div>

      <div className="card-detail">
        <div className="h1-btn">
          <span
            onClick={() => {
              setMovie(props);
              history.push("/detail:" + id);
            }}
          >
            {title}
          </span>
          <div className="card-buttons">
            <div className="card-btn-ring card-edit-ring">
              <MdEdit className="card-btn " onClick={() => props.edit(id)} />
            </div>
            <div className="card-btn-ring">
              <MdDelete
                className="card-btn card-delete"
                onClick={() => props.delete(id)}
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            setMovie(props);
            history.push("/detail:" + id);
          }}
        >
          <div className="card-d1">
            <span>{releaseDate}</span>
            <div className="card-age-icon">
              <span>{age}</span>
            </div>
            <p>{timeDuration}</p>
            <div className="card-hd-icon">
              <span>HD</span>
            </div>
          </div>

          <div className="card-d2">
            <span>{gener}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
