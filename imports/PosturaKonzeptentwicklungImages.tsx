import imgImg1898 from "figma:asset/93d40c0615d66215403ed99b8b848a8331464aef.png";
import imgImage5 from "figma:asset/e56d0885edfa3c6bfd084dd5f4f0ab25ab8a898f.png";

export function PosturaKonzeptentwicklungImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390]" data-name="Postura Konzeptentwicklung">
      <div className="absolute h-[85.3%] left-[3.5%] top-[7.3%] w-[44.3%]" data-name="Person mit Postura Sensor">
        <img 
          alt="Postura - Person trägt den Rückensensor am Arbeitsplatz" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImg1898} 
        />
      </div>
      <div className="absolute h-[85.3%] left-[52.2%] top-[7.3%] w-[44.3%]" data-name="Postura Sensor Detail">
        <img 
          alt="Postura - Detailansicht des Haltungssensors auf Schneiderpuppe" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src={imgImage5} 
        />
      </div>
    </div>
  );
}

export default function Group() {
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
