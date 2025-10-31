import Organizations from "../components/Organizations";
import Icon from "../assets/Icon.png";
import Icon2 from "../assets/Icon (1).png";
import Icon3 from "../assets/Icon (2).png";
export default function Section3() {
  return (
    <section className="max-[485px]:px-12 ">
      <div className=" m-auto max-w-[1002px] pt-[27.84px] ">
        <div className="">
          <h1 className="max-w-[377px] m-auto text-[25.06px] text-center text-[#4D4D4D] leading-[30.63px] font-semibold ">
            Manage your entire community in a single system
          </h1>
          <p className="text-[11.14px] text-[#717171] leading-[16.71px] font-normal text-center pt-[5.57px]">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="flex gap-[88.75px] justify-between pt-[11.14px] max-[485px]:gap-2.5 max-[485px]:grid max-[485px]:grid-cols-3 ">
          <div className="max-w-52">
            <Organizations
              title={"Membership Organisations"}
              text={
                "Our membership management software provides full automation of membership renewals and payments"
              }
              img={Icon}
              styleTitle={
                "max-w-[185px] text-center text-[19.49px] px-[11.14px] text-[#4D4D4D] leading-[25.06px] font-bold max-[485px]:text-[12.35px] max-[485px]:leading-[12.02px] "
              }
              styleText={
                "max-w-[174px] text-center text-[9.74px] px-[16.71px] text-[#717171] leading-[13.92px] font-normal max-[485px]:leading-[9.68px] max-[485px]:pt-[5px] max-[485px]:text-center"
              }
              styleImg={
                "px-[70px] pb-[11px] max-[485px]:max-w-[300px] max-[485px]:px-0 max-[485px]:pl-[40px]"
              }
            />
          </div>
          <div className="max-w-52">
            <Organizations
              title={"Membership Organisations"}
              text={
                "Our membership management software provides full automation of membership renewals and payments"
              }
              img={Icon2}
              styleTitle={
                "max-w-[185px] text-center text-[19.49px] px-[11.14px] text-[#4D4D4D] leading-[25.06px] font-bold max-[485px]:text-[12.35px] max-[485px]:leading-[12.02px] max-[485px]:text-center"
              }
              styleText={
                "max-w-[174px] text-center text-[9.74px] px-[16.71px] text-[#717171] leading-[13.92px] font-normalmax-[485px]:leading-[9.68px] max-[485px]:pt-[5px]"
              }
              styleImg={
                "px-[70px] pb-[11px] max-[485px]:max-w-[300px] max-[485px]:max-w-[300px] max-[485px]:px-0 max-[485px]:pl-[40px]"
              }
            />
          </div>
          <div className="max-w-52">
            <Organizations
              title={"Clubs And Groups"}
              text={
                "Our membership management software provides full automation of membership renewals and payments"
              }
              img={Icon3}
              styleTitle={
                "max-w-[185px] text-center text-[19.49px] px-[11.14px] text-[#4D4D4D] leading-[25.06px] font-bold max-[485px]:text-[12.35px] max-[485px]:leading-[12.02px] max-[485px]:text-center"
              }
              styleText={
                "max-w-[174px] text-center text-[9.74px] px-[16.71px] text-[#717171] leading-[13.92px] font-normal max-[485px]:leading-[9.68px] max-[485px]:pt-[5px] "
              }
              styleImg={
                "px-[70px] pb-[11px] max-[485px]:max-w-[300px] max-[485px]:max-w-[300px] max-[485px]:px-0 max-[485px]:pl-[40px]"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
