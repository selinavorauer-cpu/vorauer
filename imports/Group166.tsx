import img819C3Ec6382641608A5B02E6Ce6Efaf8 from "figma:asset/1e717c9278b464b0b7ae59058984fa401f3cd651.png";
import imgE670Ff4CBdef4Cf2906AA1139777F3Eb from "figma:asset/3b998e3c4bd43a5d0f8589453b12af7008dce2d2.png";

function Recherche() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[49px] top-[71px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "1219", "--transform-inner-height": "914" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[914px] relative w-[1219px]" data-name="819c3ec6-3826-4160-8a5b-02e6ce6efaf8">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img819C3Ec6382641608A5B02E6Ce6Efaf8} />
          </div>
        </div>
      </div>
      <div className="absolute h-[1219px] left-[1053px] top-[71px] w-[914px]" data-name="e670ff4c-bdef-4cf2-906a-a1139777f3eb">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgE670Ff4CBdef4Cf2906AA1139777F3Eb} />
      </div>
    </div>
  );
}

export function KonzeptentwicklungPosturaImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="Recherche">
      {/* Linkes Wireframe-Sketch - gedreht um 90 Grad */}
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[2.4%] top-[5.1%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "1219", "--transform-inner-height": "914" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[914px] relative w-[1219px]" data-name="819c3ec6-3826-4160-8a5b-02e6ce6efaf8">
            <img alt="Handgezeichnete Wireframe-Sketches der Postura App Konzeption - linke Seite" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img819C3Ec6382641608A5B02E6Ce6Efaf8} />
          </div>
        </div>
      </div>
      {/* Rechtes Wireframe-Sketch */}
      <div className="absolute h-[87.7%] left-[52.4%] top-[5.1%] w-[45.5%]" data-name="e670ff4c-bdef-4cf2-906a-a1139777f3eb">
        <img alt="Handgezeichnete Wireframe-Sketches der Postura App Konzeption - rechte Seite" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgE670Ff4CBdef4Cf2906AA1139777F3Eb} />
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