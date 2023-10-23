import { dataPropsType } from "./data-types";
import Sidebar from "./sidebar";

export const Modal = (props: dataPropsType) => {
  const { open, setOpen } = props;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-20 bg-backdrop backdrop-blur-[1px]"
      onClick={setOpen}
    >
      <div className="z-50">
        <Sidebar open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};
