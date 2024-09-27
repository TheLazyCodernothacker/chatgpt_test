import {  useCurrentFrame,  } from "remotion";
import { Text,  Background,  } from "remotion";
 
const HamiltonVideo = () => {
  const frame = useCurrentFrame();
  return (
    <Background color="#000000">
      <Text
        text="Alexander Hamilton"
        fontFamily="Arial"
        fontSize={80}
        fontWeight="bold"
        color="#FFFFFF"
        textAlign="center"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      {frame >= 10 && frame < 20 && (
        <Text
          text="Born in Charlestown, Nevis, in 1755"
          fontFamily="Arial"
          fontSize={40}
          color="#FFFFFF"
          textAlign="center"
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
      {frame >= 20 && frame < 30 && (
        <Text
          text="Orphaned at a young age, he immigrated to America"
          fontFamily="Arial"
          fontSize={40}
          color="#FFFFFF"
          textAlign="center"
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
      {frame >= 30 && frame < 40 && (
        <Text
          text="He served in the Revolutionary War"
          fontFamily="Arial"
          fontSize={40}
          color="#FFFFFF"
          textAlign="center"
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
      {frame >= 40 && frame < 50 && (
        <Text
          text="Went on to become the first Secretary of the Treasury"
          fontFamily="Arial"
          fontSize={40}
          color="#FFFFFF"
          textAlign="center"
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
      {frame >= 50 && (
        <Text
          text="Hamilton's legacy continues to inspire today"
          fontFamily="Arial"
          fontSize={40}
          color="#FFFFFF"
          textAlign="center"
          style={{
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
    </Background>
  );
};
 
export default HamiltonVideo;