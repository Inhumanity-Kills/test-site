import image from "../assets/Illustration.png";
import Button from "./Button";
export default function Section1() {
  return (
    <section className="w-full bg-[#F5F7FA] max-[485px]:px-12 ">
      <div className="m-auto max-w-[1002px] flex justify-between max-[485px]:max-h-[300px] max-[485px]:max-w-full">
        <div className="max-w-[457px] my-28  max-h-48  ">
          <h1 className="text-[#4D4D4D] leading-[52.9px] text-[44.55px] font-semibold max-[485px]:text-[21.37px] max-[485px]:leading-[25.37px]">
            Lessons and insights{" "}
            <span className="text-[#4CAF4F]">from 8 years</span>
          </h1>
          <p className="text-[#717171] leading-[16.71px] pt-[11px] pb-[22px] font-normal text-[11.14px] max-[485px]:text-[5.34px] max-[485px]:leading-[8.01px] max-[485px]:pb-2.5">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button type={"submit"} variant="primary">
            Register
          </Button>
        </div>
        <img
          src={image}
          className="py-[62px] max-[485px]:max-w-[200px] max-[485px]:max-h-[300px]"
        />
      </div>
    </section>
  );
}
