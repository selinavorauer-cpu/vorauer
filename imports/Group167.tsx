import imgImg1249 from "figma:asset/71633ba04054f7c28941c973c6ace9dfca9f091b.png";
import imgImg1252 from "figma:asset/138ca6771ee75776ba7ccdd3dce006157b9ed394.png";
import imgImg1250 from "figma:asset/881518e1123d4c38ea6297982712fd5435675dde.png";

function Recherche() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[1307px] left-[46px] top-[41px] w-[604px]" data-name="IMG_1249">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg1249} />
        </div>
      </div>
      <div className="absolute h-[1296px] left-[1359px] top-[47px] w-[599px]" data-name="IMG_1252">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg1252} />
        </div>
      </div>
      <div className="absolute h-[1296px] left-[706px] top-[47px] w-[599px]" data-name="IMG_1250">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg1250} />
        </div>
      </div>
    </div>
  );
}

export function MyDealzResearchImage() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="MyDealz Research">
      {/* Linkes iPhone Mockup - Startseite */}
      <div className="absolute h-[94.0%] left-[2.3%] top-[2.9%] w-[30.0%]" data-name="IMG_1249">
        <img alt="MyDealz App Redesign - Startseite mit Deal-Übersicht" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg1249} />
      </div>
      {/* Mittleres iPhone Mockup - Suchseite */}
      <div className="absolute h-[93.2%] left-[35.1%] top-[3.4%] w-[29.8%]" data-name="IMG_1250">
        <img alt="MyDealz App Redesign - Suchseite mit Filtern" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg1250} />
      </div>
      {/* Rechtes iPhone Mockup - Detailseite */}
      <div className="absolute h-[93.2%] left-[67.6%] top-[3.4%] w-[29.8%]" data-name="IMG_1252">
        <img alt="MyDealz App Redesign - Deal-Detailseite" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg1252} />
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