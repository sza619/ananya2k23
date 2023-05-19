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
        <button className="bg-teal-500 rounded-lg py-4 bg-gradient-to-r from-blue-500 to-blue-700  font-medium text-lg  text-white w-1/2 justify-center align-middle ">
          <Link
            href={`./events/day${props.day}/${props.id}`}
            className="text-center text-white font-medium"
          >
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
}
