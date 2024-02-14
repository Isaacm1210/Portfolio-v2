import Image from "next/image";
import NavBar from "./ui/nav-bar";
import Socials from "./ui/social";
import Content from "./ui/content";
import Cursor from "./components/cursor";
export default function Home() {
  return (
    <>
    <Cursor />
      <div className="min-w-80">

        <NavBar />
        <Socials />
        <main className="bg-main-gradient">
          <Content />

        </main>
      </div>
    </>
  );
}
