import Button from "./Button";
export default function Section9() {
  return (
    <section className="mb-[22.27px] max-[485px]:px-12 ">
      <div className="max-w-[1002px] mx-auto mt-[33.41] flex flex-col justify-center items-center text-center ">
        <h1 className="py-[22.27px] text-[44.55px] leading-[52.9px] font-semibold max-w-[617px]  text-center max-[485px]:text-[21.37px] max-[485px]:leading-[25.37px]">
          Pellentesque suscipit
          <br /> fringilla libero eu.
        </h1>
        <Button type={"submit"} variant="primary">
          Register Now
          <svg
            width="25.341864585876485"
            height="12"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75612 3.67261L4.58068 2.84805C4.67847 2.75026 4.67847 2.59171 4.58068 2.49392L3.75612 1.66936M4.50734 2.67098L0.834717 2.67098"
              stroke="white"
              stroke-width="0.367253"
              stroke-linecap="round"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
}
