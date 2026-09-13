import logo from "../assets/logo-text.png";
import { BsDot } from "react-icons/bs";

const UpperFooter = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col items-center md:grid md:grid-cols-12 md:items-start">
        <div className="md:col-span-4 flex flex-col gap-4 items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="footer logo" className="object-cover" />
            <p className="text-[14px] text-[#475569] md:text-left text-center pt-2">
              Curated tools, technologies, and resources for developers building
              <br />
              modern software
            </p>
          </div>

          <ul className="flex justify-center md:justify-start items-center text-[#334155] gap-4">
            <li>
              <a
                className="text-[13px] cursor-pointer font-semibold"
                href="https://github.com/"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li className="md:hidden inline">
              <span className="font-semibold text-gray-400">
                <BsDot />
              </span>
            </li>
            <li>
              <a
                className="text-[13px] cursor-pointer font-semibold"
                href="https://x.com/"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li className="md:hidden inline">
              <span className="font-semibold text-gray-400">
                <BsDot />
              </span>
            </li>
            <li>
              <a
                className="text-[13px] cursor-pointer font-semibold"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 hidden md:block">
          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] text-[#0F172A] font-bold">PRODUCT</h4>
            <ul className="flex flex-col gap-2 text-[13px] text-[#64748B]">
              <li>
                <a className="cursor-pointer">Home</a>
              </li>
              <li>
                <a className="cursor-pointer">Technologies</a>
              </li>
              <li>
                <a className="cursor-pointer">Projects</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3 hidden md:block">
          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] text-[#0F172A] font-bold">COMPANY</h4>
            <ul className="flex flex-col gap-2 text-[13px] text-[#64748B]">
              <li>
                <a className="cursor-pointer">About</a>
              </li>
              <li>
                <a className="cursor-pointer">Contact</a>
              </li>
              <li>
                <a className="cursor-pointer">Careers</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-2 hidden md:block">
          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] text-[#0F172A] font-bold">LEGAL</h4>
            <ul className="flex flex-col gap-2 text-[13px] text-[#64748B]">
              <li>
                <a className="cursor-pointer">Privacy Policy</a>
              </li>
              <li>
                <a className="cursor-pointer">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpperFooter;
