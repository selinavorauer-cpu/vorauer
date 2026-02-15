import imgNackenTraining1 from "figma:asset/27a5b9d62a02917b19195b3f94e9b3e89a4613f3.png";
import imgNavigationsleiste1 from "figma:asset/0ee51fbe62fd333dfaebb154de027fcbf0030b70.png";
import imgFrame4273190301 from "figma:asset/86f5e43f0bae656662ba2817a68c8000c43fe873.png";

function Design() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Design">
      <div className="absolute h-[1224px] left-[37px] top-[83px] w-[855px]" data-name="Nacken Training 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNackenTraining1} />
      </div>
      <div className="absolute h-[321px] left-[872px] top-[953px] w-[1138px]" data-name="Navigationsleiste 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavigationsleiste1} />
      </div>
      <div className="absolute h-[782px] left-[1116px] top-[131px] w-[651px]" data-name="Frame 427319030 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame4273190301} />
      </div>
    </div>
  );
}

export function DesignPosturaImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="Design">
      {/* iPhone Screen mit Seitliche Neigung Übung */}
      <div className="absolute h-[88.1%] left-[1.8%] top-[6.0%] w-[42.5%]" data-name="Nacken Training 1">
        <img alt="Postura App - Seitliche Neigung Übung" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNackenTraining1} />
      </div>
      {/* Navigationsleiste unten */}
      <div className="absolute h-[23.1%] left-[43.4%] top-[68.6%] w-[56.6%]" data-name="Navigationsleiste 1">
        <img alt="Postura Navigation mit Home, Live, Training, Betreuung" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavigationsleiste1} />
      </div>
      {/* Postura Logo und App Frame */}
      <div className="absolute h-[56.3%] left-[55.5%] top-[9.4%] w-[32.4%]" data-name="Frame 427319030 1">
        <img alt="Postura Logo mit Wirbelsäulen-Icon" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame4273190301} />
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
