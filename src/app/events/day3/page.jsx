import Image from "next/image";
import Card from "../../../components/Card";
import EventComp from "../../../components/EventComp";
import group from "../../../../data/day3";

export default function Day3() {
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

  return (
    <div>
      <section>
        <h1 className="text-5xl text-center mt-5 mb-2">ANANYA DAY</h1>
        <br />
        <div className="cards-list container">{cardss}</div>
      </section>
    </div>
  );
}
