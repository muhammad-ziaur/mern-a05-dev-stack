import YourStack from "./yourstack/YourStack";
import GivenStack from "./givenstack/GivenStack";
import type { Itech } from "../../types/tech";
import { Suspense, useState } from "react";

const fetchGivenStack = async (): Promise<Itech[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
};
const TechRoot = () => {
  const [givenStackPromise] = useState(() => fetchGivenStack());
  // const itechArray: Itech[] = use(givenStackPromise);//Error: using 'use' inside TechRoot without wrapping TechRoot itself within a Suspense
  // console.log(givenStackPromise);
  const [selectedStackArray, setSelectedStackArray] = useState<Itech[]>([]); //Select first, show first in YourStack
  const [givenStackArray, setGivenStackArray] = useState<Itech[]>([]);
  const [yourSelectedStackMap, setYourSelectedStackMap] = useState<
    Record<string, boolean>
  >({});
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <Suspense fallback={<p>Loading...</p>}>
            <GivenStack
              givenStackPromise={givenStackPromise}
              givenStackArray={givenStackArray}
              setGivenStackArray={setGivenStackArray}
              selectedStackArray={selectedStackArray}
              setSelectedStackArray={setSelectedStackArray}
              yourSelectedStackMap={yourSelectedStackMap}
              setYourSelectedStackMap={setYourSelectedStackMap}
            />
          </Suspense>
        </div>
        <div className="col-span-3">
          <YourStack
            selectedStackArray={selectedStackArray}
            setSelectedStackArray={setSelectedStackArray}
            yourSelectedStackMap={yourSelectedStackMap}
            setYourSelectedStackMap={setYourSelectedStackMap}
          />
        </div>
      </div>
    </section>
  );
};

export default TechRoot;
