import imgLibary1 from "figma:asset/c80799f3bdb053c938014c3a63e07ba954478981.png";
import imgFreesytleInstrumente1 from "figma:asset/3554c137159bb0de9f9d55f54d93ad5462fe4637.png";
import imgBbTrans1 from "figma:asset/51129248b7ae92b0e3bd3ab93f0c568901a8eca1.png";
import imgGroup411 from "figma:asset/4a5708f4a1f5ac0df6f60c610b237f7fbed15198.png";

export default function Recherche() {
  return (
    <div className="bg-white relative size-full" data-name="Recherche">
      <div className="absolute h-[1121px] left-[365px] top-[102px] w-[939px]" data-name="Libary 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLibary1} />
      </div>
      <div className="absolute h-[1059px] left-0 top-[229px] w-[833px]" data-name="Freesytle-Instrumente 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFreesytleInstrumente1} />
      </div>
      <div className="absolute h-[994px] left-[1297px] top-[166px] w-[713px]" data-name="BB_trans 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBbTrans1} />
      </div>
      <div className="absolute h-[278px] left-[1157px] top-[556px] w-[171px]" data-name="Group 41 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup411} />
      </div>
    </div>
  );
}