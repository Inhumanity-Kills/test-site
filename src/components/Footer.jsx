import logo2 from "../assets/Logo2.png";
import social from "../assets/Social Icons.svg";
import social2 from "../assets/Social Icons2.svg";
import social3 from "../assets/Social Icons3.svg";
import social4 from "../assets/Social Icons4.svg";
import Logos from "./Logos";
const UlList = [
  { id: 1, li: "About us" },
  { id: 1, li: "Blog" },
  { id: 1, li: "Contact us" },
  { id: 1, li: "Pricing" },
  { id: 1, li: "Testimonials" },
];
const UserListLi = () => {
  return (
    <>
      {UlList.map((ListLi) => (
        <List key={ListLi.id} ListLi={ListLi} />
      ))}
    </>
  );
};

const List = ({ ListLi }) => {
  return (
    <>
      <div className="max-w-[150px]">{ListLi.li}</div>
    </>
  );
};

const UlList2 = [
  { id: 1, li: "Help center" },
  { id: 1, li: "Terms of service" },
  { id: 1, li: "Legal" },
  { id: 1, li: "Privacy policy" },
  { id: 1, li: "Status" },
];
const UserListLi2 = () => {
  return (
    <>
      {UlList2.map((ListLi) => (
        <List key={ListLi.id} ListLi={ListLi} />
      ))}
    </>
  );
};
export default function Footer() {
  return (
    <footer className="bg-[#263238] max-[485px]:px-12 ">
      <div className="max-w-[1002px] mx-auto flex gap-[87px] pt-[44.55px] max-[485px]:gap-[41px] max-[485px]:pt-[21.37px]">
        <div className="max-w-[243.62px] flex flex-col justify-start max-[485px]:pl-[55px]">
          <img
            src={logo2}
            className="max-w-[132.94px] max-[485px]:max-w-[63.76850891113281px]"
          />
          <p className="text-[#F5F7FA] pt-[27.84px] max-[485px]:text-[4.67px] max-[485px]:leading-[6.68px] max-[485px]:pt-[13.35px]">
            Copyright © 2020 Landify UI Kit.
          </p>
          <p className="text-[#F5F7FA] pt-[5.57px] pb-[27.84px]  max-[485px]:text-[4.67px] max-[485px]:leading-[6.68px] max-[485px]:pb-[13.35px]">
            All rights reserved
          </p>

          <div className="flex gap-[11.14px] pb-[52.48px] max-[485px]:pb-[22px]">
            {[social, social2, social3, social4].map((image) => (
              <Logos img={image} />
            ))}
          </div>
        </div>
        <div className="max-w-[150px]">
          <p className="text-[#FFFFFF] pb-[16.71px] max-[485px]:text-[6.68px] max-[485px]:leading-[9.35px] max-[485px]:pb-2">
            Company
          </p>
          <ul className="text-[#F5F7FA] flex flex-col gap-[8.35px] max-[485px]:text-[4.67px] max-[485px]:leading-[6.68px] max-[485px]:gap-1">
            <UserListLi />
          </ul>
        </div>
        <div className="max-w-[150px]">
          <p className="text-[#FFFFFF] pb-[16.71px] max-[485px]:text-[6.68px] max-[485px]:leading-[9.35px] max-[485px]:pb-2">
            Company
          </p>
          <ul className="text-[#F5F7FA] flex flex-col gap-[8.35px] max-[485px]:text-[4.67px] max-[485px]:leading-[6.68px] max-[485px]:gap-1">
            <UserListLi2 />
          </ul>
        </div>
        <div className="max-[485px]:max-h-8">
          <h1 className="text-[#FFFFFF] max-[485px]:text-[6.68px] max-[485px]:leading-[9.35px]">
            Stay up to date
          </h1>
          <input
            placeholder="Your email address"
            className="bg-[#4f5051] text-[#D9DBE1] py-[6.26px] pl-[8.35px] rounded-[5.57px] max-[485px]:max-w-[85.1359634399414px] max-[485px]:text-[4.67px] max-[485px]:leading-[6.68px]"
          />
        </div>
      </div>
    </footer>
  );
}
