import { use, useEffect, type Dispatch, type SetStateAction } from "react";
import type { Itech } from "../../../types/tech";
import GivenStackCard from "./givenstackcard/GivenStackCard";

interface IGivenStackProps {
  // givenStackPromise: Promise<Itech>;//ERROR
  givenStackPromise: Promise<Itech[]>;
  givenStackArray: Itech[];
  setGivenStackArray: Dispatch<SetStateAction<Itech[]>>;
  selectedStackArray: Itech[];
  setSelectedStackArray: Dispatch<SetStateAction<Itech[]>>;
  yourSelectedStackMap: Record<string, boolean>;
  setYourSelectedStackMap: Dispatch<SetStateAction<Record<string, boolean>>>;
}
const GivenStack = ({
  givenStackArray,
  givenStackPromise,
  setGivenStackArray,
  selectedStackArray,
  setSelectedStackArray,
  yourSelectedStackMap,
  setYourSelectedStackMap,
}: IGivenStackProps) => {
  // const itechArray: Itech[] = use(givenStackPromise);
  // givenStackArray = use(givenStackPromise);//must use a set function, otherwise: react won't re-render any UI
  const tempStoreGivenStackArray = use(givenStackPromise);
  useEffect(() => {
    // const tempStoreGivenStackArray = use(givenStackPromise);//ERROR
    setGivenStackArray([...tempStoreGivenStackArray]);
    const tempMap: Record<string, boolean> = {};
    tempStoreGivenStackArray.forEach((itech: Itech) => {
      tempMap[itech.id] = false;
    });
    setYourSelectedStackMap(tempMap);
  }, []);
  // console.log(yourSelectedStackMap);//Checking appropriate map update for every click on "Add to Stack" Button
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
      {givenStackArray.map((itech: Itech) => {
        // <GivenStackCard itech={itech} key={itech.id}/>
        return (
          <GivenStackCard
            itech={itech}
            key={itech.id}
            yourSelectedStackMap={yourSelectedStackMap}
            setYourSelectedStackMap={setYourSelectedStackMap}
            selectedStackArray={selectedStackArray}
            setSelectedStackArray={setSelectedStackArray}
          />
        );
      })}
    </div>
  );
};

export default GivenStack;
