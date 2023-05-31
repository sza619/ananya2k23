import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Card(props) {
  return (
    <div class="card flex items-center justify-center mx-5">
      <div class="group h-40 w-32 md:h-96 md:w-80 [perspective:1000px]">
        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div class="absolute inset-0 mb-5">
            <img
              className="card-img-top"
              src={`../${props.img}`}
              alt="Card image cap"
            />
            <div className="card-body poppins ">
              <h5 className="card-title md:text-xl mt-2">{props.title}</h5>
              <p className="text-xs md:text-base">Fee: {props.fee}</p>
            </div>
          </div>
          <div class="absolute inset-0 h-full w-full bg-black/90 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-center justify-center">
              <p>
                <span className="text-yellow-400 text-xs md:text-base">About: </span>
                <span className="text-xs select-none md:text-base">{props.about}</span>
              </p>
              <p>
                <span className="text-yellow-400 text-xs md:text-base">Rules: </span>
                <span className="text-xs select-none md:text-base">{props.rules}</span>
              </p>
              <p>
                <span className="text-yellow-400 text-xs md:text-base">Points: </span>
                <span className="text-xs select-none md:text-base">{props.points}</span>
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
