import ImageLogo1 from "../assets/Logo (3).png";
import ImageLogo2 from "../assets/Logo (4).png";
import ImageLogo3 from "../assets/Logo (5).png";
import ImageLogo4 from "../assets/Logo (6).png";
import ImageLogo5 from "../assets/Logo (7).png";
import ImageLogo6 from "../assets/Logo (8).png";
import ImageLogo7 from "../assets/Logo (9).png";
import Logos from "./Logos";
export default function Section2() {
  return (
    <section className="max-[485px]:px-12 ">
      <div className=" m-auto max-w-[1002px] pt-[22.87px]">
        <div className="max-w-[772px] m-auto text-center">
          <h1 className="text-[25.06px] font-semibold leading-[30.63px] text-[#4D4D4D]">
            Our Clients
          </h1>
          <p className="text-[#717171] text-[11.14px] font-normal leading-[16.71px]">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex justify-center max-w-[801px] py-[17px] m-auto gap-[94px] max-[485px]:grid-cols-7 max-[485px]:grid max-[485px]:gap-5">
          {[
            ImageLogo1,
            ImageLogo2,
            ImageLogo3,
            ImageLogo4,
            ImageLogo5,
            ImageLogo6,
            ImageLogo7,
          ].map((image) => (
            <Logos img={image} />
          ))}
        </div>
      </div>
    </section>
  );
}
