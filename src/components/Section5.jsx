import UserList from "./Counts";
export default function Section5() {
  return (
    <section className="bg-[#F5F7FA] max-[485px]:px-12 ">
      <div className="m-auto max-w-[1002px] flex gap-[142px] pb-[44.55px] max-[485px]:gap-6">
        <div className="max-w-[375.88px] pt-[59.19px] max-[485px]:pt-[29.21px]">
          <h1 className="text-[25.06px] leading-[30.63px] font-semibold max-w-[284px] max-[485px]:text-[12.02px] max-[485px]:leading-[14.69px]">
            Helping a local
            <br />{" "}
            <span className="text-[#4CAF4F]">business reinvent itself</span>
          </h1>
          <p className="text-[11.14px] leading-[16.71px] font-normal pt-[5.57px] max-[485px]:text-[5.34px] max-[485px]:leading-[8.01px]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <UserList />
      </div>
    </section>
  );
}
