import React from "react";
import Link from "next/link";

export default function Card(props) {
  console.log(props.day);
  return (
    <div className="card ">
      <img
        className="card-img-top  "
        src={`../${props.img}`}
        alt="Card image cap"
      />
      <div className="card-body poppins">
        <h5 className="card-title text-xl my-2">{props.title}</h5>
        <Link
          href={`./events/day${props.day}/${props.id}`}
          className="btn btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
