import { Composition } from "remotion";
import "./tailwind.css";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={1800} // 1 minute at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};