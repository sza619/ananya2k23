import Image from "next/image";
import ComingSoon from "@/components/ComingSoon";
import Noti from "@/components/Noti";

export default function Home() {
  return (
    <main className="">
      <ComingSoon />
      <Noti />
    </main>
  );
}
