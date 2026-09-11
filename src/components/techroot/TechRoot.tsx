import YourStack from "./yourstack/YourStack";
import GivenStack from "./givenstack/GivenStack";
import type { Itech } from "../../types/tech";
import { useState } from "react";

const fetchGivenStack = async (): Promise<Itech[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
};

const TechRoot = () => {
  const [givenStackPromise] = useState(() => fetchGivenStack());
  console.log(givenStackPromise);
  return (
    <section className="container mx-auto">
      <h1 className="text-left">Title Title Title Title Title</h1>
      <p className="text-left">Subtitle Subtitle Subtitle</p>
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <GivenStack />
        </div>
        <div className="col-span-3">
          <YourStack />
        </div>
      </div>
    </section>
  );
};

export default TechRoot;
