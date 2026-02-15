import imgImg1898 from "figma:asset/93d40c0615d66215403ed99b8b848a8331464aef.png";
import imgImage5 from "figma:asset/e56d0885edfa3c6bfd084dd5f4f0ab25ab8a898f.png";

function Recherche() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[1186px] left-[71px] top-[102px] w-[890px]" data-name="IMG_1898">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg1898} />
      </div>
      <div className="absolute h-[1185px] left-[1050px] top-[102px] w-[889px]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Recherche />
    </div>
  );
}