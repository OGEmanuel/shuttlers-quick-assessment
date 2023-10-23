import CalendarIcon from "../icons/calendar-icon";
import CaretDown from "../icons/caret-down";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler);

type chartPropsType = {
  vouchers: number;
};

const Chart = (props: chartPropsType) => {
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
        label: "Data",
        data: [0, null, null, 2.5, null, null, 3, null, 0.5],
        backgroundColor: "rgb(229, 250, 232, 0.5)",
        borderColor: "#1FAD32",
        pointBorderColor: "#1FAD32",
        pointBackgroundColor: "#1FAD32",
        borderWidth: 1,
        fill: true,
        spanGaps: true,
      },
    ],
  };

  const options = {
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
        ticks: {
          display: false,
          stepSize: 0.5,
        },
        grid: {
          color: "#F7F7F7",
        },
      },
    },
  };

  const { vouchers } = props;
  return (
    <div className="md:p-10 p-5 border-[#E6E6E6] border-[1.215px] rounded-[9.717px] shadow-[0px_0px_29.15122px_0px_rgba(235,235,235,0.25)] w-full">
      <div className="flex justify-between items-start border-b-[#E6E6E6] border-b-[1.215px] pb-6 mb-16">
        <div className="flex flex-col gap-3 md:gap-6">
          <p className="md:text-lg text-base text-[#666666] font-medium">
            Vouchers Issued
          </p>
          <p className="font-bold text-lg md:text-[2rem]">{vouchers}</p>
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
    </div>
  );
};

export default Chart;
