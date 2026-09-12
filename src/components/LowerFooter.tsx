import { FaRegCopyright } from "react-icons/fa";
const LowerFooter = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="text-[13px] text-[#94A3B8] flex justify-between items-center">
        <div className="flex justify-start items-center gap-0.5">
          <FaRegCopyright />
          <p className="tracking-tight">2026 Dev Stack. All rights reserved.</p>
        </div>

        <ul className="flex justify-between items-center gap-4">
          <li>
            <a className="cursor-pointer">Privacy</a>
          </li>
          <li>
            <a className="cursor-pointer">Terms</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LowerFooter;
