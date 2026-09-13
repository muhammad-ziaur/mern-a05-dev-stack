const EmptyCard = () => {
  return (
    // <div className="p-8 flex flex-col space-y-2 bg-white border border-black rounded-2xl">
    <div className="p-8 flex justify-center items-center bg-white border-dashed border-[0.05px] border-slate-200 rounded-2xl">
      <p className="text-[#94A3B8] cursor-pointer">Your stack is empty.</p>
    </div>
  );
};

export default EmptyCard;
