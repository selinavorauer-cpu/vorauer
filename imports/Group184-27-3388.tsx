import imgDetail from "figma:asset/a01c990c52ad178f1f4856487a0f238202576853.png";
import imgSuche from "figma:asset/b65a9c4cf084e6cef2c04140adacd79e28f7de49.png";
import imgMyDealzStart1 from "figma:asset/0f0ecfa1ff8bc623138bdadfac3788c2b6ff2ba8.png";

function Recherche() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[1342px] left-[25px] top-[165px] w-[924px]" data-name="Detail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDetail} />
      </div>
      <div className="absolute h-[1360px] left-[1033px] top-[147px] w-[952px]" data-name="Suche">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSuche} />
      </div>
      <div className="absolute h-[1515px] left-[569px] top-[-54px] w-[928px]" data-name="MyDealz_Start 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMyDealzStart1} />
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