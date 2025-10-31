import Pic from "./Content";
export default function Section8() {
  return (
    <section className="mb-[61.08px] max-[485px]:pt-4 max-[485px]:mb-4 max-[485px]:px-12 ">
      <div className="max-w-[1002px] mx-auto mt-[33.41] flex flex-col justify-center items-center text-center">
        <h1 className=" text-[#4D4D4D] text-[25.06px] leading-[30.63px] font-semibold max-[485px]:text-[12.02px] max-[485px]:leading-[14.69px]">
          Caring is the new marketing
        </h1>
        <p className="max-w-[437px] text-[#717171] text-[11.14px] leading-[16.71px] font-normal max-[485px]:text-[5.34px] max-[485px]:leading-[8.01px] max-[485px]:max-w-[209px]">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
      </div>
      <div className="max-w-[1002px] mx-auto flex justify-center mt-[11.14px]   max-[485px]:gap-2">
        <Pic/>
      </div>
    </section>
  );
}
