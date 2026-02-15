import imgGroup1701 from "figma:asset/bc62669d21d0c35bebac452fb0497cab133a48a2.png";

function Recherche() {
  return (
    <div className="absolute bg-white h-[1390px] left-0 overflow-clip top-0 w-[2010px]" data-name="Recherche">
      <div className="absolute h-[792px] left-[66px] top-[299px] w-[1162px]" data-name="Group 170 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup1701} />
      </div>
      <ul className="absolute block font-['SF_Pro:Regular',_sans-serif] font-normal h-[50px] leading-[0] left-[1306px] text-[36px] text-black top-[275px] w-[1409px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="ms-[54px]">
          <span className="leading-[normal]">Farben, Icons, Typografie</span>
        </li>
      </ul>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[50px] leading-[normal] left-[1361px] not-italic text-[36px] text-black top-[336px] w-[487px]">SF Pro</p>
      <div className="absolute bg-[#587eb2] h-[274px] left-[1361px] top-[398px] w-[233px]" />
      <div className="absolute bg-black h-[274px] left-[1361px] top-[753px] w-[233px]" />
      <div className="absolute bg-[#717171] h-[274px] left-[1615px] top-[753px] w-[233px]" />
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal h-[43px] leading-[normal] left-[1361px] text-[32px] text-black top-[684px] w-[233px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Main colour `}</p>
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal leading-[normal] left-[1361px] text-[32px] text-black top-[1039px] w-[233px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Main Text Colour
      </p>
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal leading-[normal] left-[1615px] text-[32px] text-black top-[1039px] w-[233px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Secondary Text Colour
      </p>
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal h-[43px] leading-[normal] left-[1615px] text-[32px] text-black top-[684px] w-[246px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Secondary colour `}</p>
      <div className="absolute bg-[#222e42] h-[274px] left-[1622px] top-[397px] w-[233px]" />
    </div>
  );
}

export function DesignMyDealzImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="Design MyDealz">
      {/* Navigation Icons Übersicht */}
      <div className="absolute h-[57.0%] left-[3.3%] top-[21.5%] w-[57.8%]" data-name="Group 170 1">
        <img alt="MyDealz Design System - Navigation Icons und Zustände" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup1701} />
      </div>
      {/* Überschrift */}
      <ul className="absolute block font-['SF_Pro:Regular',_sans-serif] font-normal leading-[0] left-[66.8%] text-[0.65vw] text-black top-[20.9%] w-[70.1%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="ms-[0.97%]">
          <span className="leading-[normal]">Farben, Icons, Typografie</span>
        </li>
      </ul>
      {/* SF Pro Text */}
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[3.6%] leading-[normal] left-[68.1%] not-italic text-[0.65vw] text-black top-[24.2%] w-[24.2%]">SF Pro</p>
      
      {/* Main Colour Box - Blau */}
      <div className="absolute bg-[#587eb2] h-[19.7%] left-[67.7%] top-[28.6%] w-[11.6%]" />
      {/* Secondary Colour Box - Dunkelblau */}
      <div className="absolute bg-[#222e42] h-[19.7%] left-[80.7%] top-[28.6%] w-[11.6%]" />
      
      {/* Main colour Label */}
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal h-[3.1%] leading-[normal] left-[67.7%] text-[0.65vw] text-black top-[49.2%] w-[11.6%]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Main colour `}</p>
      {/* Secondary colour Label */}
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal h-[3.1%] leading-[normal] left-[80.7%] text-[0.65vw] text-black top-[49.2%] w-[12.2%]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Secondary colour `}</p>
      
      {/* Main Text Colour Box - Schwarz */}
      <div className="absolute bg-black h-[19.7%] left-[67.7%] top-[54.2%] w-[11.6%]" />
      {/* Secondary Text Colour Box - Grau */}
      <div className="absolute bg-[#717171] h-[19.7%] left-[80.4%] top-[54.2%] w-[11.6%]" />
      
      {/* Main Text Colour Label */}
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal leading-[normal] left-[67.7%] text-[0.65vw] text-black top-[74.7%] w-[11.6%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Main Text Colour
      </p>
      {/* Secondary Text Colour Label */}
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal leading-[normal] left-[80.4%] text-[0.65vw] text-black top-[74.7%] w-[11.6%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Secondary Text Colour
      </p>
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