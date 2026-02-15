import imgNackenTraining1 from "figma:asset/27a5b9d62a02917b19195b3f94e9b3e89a4613f3.png";
import imgNavigationsleiste1 from "figma:asset/0ee51fbe62fd333dfaebb154de027fcbf0030b70.png";
import imgFrame4273190301 from "figma:asset/86f5e43f0bae656662ba2817a68c8000c43fe873.png";
import imgGroup1861 from "figma:asset/93a146c4709c55a503569325eb50acc240d3a927.png";

export function PosturaDesignImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390]" data-name="Postura Design">
      <div className="absolute h-[88%] left-[1.8%] top-[6%] w-[42.5%]" data-name="Nacken Training Screen">
        <img 
          alt="Postura - Nackentraining Übung: Seitliche Neigung mit Anleitung" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgNackenTraining1} 
        />
      </div>
      <div className="absolute h-[23.1%] left-[43.4%] bottom-[8.6%] w-[56.6%]" data-name="Navigationsleiste">
        <img 
          alt="Postura - Navigationsleiste mit Home, Live, Training und Betreuung" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgNavigationsleiste1} 
        />
      </div>
      <div className="absolute h-[34%] left-[45.7%] top-[27.3%] w-[19.6%]" data-name="App Icon und Logo">
        <img 
          alt="Postura - App Icon mit Logo und Haltungssymbol" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgFrame4273190301} 
        />
      </div>
      <div className="absolute h-[37.1%] left-[74%] top-[20.4%] w-[16.1%]" data-name="Haltungsdarstellung">
        <img 
          alt="Postura - Visualisierung der Körperhaltung" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgGroup1861} 
        />
      </div>
    </div>
  );
}

export default function Group() {
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
