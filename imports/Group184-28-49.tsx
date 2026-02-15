import imgDetail from "figma:asset/a01c990c52ad178f1f4856487a0f238202576853.png";
import imgSuche from "figma:asset/b65a9c4cf084e6cef2c04140adacd79e28f7de49.png";
import imgMyDealzStart1 from "figma:asset/0f0ecfa1ff8bc623138bdadfac3788c2b6ff2ba8.png";

export function MyDealzHeroImage() {
  return (
    <div className="relative bg-[#587eb2] w-[65%] aspect-[2010/1390] max-w-full mx-auto" style={{ transform: 'scale(1.0)' }} data-name="MyDealz Hero">
      {/* Linkes Bild - Detail Screen */}
      <div className="absolute h-[96.5%] left-[1.2%] top-[8.6%] w-[46.0%] p-[0px] my-[0px] m-[0px]" data-name="Detail">
        <img alt="MyDealz Redesign - Detail Screen mit Deal Information und Zum Deal Button" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDetail} />
      </div>
      {/* Rechtes Bild - Suche Screen */}
      <div className="absolute h-[97.8%] left-[51.4%] top-[7.3%] w-[47.4%]" data-name="Suche">
        <img alt="MyDealz Redesign - Suche Screen mit Kategorien" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSuche} />
      </div>
      {/* Mittleres Bild - Start Screen (im Vordergrund) */}
      <div className="absolute h-[109.0%] left-[28.3%] top-[-3.9%] w-[46.2%]" data-name="MyDealz_Start 1">
        <img alt="MyDealz Redesign - Start Screen mit Deals und Navigation" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMyDealzStart1} />
      </div>
    </div>
  );
}

function Recherche() {
  return (
    <div className="absolute bg-[#587eb2] h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[1342px] left-[25px] top-[119px] w-[924px]" data-name="Detail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDetail} />
      </div>
      <div className="absolute h-[1360px] left-[1033px] top-[101px] w-[952px]" data-name="Suche">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSuche} />
      </div>
      <div className="absolute h-[1515px] left-[569px] top-[-54px] w-[928px]" data-name="MyDealz_Start 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMyDealzStart1} />
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
