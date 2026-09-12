import YourStack from "./yourstack/YourStack";
import GivenStack from "./givenstack/GivenStack";
import type { Itech } from "../../types/tech";
import { Suspense, use, useState } from "react";

interface ITechRootProps {
  givenStackPromise: Promise<Itech[]>;
}
const fetchGivenStack = async (): Promise<Itech[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
};
const TechRoot = () => {
  const [givenStackPromise] = useState(() => fetchGivenStack());
  // const itechArray: Itech[] = use(givenStackPromise);//Error: using 'use' inside TechRoot without wrapping TechRoot itself within a Suspense
  // console.log(givenStackPromise);
  const [selectedStackArray, setSelectedStackArray] = useState<Itech[]>([]);
  const [givenStackArray, setGivenStackArray] = useState<Itech[]>([]);
  return (
    <section>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <Suspense fallback={<p>Loading...</p>}>
            <GivenStack
              givenStackArray={givenStackArray}
              givenStackPromise={givenStackPromise}
            />
          </Suspense>
        </div>
        <div className="col-span-3">
          <YourStack />
        </div>
      </div>
    </section>
  );
};

export default TechRoot;
