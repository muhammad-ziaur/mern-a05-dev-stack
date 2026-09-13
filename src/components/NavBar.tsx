import logo from "../assets/logo-text.png";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <nav className="sticky py-4 top-0 z-50 bg-[#F8FAFC] border-b-[0.05px] border-slate-200">
      <div className="flex md:justify-between justify-evenly items-center container mx-auto">
        <span className="md:hidden text-[#334155] text-2xl cursor-pointer">
          <GiHamburgerMenu />
        </span>

        <img
          src={logo}
          alt="navbar logo"
          className="object-cover object-center"
        />

        <div className="hidden md:block">
          <ul className="flex justify-between items-center text-[#334155] gap-4">
            <li>
              <a className="cursor-pointer text-[#DB2777] font-semibold">
                Home
              </a>
            </li>
            <li>
              <a className="cursor-pointer font-semibold">Technologies</a>
            </li>
            <li>
              <a className="cursor-pointer font-semibold">Projects</a>
            </li>
            <li>
              <a className="cursor-pointer font-semibold">About</a>
            </li>
            <li>
              <a className="cursor-pointer font-semibold">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <button className="cursor-pointer px-4 py-2 text-sm font-medium text-[#334155] bg-transparent  transition-all hover:bg-[#F8FAFC] hover:text-shadow-slate-900 hover:-translate-y-0.5 active:translate-y-0">
            Sign In
          </button>
          <button className="cursor-pointer px-6 py-2 text-sm font-medium text-white bg-[#DB2777] rounded-full transition-all hover:bg-[#be185d] hover:-translate-y-0.5 active:translate-y-0">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
