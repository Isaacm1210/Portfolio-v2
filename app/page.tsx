import Image from "next/image";
import NavBar from "./ui/nav-bar";
import Socials from "./ui/social";
import Content from "./ui/content";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Socials />
      <main className="">
      <Content />

      </main>
    </div>
  );
}
