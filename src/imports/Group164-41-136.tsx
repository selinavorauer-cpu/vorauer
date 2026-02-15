import imgNackenTraining1 from "figma:asset/27a5b9d62a02917b19195b3f94e9b3e89a4613f3.png";
import imgNavigationsleiste1 from "figma:asset/0ee51fbe62fd333dfaebb154de027fcbf0030b70.png";
import imgFrame4273190301 from "figma:asset/86f5e43f0bae656662ba2817a68c8000c43fe873.png";
import imgGroup1861 from "figma:asset/93a146c4709c55a503569325eb50acc240d3a927.png";

function Design() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Design">
      <div className="absolute h-[1224px] left-[37px] top-[83px] w-[855px]" data-name="Nacken Training 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNackenTraining1} />
      </div>
      <div className="absolute h-[321px] left-[872px] top-[953px] w-[1138px]" data-name="Navigationsleiste 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavigationsleiste1} />
      </div>
      <div className="absolute h-[473px] left-[918px] top-[379px] w-[394px]" data-name="Frame 427319030 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame4273190301} />
      </div>
      <div className="absolute h-[516px] left-[1488px] top-[283px] w-[323px]" data-name="Group 186 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup1861} />
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
