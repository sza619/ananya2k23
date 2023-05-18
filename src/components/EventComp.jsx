import React from "react";

export default function Event(props) {
  return (
    <section>
      <div className="border desc">
        About: {props.about}
        <br />
        <br />
        Entry Fee: {props.entry_Fee}
        <br />
        <br />
        Points: {props.points}
        <br />
        <br />
        Rules: {props.rules}
      </div>
    </section>
  );
}
