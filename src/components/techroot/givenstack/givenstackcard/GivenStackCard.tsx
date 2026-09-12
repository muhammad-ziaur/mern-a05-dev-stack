import type { Itech } from "../../../../types/tech";
import Symbol from "../../../../assets/Symbol.png";

interface IGivenStackCardProps {
  //no need to destructure "key"
  itech: Itech;
}
const GivenStackCard = ({ itech }: IGivenStackCardProps) => {
  return (
    <div className="p-8 flex flex-col space-y-2 bg-white border border-[#F1F5F9]/80 rounded-2xl">
      <div className="flex justify-between">
        <img
          src={itech.icon}
          alt="card icon"
          className="w-12 h-12 object-center object-cover"
        />
        <div
          className="h-8 flex items-center justify-center p-2"
          style={{
            color: itech.badgeColor,
            backgroundColor: itech.badgeBackgroundColor,
            border: `solid 2px ${itech.badgeBorderColor}`,
            borderRadius: "10px",
          }}
        >
          <p className="text-[14px] font-semibold">{itech.badge}</p>
        </div>
      </div>

      {/* <div className="flex flex-col text-left justify-between border-b-gray-400"> */}
      <div className="flex flex-col text-left justify-between border-b-[0.5px] border-b-gray-100 pb-4">
        <h2 className="text-3xl text-[#0F172A] font-semibold">{itech.name}</h2>
        <p className="text-1rem text-[#64748B]">{itech.description}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="h-7 py-1 px-2 flex justify-center items-center border-0 rounded-[6px] bg-[#F1F5F9]/80">
          <p className="text-[15px] font-medium text-[#475569]">
            {itech.category}
          </p>
        </div>
        <div>
          <p className="text-[15px] font-medium text-[#64748B]">
            {itech.difficulty}
          </p>
        </div>
        <div className="flex justify-between items-center gap-1">
          <img src={Symbol} alt="Rating icon" />
          <p className="text-[15px] font-semibold text-[#334155]">
            {itech.rating}
          </p>
        </div>
      </div>

      <button className="bg-[#0A0F1D] text-white border-0 rounded-lg py-2 cursor-pointer">
        Add to Stack
      </button>
    </div>
  );
};

export default GivenStackCard;
