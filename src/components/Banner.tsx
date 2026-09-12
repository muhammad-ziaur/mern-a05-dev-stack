import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="md:mt-0 mt-4 container mx-auto grid grid-cols-12 items-center">
      <div className="col-span-12 md:col-span-6 flex flex-col gap-6 md:gap-10 md:items-start items-center">
        <div className="font-bold md:text-5xl text-4xl flex flex-col gap-px md:items-start items-center">
          <h1 className=" text-[#0F172A] text-center md:text-left">
            Build Your Ideal
          </h1>
          <h1 className="bg-brand bg-clip-text text-transparent pb-1 text-center md:text-left">
            Development Stack
          </h1>
        </div>

        <p className="text-[#475569] md:text-left text-center">
          Explore frontend, backend, database, and tooling options, <br />
          compare them side by side, and put together the stack that fits your{" "}
          <br />
          next project.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="w-56 px-3 py-2 bg-brand-button font-semibold border-0 rounded-[10px] cursor-pointer text-center">
            Explore Technologies
          </button>
          <button className="w-56 cursor-pointer font-semibold px-3 py-2 border-[0.25px] rounded-[10px] border-common-border bg-white text-[#374151] text-center">
            Learn More
          </button>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 flex md:justify-end justify-center items-center mt-0">
        <img
          src={banner}
          alt="banner image"
          className="md:object-cover object-fill object-center"
        />
      </div>
    </section>
  );
};

export default Banner;
