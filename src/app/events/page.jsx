import Link from "next/link";
import Card from "../../components/Card";
import EventComp from "../../components/EventComp";
import solo from "../../../data/solo";
import events from "../../../data/events";
import group from "../../../data/group";

export default function Event() {
  // return (
  //   <section>
  //     <div className="row">
  //       <Link href="./events/day1">
  //         <div className="col-lg-3 mx-3 border r">
  //           <h1 className="text-2xl">Day 1</h1>
  //         </div>
  //       </Link>
  //       <Link href="./events/day2">
  //         <div className="col-lg-3 mx-3 border r">
  //           <h1 className="text-2xl">Day 2</h1>
  //         </div>
  //       </Link>
  //       <Link href="./events/day3">
  //         <div className="col-lg-3 mx-3 border r">
  //           <h1 className="text-2xl">Day 3</h1>
  //         </div>
  //       </Link>
  //     </div>
  //     {/* <h1>Event Title</h1>
  //     <div className="border desc">Rules and Desc</div> */}
  //   </section>
  // );
  const cards = solo.map((item) => {
    return <Card key={item.id} title={item.title} img={item.img} />;
  });

  const cardss = group.map((itemm) => {
    return <Card key={itemm.id} title={itemm.title} img={itemm.img} />;
  });

  const about = solo.map((items) => {
    return (
      <EventComp
        about={items.about}
        entry_Fee={items.entry_Fee}
        points={items.points}
        rules={items.rules}
      />
    );
  });
  return (
    <div>
      <section>
        <br />
        <h1>Solo Events</h1>
        <div className="cards-list container">{cards}</div>
        <br />
        <h1>Group Events</h1>
        <div className="cards-list container">{cardss}</div>
      </section>
      <section>
        <br />
        <h1>Description</h1>
        <div className="container">{about}</div>
      </section>
    </div>
  );
}
