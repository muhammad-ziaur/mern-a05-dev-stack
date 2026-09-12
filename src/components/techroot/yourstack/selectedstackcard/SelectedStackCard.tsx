import type { Dispatch, SetStateAction } from "react";
import type { Itech } from "../../../../types/tech";
import { RxCross2 } from "react-icons/rx";

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
  };

  return (
    <div className="p-4 flex flex-col space-y-2 bg-white border border-black rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <img
            src={itech.icon}
            alt="card icon"
            className="w-8 h-8 object-center object-cover"
          />
          <div className="flex flex-col">
            <h2 className="text-xl text-black">{itech.name}</h2>
            <p className="text-xs text-slate-700">{itech.category}</p>
          </div>
        </div>
        <span
          className="text-slate-600 font-bold cursor-pointer"
          onClick={handleTechRemove}
        >
          <RxCross2 />
        </span>
      </div>
    </div>
  );
};

export default SelectedStackCard;
