import imgHintergrundVonPosturekorrektorMitLedUndSignalzeichen1Entfernt1 from "figma:asset/6a2f35980de69d94c102bdc2e00ea9a3e5b3bfa5.png";
import imgPosturaStart1 from "figma:asset/c3db53bd14168335d91ce9ba09632e9bb30da002.png";
import imgLive1 from "figma:asset/358a445672b5a820e9f5cb303e0764dd5e1b7de5.png";
import imgTraining1 from "figma:asset/8b9ea0f0ef5f818a2ec2821b33395136d7dec531.png";

function Ergebnis() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2535.58px]" data-name="Ergebnis">
      <div className="absolute h-[1220px] left-[590px] top-[28px] w-[764px]" data-name="Hintergrund von „Posturekorrektor mit LED und Signalzeichen 1“ entfernt 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHintergrundVonPosturekorrektorMitLedUndSignalzeichen1Entfernt1} />
      </div>
      <div className="absolute h-[1413px] left-0 top-[-23px] w-[904px]" data-name="Postura_Start 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPosturaStart1} />
      </div>
      <div className="absolute h-[1164px] left-[1156px] top-[56px] w-[773px]" data-name="Live 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLive1} />
      </div>
      <div className="absolute h-[1198px] left-[1603px] top-[145px] w-[809px]" data-name="Training 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTraining1} />
      </div>
    </div>
  );
}

export function ErgebnisImages() {
  return (
    <div className="relative bg-white w-full aspect-[2536/1390] max-w-full overflow-hidden" data-name="Ergebnis">
      {/* Postura Hardware - Center */}
      <div className="absolute h-[87.8%] left-[23.3%] top-[2.0%] w-[30.1%]" data-name="Posturekorrektor">
        <img alt="Postura Hardware Sensor" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHintergrundVonPosturekorrektorMitLedUndSignalzeichen1Entfernt1} />
      </div>
      {/* Postura Start Screen - Left */}
      <div className="absolute h-[101.7%] left-0 top-[-1.7%] w-[35.7%]" data-name="Postura Start">
        <img alt="Postura Start Screen" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPosturaStart1} />
      </div>
      {/* Live Screen - Center Right */}
      <div className="absolute h-[83.7%] left-[45.6%] top-[4.0%] w-[30.5%]" data-name="Live Haltungsanalyse">
        <img alt="Live Haltungsanalyse Screen" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLive1} />
      </div>
      {/* Training Screen - Right */}
      <div className="absolute h-[86.2%] left-[63.2%] top-[10.4%] w-[31.9%]" data-name="Training">
        <img alt="Training Screen" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTraining1} />
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