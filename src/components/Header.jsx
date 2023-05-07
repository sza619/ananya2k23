import React from "react";
import logo from "../../public/ksit_logo.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="head">
      <Image src={logo} alt="Image" priority className=" " />{" "}
      <h1>ANANYA 2K23</h1>
      <Image src={logo} alt="Image" priority className=" " />{" "}
    </header>
  );
}
