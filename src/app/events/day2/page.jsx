import Image from "next/image";
import Card from "../../../components/Card";
import EventComp from "../../../components/EventComp";
import solo from "../../../../data/solo2";
import events from "../../../../data/events";
import group from "../../../../data/group2";

export default function Day2() {
  const cards = solo.map((item) => {
    return <Card key={item.id} title={item.title} img={item.img} />;
  });

  const cardss = group.map((itemm) => {
    return <Card key={itemm.id} title={itemm.title} img={itemm.img} />;
  });

  const about = solo.map((items) => {
    return (
      <EventComp
        key={items.id}
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
