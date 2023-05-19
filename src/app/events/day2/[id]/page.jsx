import React from "react";
import solo2 from "../../../../../data/solo2";

export default function getRoute({ params }) {
  // Calling useRouter() hook
  let desc = solo2.filter((item) => {
    if (item.id == params.id) {
      return {
        about: item.about,
        fee: item.entry_Fee,
        points: item.points,
        rules: item.rules,
      };
    }
  });

  console.log(desc);
  return (
    <section>
      <div className="border desc">
        About: {desc[0].about}
        <br />
        <br />
        Entry Fee: {desc[0].fee}
        <br />
        <br />
        Points: {desc[0].points}
        <br />
        <br />
        Rules: {desc[0].rules}
      </div>
    </section>
  );
}
