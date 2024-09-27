import {
  Background,
  Fill,
  Motion,
  Sequence,
  Stagger,
  Text,
  useCurrentFrame,
  useVideoProps,
} from 'remotion';
import { motionValue } from 'framer-motion';

const HamiltonTimeline: React.FC = () => {
  const { width, height } = useVideoProps();
  const frame = useCurrentFrame();

  return (
    <Background color="#f0f0f0">
      <Sequence durationInFrames={1800}>
        {/* Introduction */}
        <Stagger durationInFrames={120}>
          <Text
            text="Alexander Hamilton"
            fontSize={100}
            fontWeight="bold"
            color="#333"
            x={width / 2}
            y={height / 3}
            textAlign="center"
            durationInFrames={120}
          />
          <Text
            text="A Founding Father, A Revolutionary, An Icon"
            fontSize={40}
            color="#555"
            x={width / 2}
            y={height / 2}
            textAlign="center"
            durationInFrames={120}
          />
        </Stagger>
        {/* Early Life */}
        <Motion durationInFrames={360} easing="easeInOut" delayInFrames={120}>
          <Text
            text="Born in Charlestown, Nevis in 1755"
            fontSize={30}
            color="#333"
            x={width / 2}
            y={height / 2}
            textAlign="center"
            durationInFrames={120}
          />
          <Text
            text="He displayed exceptional talent and ambition from a young age."
            fontSize={30}
            color="#555"
            x={width / 2}
            y={height / 2 + 50}
            textAlign="center"
            durationInFrames={120}
          />
        </Motion>
        {/* Revolutionary War */}
        <Motion durationInFrames={360} easing="easeInOut" delayInFrames={480}>
          <Text
            text="He joined the Continental Army during the Revolutionary War"
            fontSize={30}
            color="#333"
            x={width / 2}
            y={height / 2}
            textAlign="center"
            durationInFrames={120}
          />
          <Text
            text="Serving as an aide to General George Washington."
            fontSize={30}
            color="#555"
            x={width / 2}
            y={height / 2 + 50}
            textAlign="center"
            durationInFrames={120}
          />
        </Motion>
        {/* Political Career */}
        <Motion durationInFrames={360} easing="easeInOut" delayInFrames={840}>
          <Text
            text="After the war, he became a prominent figure in American politics."
            fontSize={30}
            color="#333"
            x={width / 2}
            y={height / 2}
            textAlign="center"
            durationInFrames={120}
          />
          <Text
            text="He served as the first Secretary of the Treasury, where he laid the foundation for the American financial system."
            fontSize={30}
            color="#555"
            x={width / 2}
            y={height / 2 + 50}
            textAlign="center"
            durationInFrames={120}
          />
        </Motion>
        {/* Legacy */}
        <Motion durationInFrames={360} easing="easeInOut" delayInFrames={1200}>
          <Text
            text="Hamilton's legacy remains significant today."
            fontSize={30}
            color="#333"
            x={width / 2}
            y={height / 2}
            textAlign="center"
            durationInFrames={120}
          />
          <Text
            text="He is remembered for his contributions to the nation's founding and his unwavering commitment to a strong central government."
            fontSize={30}
            color="#555"
            x={width / 2}
            y={height / 2 + 50}
            textAlign="center"
            durationInFrames={120}
          />
        </Motion>
        {/* End */}
        <Fill color="#000" durationInFrames={60} delayInFrames={1560} />
      </Sequence>
    </Background>
  );
};

export default HamiltonTimeline;
