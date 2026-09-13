import type { Itech } from "../../../../types/tech";
import { SiTicktick } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import type { Dispatch, SetStateAction } from "react";
import { Slide, toast } from "react-toastify";

interface IGivenStackCardProps {
  //no need to destructure "key"
  itech: Itech;
  yourSelectedStackMap: Record<string, boolean>;
  setYourSelectedStackMap: Dispatch<SetStateAction<Record<string, boolean>>>;
  selectedStackArray: Itech[];
  setSelectedStackArray: Dispatch<SetStateAction<Itech[]>>;
}
const GivenStackCard = ({
  itech,
  yourSelectedStackMap,
  setYourSelectedStackMap,
  selectedStackArray,
  setSelectedStackArray,
}: IGivenStackCardProps) => {
  const handleAddtoStack = () => {
    const tempMap: Record<string, boolean> = {};
    for (let key in yourSelectedStackMap)
      tempMap[key] = yourSelectedStackMap[key];
    tempMap[itech.id] = true;
    setYourSelectedStackMap(tempMap);

    const tempSelectedStackArray: Itech[] = selectedStackArray.map(
      (elem: Itech) => elem,
    );
    tempSelectedStackArray.push(itech);
    setSelectedStackArray(tempSelectedStackArray);
    toast.success(`${itech.name} Successfully added to your Stack!!!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    // <div className="p-8 flex flex-col space-y-2 bg-white border border-[#F1F5F9]/80 rounded-2xl">
    <div
      className={`p-8 grid grid-rows-12 bg-white border rounded-2xl ${yourSelectedStackMap[itech.id] ? "border-red-400" : "border-[#F1F5F9]/80"}`}
    >
      <div className="row-span-3 flex justify-between md:items-start items-center">
        <div className="flex justify-start gap-3 md:items-start items-center">
          <img
            src={itech.icon}
            alt="card icon"
            className="w-12 h-12 object-center object-cover"
          />
          <h2 className="md:hidden block text-3xl text-[#0F172A] font-semibold">
            {itech.name}
          </h2>
        </div>

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
      <div className="row-span-5 flex flex-col gap-3 text-left justify-start pb-8">
        <h2 className="md:block hidden text-3xl text-[#0F172A] font-semibold">
          {itech.name}
        </h2>
        <p className="text-1rem text-[#64748B]">{itech.description}</p>
      </div>
      <div className="row-span-4 flex flex-col justify-start gap-5 border-t-[0.5px] border-t-gray-200 pt-2">
        <div className="flex justify-between items-center w-full pt-2">
          <div className="h-7 py-1 px-2 flex justify-center items-center border-0 rounded-md bg-[#F1F5F9]/80">
            <p className="text-[15px] font-medium text-[#475569]">
              {itech.category}
            </p>
          </div>
          <div>
            <p className="text-[15px] font-medium text-[#64748B]">
              {itech.difficulty}
            </p>
          </div>
          <div className="flex justify-between items-center gap-1.25">
            <span className="text-yellow-400">
              <FaStar />
            </span>
            <p className="text-[15px] font-semibold text-[#334155]">
              {itech.rating}
            </p>
          </div>
        </div>

        <div className="w-full">
          {yourSelectedStackMap[itech.id] ? (
            <button className="w-full text-white border border-red-400 rounded-lg py-2 cursor-not-allowed flex flex-row justify-center items-center gap-1">
              <span className="text-red-400 font-bold">
                <SiTicktick />
              </span>
              <span className="text-red-400 font-bold">
                <p> Added to Stack</p>
              </span>
            </button>
          ) : (
            <button
              className="w-full bg-[#0A0F1D] text-white border-0 rounded-lg py-2 cursor-pointer"
              onClick={handleAddtoStack}
            >
              Add to Stack
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GivenStackCard;
