import Link from "next/link";

export default function Event() {
  return (
    <section>
      <div className="row">
        <Link href="./events/day1">
          <div className="col-lg-3 mx-3 border r">
            <h1 className="text-2xl font-bold">Day 1</h1>
          </div>
        </Link>
        <Link href="./events/day2">
          <div className="col-lg-3 mx-3 border r">
            <h1 className="text-2xl font-bold">Day 2</h1>
          </div>
        </Link>
        <Link href="./events/day3">
          <div className="col-lg-3 mx-3 border r">
            <h1 className="text-2xl font-bold">Day 3</h1>
          </div>
        </Link>
      </div>
      {/* <h1>Event Title</h1>
      <div className="border desc">Rules and Desc</div> */}
    </section>
  );
}
