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
    <section className="border-b-[0.05px] border-slate-200 pb-24 ">
      <div className="container mx-auto grid grid-cols-12 gap-4 md:px-0 px-12">
        <div className="md:col-span-9 col-span-12">
          <Suspense
            fallback={
              <div>
                <p className="text-xl font-semibold text-center text-[#94A3B8]">
                  Loading technologies...
                </p>
              </div>
            }
          >
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
        <div className="md:col-span-3 col-span-12">
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
