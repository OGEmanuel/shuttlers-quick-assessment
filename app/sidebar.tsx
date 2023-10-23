import Image from "next/image";
import logo from "@/public/logo.png";
import { Input } from "@/components/ui/input";
import SearchIcon from "./icons/search-icon";
import HomeIcon from "./icons/home-icon";
import BranchesIcon from "./icons/branches-icon";
import RetailersIcon from "./icons/retailers-icon";
import VouchersIcon from "./icons/vouchers-icon";
import TransacIcon from "./icons/transac-icon";
import PayoutIcon from "./icons/payout-icon";
import RedempIcon from "./icons/redemp-icon";
import ReportIcon from "./icons/report-icon";
import SettingIcon from "./icons/setting-icon";
import { dataPropsType } from "./data-types";

const Sidebar = (props: dataPropsType) => {
  const { open } = props;
  return (
    <nav
      className={`px-4 py-7 border-r md:w-[25%] xl:w-[23%] border-[#EBEBEB] md:block ${
        open ? "block bg-white" : "hidden"
      } h-screen scroll fixed overflow-auto`}
    >
      <div className="flex gap-2 mb-10">
        <Image src={logo} priority alt="logo" />
        <p className="text-[0.94rem] font-medium text-[#0A0A0A]">Vouchers</p>
      </div>

      <div className="relative mb-7">
        <Input
          type="search"
          placeholder="Search"
          className="outline-none rounded-3xl placeholder:font-medium placeholder:text-sm pl-9 placeholder:text-[#A3A3A3]"
        />
        <SearchIcon className="absolute top-[13px] left-3.5" />
      </div>

      <div className="flex items-center gap-2.5 bg-[#F7F7F7] rounded-xl py-2.5 px-5 cursor-pointer mb-5">
        <HomeIcon />
        <p className="text-sm font-medium">Home</p>
      </div>

      <div className="text-[0.875rem] font-medium text-[#565656] mb-5 text-[#060606]">
        <p className="text-[0.85rem] ml-5 mb-5 text-black">Manage</p>

        <div className="flex flex-col ml-1">
          <div className="flex items-center gap-4 py-2.5 px-5 hover:bg-[#F7F7F7] hover:rounded-xl cursor-pointer">
            <BranchesIcon />
            <p>Branches</p>
          </div>
          <div className="flex items-center gap-3.5 py-2.5 px-[1.1rem] hover:bg-[#F7F7F7] hover:rounded-xl cursor-pointer">
            <RetailersIcon />
            <p>Retailers</p>
          </div>
          <div className="flex items-center gap-2.5 py-2.5 px-4 hover:bg-[#F7F7F7] hover:rounded-xl cursor-pointer">
            <VouchersIcon />
            <p>Vouchers</p>
          </div>
        </div>
      </div>

      <div className="text-[0.875rem] font-medium text-[#565656] mb-16">
        <p className="text-[0.85rem] ml-5 mb-5 text-black">History</p>

        <div className="flex flex-col ml-1.5">
          <div className="flex items-center gap-4 py-2.5 px-5 hover:bg-[#F7F7F7] hover:rounded-xl cursor-pointer">
            <TransacIcon />
            <p>Voucher Transactions</p>
          </div>
          <div className="flex items-center gap-2.5 py-2.5 px-5 hover:bg-[#F7F7F7] hover:rounded-xl cursor-pointer">
            <PayoutIcon />
            <p>Payout History</p>
          </div>
          <div className="flex items-center gap-2.5 py-2.5 px-5 hover:bg-[#F7F7F7] hover:rounded-xl cursor-pointer">
            <RedempIcon />
            <p>Voucher Redemption History</p>
          </div>
        </div>
      </div>

      <div className="text-[0.875rem] font-medium text-[#565656]">
        <p className="text-[0.85rem] ml-5 mb-5 text-black">More Actions</p>

        <div className="flex flex-col ml-1.5">
          <div className="flex items-center gap-4 py-2.5 px-5 hover:bg-[#F7F7F7] hover:rounded-xl cursor-pointer">
            <ReportIcon />
            <p>Generate Report</p>
          </div>
          <div className="flex items-center py-2.5 px-5 hover:bg-[#F7F7F7] gap-4 hover:rounded-xl cursor-pointer">
            <SettingIcon />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
