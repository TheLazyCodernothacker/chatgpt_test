import {
  Background,
  Fill,
  Image,
  Motion,
  Text,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import hamiltonImage from './hamilton.jpg'; 

export const HamiltonIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const seconds = frame / fps;

  return (
    <Background color="#F2F2F2">
      <Fill color="#4A90E2" />
      <Image
        src={hamiltonImage}
        width={800}
        height={600}
        style={{
          position: 'absolute',
          top: 150,
          left: 500,
          opacity: seconds <= 2 ? seconds : 1,
        }}
      />
      <Text
        text="Alexander Hamilton"
        fontSize={60}
        fontFamily="sans-serif"
        fontWeight="bold"
        color="#FFFFFF"
        style={{
          position: 'absolute',
          top: 200,
          left: 500,
          opacity: seconds <= 2 ? seconds : 1,
          transform: seconds <= 2 ? `translateX(-${seconds * 100}px)` : 'none',
        }}
      />
      <Text
        text="An American Founding Father"
        fontSize={30}
        fontFamily="sans-serif"
        fontWeight="light"
        color="#FFFFFF"
        style={{
          position: 'absolute',
          top: 300,
          left: 500,
          opacity: seconds <= 2 ? seconds : 1,
          transform: seconds <= 2 ? `translateX(-${seconds * 100}px)` : 'none',
        }}
      />
      <Motion
        animate={{
          opacity: seconds >= 2 && seconds <= 10 ? 1 : 0,
          translateX: seconds >= 2 && seconds <= 10
            ? `${(seconds - 2) * 100}px`
            : 0,
        }}
        style={{
          position: 'absolute',
          top: 400,
          left: 500,
        }}
      >
        <Text
          text="Born in Charlestown, Nevis, in 1755, Hamilton's life was marked by ambition and determination."
          fontSize={20}
          fontFamily="sans-serif"
          fontWeight="light"
          color="#FFFFFF"
          style={{
            maxWidth: 800,
          }}
        />
      </Motion>

      <Motion
        animate={{
          opacity: seconds >= 10 && seconds <= 20 ? 1 : 0,
          translateX: seconds >= 10 && seconds <= 20
            ? `${(seconds - 10) * 100}px`
            : 0,
        }}
        style={{
          position: 'absolute',
          top: 500,
          left: 500,
        }}
      >
        <Text
          text="He rose from humble beginnings to become a key figure in the American Revolution and a leading architect of the United States Constitution."
          fontSize={20}
          fontFamily="sans-serif"
          fontWeight="light"
          color="#FFFFFF"
          style={{
            maxWidth: 800,
          }}
        />
      </Motion>

      <Motion
        animate={{
          opacity: seconds >= 20 && seconds <= 30 ? 1 : 0,
          translateX: seconds >= 20 && seconds <= 30
            ? `${(seconds - 20) * 100}px`
            : 0,
        }}
        style={{
          position: 'absolute',
          top: 600,
          left: 500,
        }}
      >
        <Text
          text="His contributions to the nation's founding are widely recognized, including his role as the first Secretary of the Treasury."
          fontSize={20}
          fontFamily="sans-serif"
          fontWeight="light"
          color="#FFFFFF"
          style={{
            maxWidth: 800,
          }}
        />
      </Motion>

      <Motion
        animate={{
          opacity: seconds >= 30 && seconds <= 40 ? 1 : 0,
          translateX: seconds >= 30 && seconds <= 40
            ? `${(seconds - 30) * 100}px`
            : 0,
        }}
        style={{
          position: 'absolute',
          top: 700,
          left: 500,
        }}
      >
        <Text
          text="Hamilton's legacy continues to inspire and influence generations, solidifying his place as one of America's most significant historical figures."
          fontSize={20}
          fontFamily="sans-serif"
          fontWeight="light"
          color="#FFFFFF"
          style={{
            maxWidth: 800,
          }}
        />
      </Motion>
    </Background>
  );
};
