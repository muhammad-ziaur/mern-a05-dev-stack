import type { Dispatch, SetStateAction } from "react";
import type { Itech } from "../../../../types/tech";
import { RxCross2 } from "react-icons/rx";
import { Slide, toast } from "react-toastify";

interface ISelectedStackCardProps {
  itech: Itech;
  selectedStackArray: Itech[];
  setSelectedStackArray: Dispatch<SetStateAction<Itech[]>>;
  yourSelectedStackMap: Record<string, boolean>;
  setYourSelectedStackMap: Dispatch<SetStateAction<Record<string, boolean>>>;
}

const SelectedStackCard = ({
  itech,
  selectedStackArray,
  setSelectedStackArray,
  yourSelectedStackMap,
  setYourSelectedStackMap,
}: ISelectedStackCardProps) => {
  const handleTechRemove = () => {
    const tempMap: Record<string, boolean> = {};
    for (let key in yourSelectedStackMap)
      tempMap[key] = yourSelectedStackMap[key];
    tempMap[itech.id] = false;
    setYourSelectedStackMap(tempMap);

    const tempSelectedStackArray: Itech[] = selectedStackArray.filter(
      (elem: Itech) => elem.id !== itech.id,
    );
    setSelectedStackArray(tempSelectedStackArray);

    toast.info(`${itech.name} has been Removed from your Stack!`, {
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
    <div className="p-4 flex flex-col bg-white border border-common-border rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <img
            src={itech.icon}
            alt="card icon"
            className="w-5.5 h-5.5 object-center object-cover"
          />
          <div className="flex flex-col justify-between items-start">
            <h2 className="text-xl text-black font-semibold">{itech.name}</h2>
            <p className="text-xs text-slate-700 font-semibold">
              {itech.category}
            </p>
          </div>
        </div>
        <span
          className="text-2xl text-slate-400 font-semibold cursor-pointer transition-all hover:text-slate-700 hover:-translate-y-0.5 active:translate-y-0"
          onClick={handleTechRemove}
        >
          <RxCross2 />
        </span>
      </div>
    </div>
  );
};

export default SelectedStackCard;
