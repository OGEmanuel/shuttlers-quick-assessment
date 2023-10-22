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
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const MainContent = () => {
  const data = {
    labels: [
      "Oct 3",
      "Oct 6",
      "Oct 9",
      "Oct 12",
      "Oct 15",
      "Oct 18",
      "Oct 21",
      "Oct 24",
      "Oct 27",
    ],
    datasets: [
      {
        labels: "",
        data: [0, null, null, 3, null, null, 5, null, 1],
        backgroundColor: "#1FAD32",
        borderColor: "#1FAD32",
        pointBorderColor: "#1FAD32",
        borderWidth: 1,
        fill: true,
        spanGaps: true,
        segment: {
          backgroundColor: "#1FAD32",
        },
      },
    ],
  };

  const options = {
    // layout: {
    //   padding: {
    //     top: 2,
    //   },
    // },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        min: 0,
        max: 6,
        ticks: {
          display: false,
          stepSize: 0.5,
        },
      },
    },
  };

  return (
    <section className="px-10">
      <div className="flex justify-between items-center py-6">
        <div>
          <p className="text-[#7B7B7B] text-xs">3rd October, 2023</p>
          <h1 className="text-2xl text-[#0A0A0A]">Welcome, Akachukwu!</h1>
        </div>
        <div className="flex gap-7">
          <Button className="bg-white text-[#060606] hover:bg-[#F4F4F4] hover:border-transparent gap-2 border border-[#EBEBEB] rounded-3xl shadow-[0px_0px_32px_0px_rgba(204,204,204,0.25)]">
            <AddIcon />
            <p>Create New</p>
          </Button>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-[#F4F4F4]">AK</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="pt-10 w-full mb-16">
        <p className="text-xl mb-8 text-[#060606]">Quick Actions</p>

        <div className="flex gap-3 w-full text-[#0A0A0A]">
          <div className="flex items-center w-full gap-4 border border-[#EBEBEB] py-4 px-4 shadow-[0px_0px_8px_0px_rgba(224,224,224,0.25)] rounded-[15px]">
            <IssueIcon />
            <p className="text-[0.94rem]">Issue a New Voucher</p>
          </div>
          <div className="flex items-center w-full gap-4 border border-[#EBEBEB] py-4 px-4 shadow-[0px_0px_8px_0px_rgba(224,224,224,0.25)] rounded-[15px]">
            <BranchIcon />
            <p className="text-[0.94rem]">Add a New Branch</p>
          </div>
          <div className="flex items-center w-full gap-4 border border-[#EBEBEB] py-4 px-4 shadow-[0px_0px_8px_0px_rgba(224,224,224,0.25)] rounded-[15px]">
            <RetailerIcon />
            <p className="text-[0.94rem]">Add a Retailer</p>
          </div>
          <div className="flex items-center w-full gap-4 border border-[#EBEBEB] py-4 px-4 shadow-[0px_0px_8px_0px_rgba(224,224,224,0.25)] rounded-[15px]">
            <ViewRedempIcon />
            <p className="text-[0.94rem]">View Redemption History</p>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-10 text-[#060606] text-xl">Dashboard Overview</p>

        <div className="p-10 border-[#E6E6E6] border-[1.215px] rounded-[9.717px] shadow-[0px_0px_29.15122px_0px_rgba(235,235,235,0.25)]">
          <div className="flex justify-between items-start border-b-[#E6E6E6] border-b-[1.215px] pb-6 mb-16">
            <div className="flex flex-col gap-6">
              <p className="text-lg text-[#666666] font-medium">
                Vouchers Issued
              </p>
              <p className="font-bold text-[2rem]">192</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-[0.85rem] border-[1.767px] border-[#E8E8E8] rounded-[16.154px] cursor-pointer hover:bg-[#F4F4F4]">
              <CalendarIcon />
              <p className="text-[#101010] font-bold text-sm">Last 30 Days</p>
              <CaretDown />
            </div>
          </div>
          <div className="h-[233px]">
            <Line data={data} options={options}></Line>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
