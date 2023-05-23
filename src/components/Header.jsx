import React from "react";
import logo from "../../public/ksit.png";
import ananya from "../../public/ananya.png";
import axi23 from "../../public/axi23.png";
import ananya_logo from "../../public/logo.png";
import Image from "next/image";

export default function Header() {
  return (  
    <header className="head">
      <Image src={logo} alt="Image" priority className="mx-1 w-10 h-10 md:w-36 md:h-36" />{" "}
      {/* <h1>ANANYA 2K23</h1> */}
      <Image src={ananya} alt="Image" priority className="mx-1 w-40 h-12 md:w-1/2 md:h-36" />{" "}
      <Image src={axi23} alt="Image" priority className="mx-1 w-24 h-12 md:w-64 md:h-36" />{" "}
      <Image src={ananya_logo} alt="Image" priority className="mx-1 w-10 h-10 md:w-40 md:h-36" />{" "}
    </header>
  );
}
