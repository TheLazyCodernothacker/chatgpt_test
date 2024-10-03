import { useCurrentFrame, interpolate } from "remotion";
import { spring } from "remotion";

const SkibidiStory: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30, 60], [0, 1, 1]);
  const titleScale = spring({ frame, from: 0.8, to: 1, damping: 10 });

  const toiletManIntroOpacity = interpolate(frame, [60, 90, 180], [0, 1, 1]);

  const cameraManIntroOpacity = interpolate(frame, [180, 210, 300], [0, 1, 1]);

  return (
    <div className="bg-gradient-to-b from-sky-500 to-blue-600 w-screen h-screen relative overflow-hidden">
      {/* Title sequence */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-7xl"
        style={{ opacity: titleOpacity, transform: `scale(${titleScale})` }}
      >
        Skibidi Toilet: A Deep Dive
      </div>

      {/* Toilet Man Introduction */}
      <div
        className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-5xl"
        style={{ opacity: toiletManIntroOpacity }}
      >
        It all started with a simple man... in a toilet.
      </div>

      {/* Camera Man Introduction */}
      <div
        className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-5xl"
        style={{ opacity: cameraManIntroOpacity }}
      >
        But little did they know, they were being watched...
      </div>
    </div>
  );
};

export default SkibidiStory;
