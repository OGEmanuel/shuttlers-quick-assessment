"use client";

import Sidebar from "./sidebar";
import MainContent from "./main-content";
import { useState } from "react";
import { Modal } from "./modal";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <section className="max-w-[1728px] md:grid grid-cols-[20%,_1fr] gap-16">
      <Sidebar open={open} setOpen={toggleOpen} />
      <MainContent open={open} setOpen={toggleOpen} />
      {open && <Modal open={open} setOpen={toggleOpen} />}
    </section>
  );
}
