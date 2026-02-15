import imgImg2293 from "figma:asset/f03cce17244cb221b283a35b73e27924dcc50c6a.png";
import imgImg2292 from "figma:asset/56d88a2dd8160729645ca405e2256f08c310867c.png";
import imgImage13 from "figma:asset/2cb7d4baf2785437b986f3cc53ee91bce741a5eb.png";

export function RechercheImages() {
  return (
    <div className="relative bg-white w-full aspect-[2010/1390] max-w-full overflow-hidden" data-name="Recherche">
      <div className="absolute h-[86.8%] left-[34.8%] top-[6.6%] w-[27.7%]" data-name="IMG_2293">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Postura App Screenshot 2" className="absolute left-0 max-w-none size-full top-0" src={imgImg2293} />
        </div>
      </div>
      <div className="absolute h-[86.8%] left-[5.2%] top-[6.6%] w-[27.7%]" data-name="IMG_2292">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Postura App Screenshot 1" className="absolute left-0 max-w-none size-full top-0" src={imgImg2292} />
        </div>
      </div>
      <div className="absolute h-[86.8%] left-[67.1%] top-[6.6%] w-[27.7%]" data-name="image 13">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="Postura App Screenshot 3" className="absolute left-0 max-w-none size-full top-0" src={imgImage13} />
        </div>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <RechercheImages />
    </div>
  );
}
