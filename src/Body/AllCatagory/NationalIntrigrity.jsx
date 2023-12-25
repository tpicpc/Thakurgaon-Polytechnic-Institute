import Integrityimg from "../../../public/img/NationalIntrigrity.png";

export default function NationalIntrigrity() {
  return (
    <div className="bg-[#FCFCFC] shadow-md shadow-slate-400 p-3 h-full">
      <h2 className=" font-semibold">জাতীয় অখণ্ডতা</h2>
      <div className="flex flex-wrap flex-row gap-1 justify-start items-center">
        <img
          className="md:w-32 p-3 md:p-0 md:h-36"
          src={Integrityimg}
          alt="Academicimg"
        />
        <ul className="text-slate-500 text-[13px] px-3 mb-3 md:px-0">
          <li className="flex items-center -mb-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cabinet.gov.bd/site/page/7d7633ee-62b1-4d12-8e14-6590ae973106/%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A7%80%E0%A7%9F-%E0%A6%B6%E0%A7%81%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A6%BE%E0%A6%9A%E0%A6%BE%E0%A6%B0-%E0%A6%95%E0%A7%8C%E0%A6%B6%E0%A6%B2"
            >
              <span className=" text-xl pr-1">▸</span>জাতীয় অখণ্ডতা কৌশল
              বাংলাদেশ
            </a>
          </li>

          <li className="flex items-center -mb-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mopa.gov.bd/site/view/mopa_integrity/NIS%20Plan/%E0%A6%B6%E0%A7%81%E0%A6%A6%E0%A7%8D%E0%A6%A7%E0%A6%BE%E0%A6%9A%E0%A6%BE%E0%A6%B0-%E0%A6%95%E0%A7%8C%E0%A6%B6%E0%A6%B2-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A6%B2%E0%A7%8D%E0%A6%AA%E0%A6%A8%E0%A6%BE"
            >
              <span className=" text-xl pr-1">▸</span> আমাদের পরিকল্পনা
              বাংলাদেশ
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
}
