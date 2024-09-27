import { 
  Background,
  Fill,
  Frame,
  Group,
  Image,
  Motion,
  P,
  Text,
  useCurrentFrame,
  useVideoProps,
  useTimeline,
  Stagger,
  Scale,
  Opacity,
  Blur,
  Rotate,
} from 'remotion';
import { useTheme } from 'next-themes';

const MainComposition: React.FC = () => {
  const { width, height } = useVideoProps();
  const currentFrame = useCurrentFrame();
  const theme = useTheme();

  const textProps = {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 50,
    color: theme.colors.gray[100],
    textShadow: '0px 0px 5px black',
  };

  return (
    <Group>
      <Background 
        color={theme.colors.gray[900]}
      />
      <Text
        {...textProps}
        x={width / 2}
        y={height / 2}
        align="center"
        style={{
          transform: 'translateY(-50%)',
        }}
      >
        Alexander Hamilton
      </Text>
      <Motion
        durationInFrames={300}
        timingFunction="easeInOut"
        animate={{
          opacity: currentFrame < 300 ? 0 : 1,
          y: currentFrame < 300 ? height : height / 2,
        }}
      >
        <Group>
          <Text
            {...textProps}
            x={width / 2}
            y={height / 2}
            align="center"
            style={{
              transform: 'translateY(-50%)',
            }}
          >
            An American Founding Father
          </Text>
          <Text
            {...textProps}
            x={width / 2}
            y={height / 2 + 60}
            align="center"
            style={{
              transform: 'translateY(-50%)',
            }}
          >
            Born in Charlestown, Nevis
          </Text>
        </Group>
      </Motion>
      <Motion
        durationInFrames={300}
        timingFunction="easeInOut"
        animate={{
          opacity: currentFrame < 600 ? 0 : 1,
          y: currentFrame < 600 ? height : height / 2,
        }}
      >
        <Group>
          <Text
            {...textProps}
            x={width / 2}
            y={height / 2 + 120}
            align="center"
            style={{
              transform: 'translateY(-50%)',
            }}
          >
            Known for his work in the American Revolution
          </Text>
          <Text
            {...textProps}
            x={width / 2}
            y={height / 2 + 180}
            align="center"
            style={{
              transform: 'translateY(-50%)',
            }}
          >
            Served as the first Secretary of the Treasury
          </Text>
        </Group>
      </Motion>
      <Motion
        durationInFrames={300}
        timingFunction="easeInOut"
        animate={{
          opacity: currentFrame < 900 ? 0 : 1,
          y: currentFrame < 900 ? height : height / 2,
        }}
      >
        <Group>
          <Text
            {...textProps}
            x={width / 2}
            y={height / 2 + 240}
            align="center"
            style={{
              transform: 'translateY(-50%)',
            }}
          >
            A prolific writer and advocate for a strong central government
          </Text>
          <Text
            {...textProps}
            x={width / 2}
            y={height / 2 + 300}
            align="center"
            style={{
              transform: 'translateY(-50%)',
            }}
          >
            His legacy continues to influence American politics
          </Text>
        </Group>
      </Motion>
    </Group>
  );
};

export default MainComposition;

