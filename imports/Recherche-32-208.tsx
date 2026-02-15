import imgTerminvorgeben from "figma:asset/d986784d04db8948b09c72422d30ea9f5cec3b04.png";
import imgTerminFinden from "figma:asset/f75033303b98292a4def1fcbd6d81f037e1751ad.png";
import imgPlanMeStart from "figma:asset/52c78271892672521acb13333416ab22f0018a68.png";

export default function Recherche() {
  return (
    <div className="bg-[#e90139] relative size-full" data-name="Recherche">
      <div className="absolute h-[1207px] left-[1077px] top-[183px] w-[849px]" data-name="Terminvorgeben">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTerminvorgeben} />
      </div>
      <div className="absolute h-[1207px] left-[85px] top-[183px] w-[818px]" data-name="Termin Finden">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTerminFinden} />
      </div>
      <div className="absolute h-[1343px] left-[540px] top-[47px] w-[982px]" data-name="PlanMe-Start">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlanMeStart} />
      </div>
    </div>
  );
}