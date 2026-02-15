import imgPhoto202502081637222 from "figma:asset/e439480360fc921af361fd4d417f1d92689027e3.png";
import imgPhoto20250208163722 from "figma:asset/525597ff4089c9315c5d663f69b99399d99f6f04.png";
import imgPhoto20250208163723 from "figma:asset/9fd39e4fb9c93108672f2a2dc60541e5384c2f35.png";
import imgPhoto20241210085615 from "figma:asset/ef2871f37452f5454be3a566de5a20d1c48a6dba.png";

function Recherche() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[501px] left-[61px] top-[788px] w-[595px]" data-name="PHOTO-2025-02-08-16-37-22 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[158.35%] left-0 max-w-none top-[-34.36%] w-full" src={imgPhoto202502081637222} />
        </div>
      </div>
      <div className="absolute h-[1188px] left-[695px] top-[101px] w-[574px]" data-name="PHOTO-2025-02-08-16-37-22">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.07%] left-[-25.38%] max-w-none top-[-0.03%] w-[155.31%]" src={imgPhoto20250208163722} />
        </div>
      </div>
      <div className="absolute h-[573px] left-[61px] top-[101px] w-[594px]" data-name="PHOTO-2025-02-08-16-37-23">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.22%] left-0 max-w-none top-0 w-full" src={imgPhoto20250208163723} />
        </div>
      </div>
      <div className="absolute h-[1188px] left-[1308px] top-[101px] w-[667px]" data-name="PHOTO-2024-12-10-08-56-15">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[152.84%] left-[-16%] max-w-none top-[-40.93%] w-[153.21%]" src={imgPhoto20241210085615} />
        </div>
      </div>
    </div>
  );
}

export function BeatBallResearchImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="Beat Ball Research">
      {/* Linkes unteres Bild - Bunte Bälle auf Tisch */}
      <div className="absolute h-[36.0%] left-[3.0%] top-[56.7%] w-[29.6%]" data-name="Colored Balls Collection">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Beat Ball Research - Verschiedene Ball-Prototypen und Texturen" className="absolute h-[158.35%] left-0 max-w-none top-[-34.36%] w-full" src={imgPhoto202502081637222} />
        </div>
      </div>
      {/* Mittleres Bild - Person testet Gerät */}
      <div className="absolute h-[85.5%] left-[34.6%] top-[7.3%] w-[28.6%]" data-name="User Testing Session">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Beat Ball Research - Nutzertest mit interaktivem Ball-Controller" className="absolute h-[100.07%] left-[-25.38%] max-w-none top-[-0.03%] w-[155.31%]" src={imgPhoto20250208163722} />
        </div>
      </div>
      {/* Linkes oberes Bild - Hand mit Ball */}
      <div className="absolute h-[41.2%] left-[3.0%] top-[7.3%] w-[29.6%]" data-name="Ball Interaction">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Beat Ball Research - Squeeze-Geste Prototyp mit blauem Ball" className="absolute h-[138.22%] left-0 max-w-none top-0 w-full" src={imgPhoto20250208163723} />
        </div>
      </div>
      {/* Rechtes Bild - Hand mit violettem Ball */}
      <div className="absolute h-[85.5%] left-[65.1%] top-[7.3%] w-[33.2%]" data-name="Purple Ball Prototype">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Beat Ball Research - Finaler Ball-Prototyp mit taktiler Oberfläche" className="absolute h-[152.84%] left-[-16%] max-w-none top-[-40.93%] w-[153.21%]" src={imgPhoto20241210085615} />
        </div>
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