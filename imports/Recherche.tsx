import imgImg2293 from "figma:asset/f03cce17244cb221b283a35b73e27924dcc50c6a.png";
import imgImg2292 from "figma:asset/56d88a2dd8160729645ca405e2256f08c310867c.png";
import imgImage13 from "figma:asset/2cb7d4baf2785437b986f3cc53ee91bce741a5eb.png";

// Export images for use in other components
export { imgImg2293, imgImg2292, imgImage13 };

export default function Recherche() {
  return (
    <div className="bg-white relative size-full" data-name="Recherche">
      <div className="absolute h-[1206.45px] left-[699px] top-[92px] w-[557.481px]" data-name="IMG_2293">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg2293} />
        </div>
      </div>
      <div className="absolute h-[1206.45px] left-[104px] top-[92px] w-[557.481px]" data-name="IMG_2292">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImg2292} />
        </div>
      </div>
      <div className="absolute h-[1206px] left-[1349px] top-[92px] w-[557px]" data-name="image 13">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage13} />
        </div>
      </div>
    </div>
  );
}