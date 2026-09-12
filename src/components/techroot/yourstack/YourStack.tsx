import type { Dispatch, SetStateAction } from "react";
import type { Itech } from "../../../types/tech";
import SelectedStackCard from "./selectedstackcard/SelectedStackCard";
import EmptyCard from "./emptycard/EmptyCard";

interface IYourStackProps {
  selectedStackArray: Itech[];
  setSelectedStackArray: Dispatch<SetStateAction<Itech[]>>;
  yourSelectedStackMap: Record<string, boolean>;
  setYourSelectedStackMap: Dispatch<SetStateAction<Record<string, boolean>>>;
}
const YourStack = ({
  selectedStackArray,
  setSelectedStackArray,
  yourSelectedStackMap,
  setYourSelectedStackMap,
}: IYourStackProps) => {
  const handleRemoveAll = () => {
    const tempMap: Record<string, boolean> = {};
    setYourSelectedStackMap(tempMap);
    const tempSelectedStackArray: Itech[] = [];
    setSelectedStackArray(tempSelectedStackArray);
  };

  return (
    <div className="p-8 flex flex-col space-y-8 bg-white border border-[#F1F5F9]/80 rounded-2xl">
      <div>
        <h2 className="text-3xl text-[#0F172A] text-left font-bold">
          Your Stack
        </h2>
      </div>
      <div>
        {selectedStackArray.length === 0 ? (
          <p className="text-xl text-[#94A3B8] text-left">
            No technologies selected yet.
          </p>
        ) : (
          <p className="text-xl text-[#94A3B8] text-left">
            {selectedStackArray.length} Technology Selected
          </p>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {selectedStackArray.length === 0 ? (
          <EmptyCard />
        ) : (
          selectedStackArray.map((itech: Itech) => {
            return (
              <SelectedStackCard
                key={itech.id}
                itech={itech}
                selectedStackArray={selectedStackArray}
                setSelectedStackArray={setSelectedStackArray}
                yourSelectedStackMap={yourSelectedStackMap}
                setYourSelectedStackMap={setYourSelectedStackMap}
              />
            );
          })
        )}
      </div>
      <>
        {selectedStackArray.length !== 0 && (
          <button
            className="text-red-700 font-bold border border-red-700 rounded-lg py-2 cursor-pointer flex flex-row justify-center items-center gap-1"
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        )}
      </>
    </div>
  );
};

export default YourStack;
