"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import AddIcon from "./icons/add-icon";
import IssueIcon from "./icons/issue-icon";
import BranchIcon from "./icons/branch-icon";
import RetailerIcon from "./icons/retailer-icon";
import ViewRedempIcon from "./icons/view-redemp-icon";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { MenuIcon } from "lucide-react";
import { dataPropsType } from "./data-types";
import Features from "./components/features";
import Chart from "./components/chart";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

const MainContent = (props: dataPropsType) => {
  const { open, setOpen } = props;

  const handleClick = () => {
    if (setOpen) {
      setOpen();
    }
    console.log(open);
  };

  return (
    <section className="md:px-10 px-5 w-full col-start-2 overflow-x-hidden max-w-[40rem] mx-auto lg:max-w-[60rem] xl:max-w-none">
      <div className="flex justify-between items-start xl:items-center py-6">
        <div className="md:block xl:gap-0 gap-2.5 flex flex-col">
          <MenuIcon className="md:hidden" onClick={handleClick} />
          <p className="text-[#7B7B7B] text-xs">3rd October, 2023</p>
          <h1 className="md:text-2xl text-lg text-[#0A0A0A]">
            Welcome, Akachukwu!
          </h1>
        </div>
        <div className="flex gap-2 md:gap-7">
          <Button className="bg-white text-xs md:text-[0.95rem] text-[#060606] hover:bg-[#F4F4F4] hover:border-transparent gap-2 border border-[#EBEBEB] rounded-full md:rounded-3xl shadow-[0px_0px_32px_0px_rgba(204,204,204,0.25)]">
            <AddIcon />
            <p className="hidden md:block">Create New</p>
          </Button>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-[#F4F4F4] text-xs md:text-[0.95rem] text-[#101723]">
              AK
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="md:pt-10 pt-5 w-full mb-10 md:mb-16">
        <p className="md:text-xl text-lg md:mb-8 mb-5 text-[#060606]">
          Quick Actions
        </p>

        <div className="flex gap-3 w-full text-[#0A0A0A] flex-wrap lg:flex-nowrap">
          <Features>
            <IssueIcon />
            <p className="md:text-[0.94rem] text-sm">Issue a New Voucher</p>
          </Features>
          <Features>
            <BranchIcon />
            <p className="text-[0.94rem]">Add a New Branch</p>
          </Features>
          <Features>
            <RetailerIcon />
            <p className="text-[0.94rem]">Add a Retailer</p>
          </Features>
          <Features>
            <ViewRedempIcon />
            <p className="text-[0.94rem]">View Redemption History</p>
          </Features>
        </div>
      </div>

      <div className="w-full pb-40 md:pb-[16.4rem]">
        <p className="md:mb-10 mb-5 text-[#060606] text-xl">
          Dashboard Overview
        </p>

        <div className="flex flex-wrap xl:flex-nowrap gap-4 w-full">
          <Chart vouchers={192} />
          <Chart vouchers={200} />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
