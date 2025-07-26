import { TbMenu } from "react-icons/tb";
const NavBar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 md:p-9 p-3 flex item-center justify-between">
      <img
        className="md:w-24 w-20 "
        src="/images/nav-logo.svg"
        alt="nav-logo"
      />

      <span className="">
        <TbMenu size={"2rem"} />
      </span>

      <button className="hero-button uppercase">
        find the stories
      </button>
    </nav>
  );
};

export default NavBar;