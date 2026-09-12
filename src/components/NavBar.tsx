import logo from "../assets/logo-text.png";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#F8FAFC] border-b-[0.05px] border-slate-200">
      <div className="flex justify-between items-center py-4 container mx-auto">
        <img src={logo} alt="navbar logo" />
        <ul className="flex justify-between items-center text-[#334155] gap-4">
          <li>
            <a className="cursor-pointer text-[#DB2777] font-semibold">Home</a>
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
        <div className="flex justify-between items-center">
          <button className="btn btn-neutral btn-outline border-0 text-[#334155] hover:border-0 hover:bg-[#F8FAFC]">
            Sign In
          </button>
          <button className="btn btn-secondary border-0 rounded-3xl bg-[#DB2777]">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
