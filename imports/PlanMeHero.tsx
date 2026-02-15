import imgTerminvorgeben from "figma:asset/d986784d04db8948b09c72422d30ea9f5cec3b04.png";
import imgTerminFinden from "figma:asset/f75033303b98292a4def1fcbd6d81f037e1751ad.png";
import imgPlanMeStart from "figma:asset/52c78271892672521acb13333416ab22f0018a68.png";

export function PlanMeHeroImage() {
  return (
    <div className="relative bg-[#e90139] w-[65%] aspect-[2010/1390] max-w-full mx-auto" style={{ transform: 'scale(1.0)' }} data-name="PlanMe Hero">
      {/* Linkes Bild - Termin Finden Screen */}
      <div className="absolute h-[86.8%] left-[4.2%] top-[13.2%] w-[40.7%]" data-name="Termin Finden">
        <img alt="PlanMe - Termin Finden Screen mit Event Planung" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTerminFinden} />
      </div>
      {/* Rechtes Bild - Terminvorgeben Screen */}
      <div className="absolute h-[86.8%] left-[53.6%] top-[13.2%] w-[42.2%]" data-name="Terminvorgeben">
        <img alt="PlanMe - Terminvorgeben Screen mit Terminoptionen" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTerminvorgeben} />
      </div>
      {/* Mittleres Bild - Start Screen (im Vordergrund) */}
      <div className="absolute h-[96.6%] left-[26.9%] top-[3.4%] w-[48.9%]" data-name="PlanMe-Start">
        <img alt="PlanMe - Start Screen mit WhatsApp Integration und PlanMe Funktion" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlanMeStart} />
      </div>
    </div>
  );
}

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
