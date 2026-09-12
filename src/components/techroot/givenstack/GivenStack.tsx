import { use } from "react";
import type { Itech } from "../../../types/tech";
import GivenStackCard from "./givenstackcard/GivenStackCard";

interface IGivenStackProps {
  givenStackArray: Itech[];
  // givenStackPromise: Promise<Itech>;//ERROR
  givenStackPromise: Promise<Itech[]>;
}
const GivenStack = ({
  givenStackArray,
  givenStackPromise,
}: IGivenStackProps) => {
  // const itechArray: Itech[] = use(givenStackPromise);
  givenStackArray = use(givenStackPromise);
  return (
    <div className="grid grid-cols-3 gap-4">
      {givenStackArray.map((itech: Itech) => {
        // <GivenStackCard itech={itech} key={itech.id}/>
        return <GivenStackCard itech={itech} key={itech.id} />;
      })}
    </div>
  );
};

export default GivenStack;
