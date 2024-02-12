import Image from "next/image";
import NavBar from "./ui/nav-bar";
import Socials from "./ui/social";
import Content from "./ui/content";
export default function Home() {
  return (
    <div className="min-w-80">
      <NavBar />
      <Socials />
      <main className="bg-main-gradient">
      <Content />
      
      </main>
    </div>
  );
}
