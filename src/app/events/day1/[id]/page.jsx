import React from "react";
import solo1 from "../../../../../data/solo1";
import group1 from "../../../../../data/group1";

export default function getRoute({ params }) {
  // Calling useRouter() hook
  const mixed = { ...solo1, ...group1 };
  console.log(mixed);
  // let desc = mixed.filter((item) => {
  //   if (item.id == params.id) {
  //     return {
  //       about: item.about,
  //       fee: item.entry_Fee,
  //       points: item.points,
  //       rules: item.rules,
  //     };
  //   }
  // });

  // console.log(desc[0].about);
  return (
    <h1>Helo</h1>

    // <section>
    //   <div className="border desc">
    //     About: {desc[0].about}
    //     <br />
    //     <br />
    //     Entry Fee: {desc[0].fee}
    //     <br />
    //     <br />
    //     Points: {desc[0].points}
    //     <br />
    //     <br />
    //     Rules: {desc[0].rules}
    //   </div>
    // </section>
  );
}
