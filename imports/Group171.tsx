import imgDetail from "figma:asset/a01c990c52ad178f1f4856487a0f238202576853.png";
import imgFavs from "figma:asset/c505b2974acb713e685e956cfeb32be6e7548221.png";
import imgProfil from "figma:asset/aead9aeba361167f42be40b38c9b5d5684b5746e.png";

function Recherche() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[1195px] left-[-119px] top-[93px] w-[823px]" data-name="Detail">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDetail} />
      </div>
      <div className="absolute h-[1199px] left-[611px] top-[89px] w-[785px]" data-name="Favs">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFavs} />
      </div>
      <div className="absolute h-[1209px] left-[1213px] top-[90px] w-[822px]" data-name="Profil">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProfil} />
      </div>
    </div>
  );
}

export function ErgebnisMyDealzImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="Ergebnis MyDealz">
      {/* Detail Screen */}
      <div className="absolute h-[86.0%] left-[-5.9%] top-[6.7%] w-[40.9%]" data-name="Detail">
        <img alt="MyDealz Ergebnis - Detail Screen" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDetail} />
      </div>
      {/* Favoriten Screen */}
      <div className="absolute h-[86.3%] left-[30.4%] top-[6.4%] w-[39.1%]" data-name="Favs">
        <img alt="MyDealz Ergebnis - Favoriten Screen" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFavs} />
      </div>
      {/* Profil Screen */}
      <div className="absolute h-[87.0%] left-[60.3%] top-[6.5%] w-[40.9%]" data-name="Profil">
        <img alt="MyDealz Ergebnis - Profil Screen" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProfil} />
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