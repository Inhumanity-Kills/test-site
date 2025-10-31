import Pana from "../assets/pana.png";
import SSSS from "./SSSS";
export default function Section6() {
  return (
    <section className="max-[485px]:px-12 ">
      <div className=" m-auto max-w-[1002px] mt-[26.33px]">
        <div className=" mb-[33.41px] pl-10 flex gap-[34.11px]  max-[485px]:items-center max-[485px]:pl-0  ">
          <img src={Pana} className="max-[485px]:max-h-[170px]" />
          <SSSS
            text={
              "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
            }
            title={"How to design your site footer like we did"}
          />
        </div>
      </div>
    </section>
  );
}
