type childrenProps = {
  children: React.ReactNode;
};

const Features = (props: childrenProps) => {
  const { children } = props;
  return (
    <div className="flex items-center w-full gap-4 border border-[#EBEBEB] py-4 px-4 shadow-[0px_0px_8px_0px_rgba(224,224,224,0.25)] rounded-[15px]">
      {children}
    </div>
  );
};

export default Features;
