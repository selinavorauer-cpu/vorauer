import imgImg2292 from "figma:asset/56d88a2dd8160729645ca405e2256f08c310867c.png";
import imgBildschirmfoto20250520Um1043291 from "figma:asset/dc9e99e81772b07cb7236edfe97cba5bafbfeb55.png";
import imgBildschirmfoto20250520Um1052451 from "figma:asset/0273a049a08ef417ac04e61a6d0a333df2ca182e.png";

export function PosturaResearchImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390]" data-name="Postura Research">
      <div className="absolute h-[86.8%] left-[70.2%] top-[5.1%] w-[27.7%]" data-name="IMG_2292">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Postura - Sensor Device" className="absolute left-0 max-w-none size-full top-0" src={imgImg2292} />
        </div>
      </div>
      <div className="absolute h-[50.2%] left-[32.5%] top-[24.9%] w-[35%]" data-name="App Screenshot Center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Postura - App Übersicht mit Aktivitäten und Gemütszustand" className="absolute left-0 max-w-none size-full top-0" src={imgBildschirmfoto20250520Um1043291} />
        </div>
      </div>
      <div className="absolute h-[46.6%] left-[1.6%] top-[26.7%] w-[28.7%]" data-name="App Screenshot Left">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Postura - FlexTail Haltungstrainer Made in Germany" className="absolute h-[180.25%] left-[-17.53%] max-w-none top-[-39.97%] w-[197.12%]" src={imgBildschirmfoto20250520Um1052451} />
        </div>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[1206.45px] left-[1412px] top-[71px] w-[557.481px]" data-name="IMG_2292">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg2292} />
        </div>
      </div>
      <div className="absolute h-[698px] left-[653px] top-[346px] w-[704px]" data-name="Bildschirmfoto 2025-05-20 um 10.43.29 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBildschirmfoto20250520Um1043291} />
        </div>
      </div>
      <div className="absolute h-[648px] left-[33px] top-[371px] w-[576px]" data-name="Bildschirmfoto 2025-05-20 um 10.52.45 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[180.25%] left-[-17.53%] max-w-none top-[-39.97%] w-[197.12%]" src={imgBildschirmfoto20250520Um1052451} />
        </div>
      </div>
    </div>
  );
}
