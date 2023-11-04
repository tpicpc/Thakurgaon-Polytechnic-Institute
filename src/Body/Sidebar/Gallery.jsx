import carousel1 from "../../../img/gallary01.jpg";
import carousel2 from "../../../img/gallary02.jpg";
import carousel3 from "../../../img/gallary03.jpg";
import carousel4 from "../../../img/gallary04.jpg";

export default function Gallery() {
  return (
    <div>

    <h2 className="bg-gradient-to-r from-[#1B8119] to-[#46A20D] mb-6 py-2 text-white border-l-[4px] border-red-600 pl-3">গ্যালারি</h2>

      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src={carousel1}
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src={carousel2}
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src={carousel3}
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src={carousel4}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}
