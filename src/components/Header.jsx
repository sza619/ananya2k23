import React from "react";
import logo from "../../public/ksit.png";
import ananya from "../../public/ananya.png";
import axi23 from "../../public/axi23.png";
import ananya_logo from "../../public/logo.png";
import Image from "next/image";

export default function Header() {
  return (  
    <header className="head">
      <Image src={logo} alt="Image" priority className="mx-1 w-9 h-9 md:w-24 md:h-24" />{" "}
      {/* <h1>ANANYA 2K23</h1> */}
      <Image src={ananya} alt="Image" priority className="mx-1 w-44 h-10 md:w-1/2 md:h-32 md:mx-2" />{" "}
      <Image src={axi23} alt="Image" priority className="mx-1 w-20 h-10 md:w-64 md:h-32 md:mx-1" />{" "}
      <Image src={ananya_logo} alt="Image" priority className="mx-1 w-9 h-9 md:w-28 md:h-24" />{" "}
    </header>
  );
}
