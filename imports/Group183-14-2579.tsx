import imgPosturekorrektorMitLedUndSignalzeichen11 from "figma:asset/be90d3246deea232bda1f5a02d99c8d07f2a987e.png";

function Ergebnis() {
  return (
    <div className="absolute bg-black h-[1390px] left-0 overflow-clip top-0 w-[2535.58px]" data-name="Ergebnis">
      <div className="absolute h-[1287px] left-[865px] top-[51px] w-[806px]" data-name="Posturekorrektor mit LED und Signalzeichen 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPosturekorrektorMitLedUndSignalzeichen11} />
      </div>
    </div>
  );
}

export function PosturaHeroImage() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" data-name="Ergebnis">
      <div className="relative w-[40%] aspect-[806/1287]" data-name="Posturekorrektor mit LED und Signalzeichen 1 1">
        <img alt="Postura Haltungskorrektur-Sensor mit LED Feedback" className="absolute inset-0 object-contain pointer-events-none size-full" src={imgPosturekorrektorMitLedUndSignalzeichen11} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Ergebnis />
    </div>
  );
}