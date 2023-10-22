import Sidebar from "./sidebar";
import MainContent from "./main-content";

export default function Home() {
  return (
    <section className="max-w-[1728px] grid grid-cols-[20%,_1fr]">
      <Sidebar />
      <MainContent />
    </section>
  );
}
