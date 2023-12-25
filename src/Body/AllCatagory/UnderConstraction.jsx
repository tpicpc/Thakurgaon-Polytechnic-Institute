import construction from "../../../public/img/Under construction.gif";
const UnderConstraction = () => {
  return (
    <div className=" mb-5">
      <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-2 py-2 text-white border-l-[4px] border-red-600 pl-3">
        {" "}
        এই পৃষ্ঠার কাজ বর্তমানে চলমান রয়েছে{" "}
        <span className=" text-md text-red-700 font-semibold">
          {" "}
          [ 404 error pages ]{" "}
        </span>
        :-
      </h2>
      <aside className="w-full flex items-center justify-center">
      <img src={construction} alt={construction} />
      </aside>
      <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-2 py-2 text-white border-l-[4px] border-red-600 pl-3">
        {" "}
        পরবর্তী আপডেট পর্যন্ত অপেক্ষা করুন ধন্যবাদ 😎 :-
      </h2>
    </div>
  );
};

export default UnderConstraction;
