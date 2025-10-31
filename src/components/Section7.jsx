import Logos from "../components/Logos";
import ImageLogo1 from "../assets/Logo (3).png";
import ImageLogo2 from "../assets/Logo (4).png";
import ImageLogo3 from "../assets/Logo (5).png";
import ImageLogo4 from "../assets/Logo (6).png";
import ImageLogo5 from "../assets/Logo (7).png";
import ImageLogo6 from "../assets/Logo (8).png";
import logo2 from "../assets/Logo2.png";
import ImageLogo7 from "../assets/Logo (9).png";
import Image2 from "../assets/image 9.png";
import Button from "./Button";
export default function Section7() {
  return (
    <section className="max-[485px]:px-12 ">
      <div className="max-w-[1002px] m-auto pt-[55.95px]">
        <div className="flex gap-[54.29px]">
          <img
            src={Image2}
            className="max-[485px]:max-w-[108px] max-[485px]:max-h-[108px]"
          />
          <div className="max-w-[520px]">
            <p className="pb-[11.14px] text-[#717171] text-[11.14px] leading-[16.71px] font-medium max-[485px]:text-[5.34px] max-[485px]:leading-[8.01px]">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <p className="pb-[5.57px] text-[#4CAF4F] text-[13.92px] leading-[19.49px] font-semibold max-[485px]:text-[6.68px] max-[485px]:leading-[9.35px]">
              Tim Smith
            </p>
            <p className="pb-[22.27px] text-[#89939E] text-[11.14px] leading-[16.71px] font-normal max-[485px]:text-[5.34px] max-[485px]:leading-[8.01px]">
              British Dragon Boat Racing Association
            </p>
            <div className="flex justify-between max-w-[801px] max-[485px]:max-w-4 max-[485px]:gap-2 ">
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

              <Button type={"submit"} variant="success" img={logo2}>
                Meet all customers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
