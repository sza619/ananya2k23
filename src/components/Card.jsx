import React from "react";
import Link from "next/link";

export default function Card(props) {
  return (
    <div class=" card flex items-center justify-center">
      <div class="group h-96 w-80 [perspective:1000px]">
        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0">
            <img
              className="card-img-top  "
              src={`../${props.img}`}
              alt="Card image cap"
            />
            <div className="card-body poppins">
              <h5 className="card-title text-xl mt-2">{props.title}</h5>
              <p>Fee: {props.fee}</p>
            </div>
          </div>
          <div class="absolute inset-0 h-full w-full rounded-xl bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-center justify-center">
              <p>
                <span className="text-yellow-400">About: </span>
                {props.about}
              </p>
              <p>
                <span className="text-yellow-400">Rules: </span>
                {props.rules}
              </p>
              <p>
                <span className="text-yellow-400">Points: </span> {props.points}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="card ">
    //   <img
    //     className="card-img-top  "
    //     src={`../${props.img}`}
    //     alt="Card image cap"
    //   />
    //   <div className="card-body poppins">
    //     <h5 className="card-title text-xl my-2">{props.title}</h5>
    //     <button className="bg-teal-500 rounded-lg py-4 bg-gradient-to-r from-blue-500 to-blue-700  font-medium text-lg  text-white w-1/2 justify-center align-middle ">
    //       <Link
    //         href={`./events/day${props.day}/${props.id}`}
    //         className="text-center text-white font-medium"
    //       >
    //         View Details
    //       </Link>
    //     </button>
    //   </div>
    // </div>
  );
}
