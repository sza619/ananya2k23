import React from "react";

export default function Event() {
  return (
    <section>
      <div className="row">
        <div className="col-lg-3 mx-3 border r">
          <h1 className="text-2xl">Day 1</h1>
        </div>
        <div className="col-lg-3 mx-3 border-black r">
          <h1 className="text-2xl">Day 2</h1>
        </div>
        <div className="col-lg-3 mx-3 border r">
          <h1 className="text-2xl">Day 3</h1>
        </div>
      </div>
      {/* <h1>Event Title</h1>
      <div className="border desc">Rules and Desc</div> */}
    </section>
  );
}
