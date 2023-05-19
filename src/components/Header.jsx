import React from "react";
import logo from "../../public/ksit.png";
import ananya from "../../public/ananya.png";
import axi23 from "../../public/axi23.png";
import ananya_logo from "../../public/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="head">
      <Image src={logo} alt="Image" priority className="w-10 md:w-32" />{" "}
      {/* <h1>ANANYA 2K23</h1> */}
      <Image src={ananya} alt="Image" priority className="ananya--logo" />{" "}
      <Image src={axi23} alt="Image" priority className="logo " />{" "}
      <Image src={ananya_logo} alt="Image" priority className="ksit--logo" />{" "}
    </header>
  );
}
