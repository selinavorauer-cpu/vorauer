import imgPosturekorrektorMitLedUndSignalzeichen11 from "figma:asset/be90d3246deea232bda1f5a02d99c8d07f2a987e.png";

function Ergebnis() {
  return (
    <div className="absolute bg-black h-[1390px] left-0 overflow-clip top-0 w-[2535.58px]" data-name="Ergebnis">
      <div className="absolute h-[1837px] left-[693px] top-[-224px] w-[1150px]" data-name="Posturekorrektor mit LED und Signalzeichen 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPosturekorrektorMitLedUndSignalzeichen11} />
      </div>
    </div>
  );
}

export function PosturaHeroImage() {
  return (
    <div className="relative bg-black w-full aspect-[2535.58/1390] max-w-full overflow-hidden" data-name="Ergebnis">
      <div className="absolute h-[132.2%] left-[27.3%] top-[-16.1%] w-[45.4%]" data-name="Posturekorrektor mit LED und Signalzeichen 1 1">
        <img alt="Postura Haltungskorrektur-Sensor mit LED Feedback" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPosturekorrektorMitLedUndSignalzeichen11} />
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