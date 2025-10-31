import Button from "./Button";

export default function SSSS(props) {
  return (
    <>
      <div className="pt-[56.75px] w-full">
        <h1 className="text-[25.06px] leading-[30.63px] font-semibold text-[#4D4D4D] max-w-[418px] max-[485px]:text-[12.02px] max-[485px]:leading-[14.69px]">
          {props.title}
        </h1>
        <p className="pb-[22.27px] pt-[11.14px] text-[9.74px] text-[#717171]  max-w-[418px] leading-[13.92px] font-normal max-[485px]:text-[4.67px] max-[485px]:leading-[6.68px]">
          {props.text}
        </p>

        <Button type={"submit"} variant="primary">
          Learn More
        </Button>
      </div>
    </>
  );
}
