import imgFilterOptionenSelina from "figma:asset/551fb549e137722c2621cc14014df366b970fb5e.png";
import imgSuchoption from "figma:asset/54508380e391ed91ba9ed801593400bda992ad40.png";
import imgFilterEinstellen from "figma:asset/b691bcb91f54139df712f096c44057ac8615dd1c.png";
import imgFilterOptionen1 from "figma:asset/7f6e9f30d2044f11bbec22a4e06442a9545fdaeb.png";

function Recherche() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[961px] left-[48px] top-[158px] w-[443px]" data-name="FilterOptionen - Selina">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFilterOptionenSelina} />
      </div>
      <div className="absolute h-[947px] left-[519px] top-[172px] w-[442px]" data-name="Suchoption">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSuchoption} />
      </div>
      <div className="absolute h-[970px] left-[1047px] top-[149px] w-[447px]" data-name="Filter einstellen">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFilterEinstellen} />
      </div>
      <div className="absolute h-[947px] left-[1524px] top-[172px] w-[437px]" data-name="FilterOptionen1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFilterOptionen1} />
      </div>
    </div>
  );
}

export function KonzeptentwicklungImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="Konzeptentwicklung">
      {/* Erstes Wireframe - Filter Optionen */}
      <div className="absolute h-[69.1%] left-[2.4%] top-[11.4%] w-[22.0%]" data-name="FilterOptionen - Selina">
        <img alt="MyDealz Wireframe - Filteroptionen Übersicht" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFilterOptionenSelina} />
      </div>
      {/* Zweites Wireframe - Suchoption */}
      <div className="absolute h-[68.1%] left-[25.8%] top-[12.4%] w-[22.0%]" data-name="Suchoption">
        <img alt="MyDealz Wireframe - Such- und Filterfunktion" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSuchoption} />
      </div>
      {/* Drittes Wireframe - Filter einstellen */}
      <div className="absolute h-[69.8%] left-[52.1%] top-[10.7%] w-[22.2%]" data-name="Filter einstellen">
        <img alt="MyDealz Wireframe - Erweiterte Filtereinstellungen" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFilterEinstellen} />
      </div>
      {/* Viertes Wireframe - Filter Optionen Detail */}
      <div className="absolute h-[68.1%] left-[75.8%] top-[12.4%] w-[21.7%]" data-name="FilterOptionen1">
        <img alt="MyDealz Wireframe - Filteroptionen Detailansicht" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFilterOptionen1} />
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