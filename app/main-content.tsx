"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import AddIcon from "./icons/add-icon";
import IssueIcon from "./icons/issue-icon";
import BranchIcon from "./icons/branch-icon";
import RetailerIcon from "./icons/retailer-icon";
import ViewRedempIcon from "./icons/view-redemp-icon";
import CalendarIcon from "./icons/calendar-icon";
import CaretDown from "./icons/caret-down";
import { Line } from "react-chartjs-2";
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

          {/* <div className="md:p-10 p-5 border-[#E6E6E6] border-[1.215px] rounded-[9.717px] shadow-[0px_0px_29.15122px_0px_rgba(235,235,235,0.25)] w-full">
            <div className="flex justify-between items-start border-b-[#E6E6E6] border-b-[1.215px] pb-6 mb-16">
              <div className="flex flex-col gap-3 md:gap-6">
                <p className="md:text-lg text-base text-[#666666] font-medium">
                  Vouchers Issued
                </p>
                <p className="font-bold text-lg md:text-[2rem]">192</p>
              </div>
              <div className="flex items-center md:gap-3 gap-2 md:px-4 px-2 py-[0.85rem] border-[1.767px] border-[#E8E8E8] rounded-[16.154px] cursor-pointer hover:bg-[#F4F4F4]">
                <CalendarIcon />
                <p className="text-[#101010] font-bold text-sm">Last 30 Days</p>
                <CaretDown />
              </div>
            </div>
            <div className="h-[233px]">
              <Line data={data} options={options}></Line>
            </div>
          </div> */}

          {/* <div className="md:p-10 p-5 border-[#E6E6E6] border-[1.215px] rounded-[9.717px] shadow-[0px_0px_29.15122px_0px_rgba(235,235,235,0.25)] w-full">
            <div className="flex justify-between items-start border-b-[#E6E6E6] border-b-[1.215px] pb-6 mb-16">
              <div className="flex flex-col gap-3 md:gap-6">
                <p className="md:text-lg text-base text-[#666666] font-medium">
                  Vouchers Issued
                </p>
                <p className="font-bold text-lg md:text-[2rem]">200</p>
              </div>
              <div className="flex items-center md:gap-3 gap-2 md:px-4 px-2 py-[0.85rem] border-[1.767px] border-[#E8E8E8] rounded-[16.154px] cursor-pointer hover:bg-[#F4F4F4]">
                <CalendarIcon />
                <p className="text-[#101010] font-bold text-sm">Last 30 Days</p>
                <CaretDown />
              </div>
            </div>
            <div className="h-[233px]">
              <Line data={data} options={options}></Line>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MainContent;
