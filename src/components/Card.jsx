import React from "react";

export default function Card(props) {
  return (
    <div className="card w-20">
      <img
        className="card-img-top "
        src={`../${props.img}`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <a href="#" className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
}
