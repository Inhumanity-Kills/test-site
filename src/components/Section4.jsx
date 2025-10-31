import rafiki from "../assets/rafiki.png";
import SSSS from "./SSSS";
export default function Section4() {
  return (
    <section className="max-[485px]:px-12 ">
      <div className=" m-auto max-w-[1002px] mt-[26.33px]">
        <div className=" mb-[33.41px] flex gap-[34.11px] max-[485px]:items-center  ">
          <img
            src={rafiki}
            className="max-[485px]:max-w-[170px] max-[485px]:max-h-[170px]"
          />
          <SSSS
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
            }
            title={"The unseen of spending three years at Pixelgrade"}
          />
        </div>
      </div>
    </section>
  );
}
