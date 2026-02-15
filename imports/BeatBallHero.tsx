import beatBallImage from "figma:asset/f1d3d835d29d8ad98d8023a5badfdd9fd3b582cc.png";

export function BeatBallHeroImage() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-white" data-name="Beat Ball Hero">
      <img 
        alt="Beat Ball - Interaktives Spielkonzept mit Shake, Squeeze und Bounce Gesten" 
        className="w-full h-full object-contain pointer-events-none" 
        src={beatBallImage} 
      />
    </div>
  );
}

export default BeatBallHeroImage;
