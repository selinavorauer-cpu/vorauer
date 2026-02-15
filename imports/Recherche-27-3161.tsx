import imgGroup1701 from "figma:asset/bc62669d21d0c35bebac452fb0497cab133a48a2.png";

export default function Recherche() {
  return (
    <div className="bg-white relative size-full" data-name="Recherche">
      <div className="absolute h-[792px] left-[66px] top-[299px] w-[1162px]" data-name="Group 170 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup1701} />
      </div>
      <ul className="absolute block font-['SF_Pro:Regular',_sans-serif] font-normal leading-[0] left-[1342px] text-[13px] text-black top-[291px] w-[1409px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="ms-[19.5px]">
          <span className="leading-[normal]">Farben, Icons, Typografie</span>
        </li>
      </ul>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[50px] leading-[normal] left-[1368px] not-italic text-[13px] text-black top-[337px] w-[487px]">SF Pro</p>
      <div className="absolute bg-[#587eb2] h-[274px] left-[1361px] top-[398px] w-[233px]" />
      <div className="absolute bg-black h-[274px] left-[1361px] top-[753px] w-[233px]" />
      <div className="absolute bg-[#717171] h-[274px] left-[1615px] top-[753px] w-[233px]" />
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal h-[43px] leading-[normal] left-[1361px] text-[13px] text-black top-[684px] w-[233px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Main colour `}</p>
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal leading-[normal] left-[1361px] text-[13px] text-black top-[1039px] w-[233px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Main Text Colour
      </p>
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal leading-[normal] left-[1615px] text-[13px] text-black top-[1039px] w-[233px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Secondary Text Colour
      </p>
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal h-[43px] leading-[normal] left-[1622px] text-[13px] text-black top-[684px] w-[246px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Secondary colour `}</p>
      <div className="absolute bg-[#222e42] h-[274px] left-[1622px] top-[397px] w-[233px]" />
    </div>
  );
}