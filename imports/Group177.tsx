import imgPhoto20250203215421 from "figma:asset/d559dcece673571f31dd8910160c56d3a2e6a255.png";
import imgPhoto20250203215423 from "figma:asset/ace99c2f547df6dec2139f2302d3124df91c2c61.png";
import imgPhoto20250203215422 from "figma:asset/55d9aa95ae20be9a96fc383bb103d2b49868f480.png";

export function BeatBallKonzeptentwicklungImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="Beat Ball Konzeptentwicklung">
      {/* Mittleres Bild - Ball verbunden mit Laptop für Testing */}
      <div className="absolute h-[56.1%] left-[36.4%] top-[21.8%] w-[29.1%]" data-name="Development Testing">
        <img alt="Beat Ball Konzeptentwicklung - Prototyp verbunden mit Laptop für Testing" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPhoto20250203215421} />
      </div>
      {/* Linkes Bild - Pink Ball Prototyp mit internen Komponenten */}
      <div className="absolute h-[58.1%] left-[3.4%] top-[20.9%] w-[30.4%]" data-name="Ball Prototype Internal">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Beat Ball Konzeptentwicklung - Pink Ball Prototyp mit Squeeze-Sensor" className="absolute h-[131.23%] left-[-11.31%] max-w-none top-[-31.23%] w-[129.99%]" src={imgPhoto20250203215423} />
        </div>
      </div>
      {/* Rechtes Bild - Mehrere Ball-Prototypen mit Elektronik */}
      <div className="absolute h-[56.1%] left-[67.5%] top-[21.8%] w-[29.1%]" data-name="Multiple Prototypes">
        <img alt="Beat Ball Konzeptentwicklung - Verschiedene Ball-Prototypen mit Elektronik-Setup" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPhoto20250203215422} />
      </div>
    </div>
  );
}

function Recherche() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[780px] left-[732px] top-[303px] w-[585px]" data-name="PHOTO-2025-02-03-21-54-21">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPhoto20250203215421} />
      </div>
      <div className="absolute h-[807px] left-[68px] top-[291px] w-[611px]" data-name="PHOTO-2025-02-03-21-54-23">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[131.23%] left-[-11.31%] max-w-none top-[-31.23%] w-[129.99%]" src={imgPhoto20250203215423} />
        </div>
      </div>
      <div className="absolute h-[780px] left-[1357px] top-[303px] w-[585px]" data-name="PHOTO-2025-02-03-21-54-22">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPhoto20250203215422} />
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