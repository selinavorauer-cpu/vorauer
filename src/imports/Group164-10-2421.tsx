import svgPaths from "./svg-dveb6bjlx8";
import imgNackenTraining1 from "figma:asset/27a5b9d62a02917b19195b3f94e9b3e89a4613f3.png";
import imgNavigationsleiste1 from "figma:asset/0ee51fbe62fd333dfaebb154de027fcbf0030b70.png";

function Design() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Design">
      <div className="absolute h-[1224px] left-[37px] top-[83px] w-[855px]" data-name="Nacken Training 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNackenTraining1} />
      </div>
      <div className="absolute h-[321px] left-[872px] top-[953px] w-[1138px]" data-name="Navigationsleiste 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavigationsleiste1} />
      </div>
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[normal] left-[1196px] not-italic text-[131px] text-black text-nowrap top-[692px] whitespace-pre">Postura</p>
      <div className="absolute bg-[#8ccaef] left-[1184px] rounded-[100px] size-[515px] top-[177px]" />
      <div className="absolute inset-[18.06%_25.07%_55.52%_67.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 368">
          <path d={svgPaths.p2c66b000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export function DesignPlanMeImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="Design">
      {/* iPhone Screen mit Nacken Training */}
      <div className="absolute h-[88.1%] left-[1.8%] top-[6.0%] w-[42.5%]" data-name="Nacken Training Screen">
        <img alt="Postura App - Seitliche Neigung Übung" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNackenTraining1} />
      </div>
      {/* Navigationsleiste unten */}
      <div className="absolute h-[23.1%] left-[43.4%] top-[68.6%] w-[56.6%]" data-name="Navigationsleiste">
        <img alt="Postura Navigation mit Home, Live, Training, Betreuung" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavigationsleiste1} />
      </div>
      {/* Postura Text */}
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[normal] left-[59.5%] not-italic text-[6.52vw] text-black text-nowrap top-[49.8%] whitespace-pre">Postura</p>
      {/* Blauer Circle Hintergrund */}
      <div className="absolute bg-[#8ccaef] left-[58.9%] rounded-[100px] w-[25.6%] aspect-square top-[12.7%]" />
      {/* Wirbelsäule Icon Vector */}
      <div className="absolute inset-[18.06%_25.07%_55.52%_67.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 368">
          <path d={svgPaths.p2c66b000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Design />
    </div>
  );
}
