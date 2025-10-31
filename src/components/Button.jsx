import { Children } from "react";
import Logo from "../assets/Right.svg";
export default function Button({ type, variant, children }) {
  const variants = {
    primary:
      "bg-[#4CAF4F] flex flex-nowrap text-[11.14px] leading-[16.71px] text-[#FFFFFF] font-medium py-[9.74px] pl-[22.27px] pr-[22.27px] items-center text-center rounded-[2.78px] cursor-pointer max-[485px]:text-[5.34px] max-[485px]:leading-[8.01px] max-[485px]:rounded-[1.34px] max-[485px]:py-[4.67px] max-[485px]:px-[10.68px]",
    success:
      "text-[#4CAF4F] text-[13.92px] leading-[19.49px] font-semibold  flex flex-nowrap items-center text-center max-[485px]:text-[6.68px] max-[485px]:leading-[9.35px] ",
  };
  return (
    <>
        <button type={type} className={`${variants[variant]}`}>
          {children}
        </button>
    </>
  );
}
