const EmptyCard = () => {
  return (
    // <div className="p-8 flex flex-col space-y-2 bg-white border border-black rounded-2xl">
    <div className="p-8 flex justify-center items-center bg-white border border-dashed border-black rounded-2xl">
      <p className="text-slate-600 font-bold cursor-pointer">
        Your stack is empty.
      </p>
    </div>
  );
};

export default EmptyCard;
