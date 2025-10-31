import Image18 from "../assets/image 18.png";
import Image19 from "../assets/image 19.png";
import Image20 from "../assets/image 20.png";
import Button from "./Button";
const users = [
  {
    id: 1,
    name: "Creating Streamlined Safeguarding Processes with OneRen",
    image: Image18,
  },
  {
    id: 2,
    name: "What are your safeguarding responsibilities and how can you manage them?",
    image: Image19,
  },
  {
    id: 3,
    name: "Revamping the Membership Model with Triathlon Australia",
    image: Image20,
  },
];

const Pic = ({ user }) => {
  return (
    <div className="relative items-center max-[485px]: ">
      <img src={user.image} />
      <div className="max-w-[220px] bg-[#F5F7FA] px-[11.14px] py-[11.14px] rounded-[5.57px] absolute bottom-[-20%] left-[8%] right-[8%] text-center mx-auto">
        <p className="pb-[16.71px]  text-[#717171] font-semibold text-[13.92px] leading-[19.49px] max-[485px]:text-[6px] max-[485px]:leading-[9px] max-[485px]:pb-[5.34px]">
          {user.name}
          <Button type={"submit"} variant="success">
            Readmore{" "}
            <svg
              width="6"
              height="4"
              viewBox="0 0 6 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.9229 2.92133L5.02229 1.82194C5.15267 1.69156 5.15267 1.48017 5.02229 1.34978L3.9229 0.250397M4.9245 1.58586L0.250366 1.58586"
                stroke="#4CAF4F"
                stroke-width="0.5008"
                stroke-linecap="round"
              />
            </svg>
          </Button>
        </p>
      </div>
    </div>
  );
};
const ContentPic = () => {
  return (
    <>
      <div className="flex gap-2">
        {users.map((user) => (
          <Pic key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};
export default ContentPic;
