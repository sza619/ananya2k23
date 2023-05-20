import Image from "next/image";
import Card from "../../../components/Card";
import EventComp from "../../../components/EventComp";
import solo from "../../../../data/solo2";
import group from "../../../../data/group2";

export default function Day2() {
  const cards = solo.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        img={item.img}
        id={item.id}
        day={item.day}
        about={item.about}
        fee={item.entry_Fee}
        points={item.points}
        rules={item.rules}
      />
    );
  });

  const cardss = group.map((itemm) => {
    return (
      <Card
        key={itemm.id}
        title={itemm.title}
        img={itemm.img}
        day={itemm.day}
        about={itemm.about}
        fee={itemm.entry_Fee}
        points={itemm.points}
        rules={itemm.rules}
      />
    );
  });

  const about = solo.map((items) => {
    return (
      <EventComp
        key={items.id}
        about={items.about}
        entry_Fee={items.entry_Fee}
        points={items.points}
        rules={items.rules}
        day={items.day}
      />
    );
  });
  return (
    <div>
      <section>
        <br />
        <h1 className="text-3xl my-5">Solo Events</h1>
        <div className="cards-list container">{cards}</div>
        <br />
        <h1 className="text-3xl my-5">Group Events</h1>
        <div className="cards-list container">{cardss}</div>
      </section>
    </div>
  );
}
