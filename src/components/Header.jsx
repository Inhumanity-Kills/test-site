import logo from "../assets/logo.png";
import Burger from "../assets/Burger.png";
import Button from "./Button";
export default function Header() {
  return (
    <>
      <header className="max-[485px]:max-w-[480px] max-[485px]:px-12">
        <div className="max-w-[1002px] m-auto flex justify-between items-center">
          <img src={logo} className="max-w-[108px] max-[485px]:py-5" />
          <div className="max-w-[650px] ">
            <img src={Burger} className="hidden max-[485px]:inline max-w-5" />
            <div className=" flex gap-8 py-5 items-center max-[485px]:hidden">
              <Menu title={"Home"} href={"/"} />
              <Menu title={"Features"} href={"/"} />
              <Menu title={"Community"} href={"/"} />
              <Menu title={"Blog"} href={"/"} />
              <Menu title={"Pricing"} href={"/"} />
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
          </div>
        </div>
      </header>
    </>
  );
  function Menu(props) {
    return <a href={props.href}>{props.title}</a>;
  }
}
