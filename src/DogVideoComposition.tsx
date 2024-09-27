import React from 'react';
import { Video, Img, AbsoluteFill, Text } from 'remotion';

export const DogVideoComposition: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'lightblue' }}>
      <Video src="path/to/dog-video.mp4" />
      <Img src="dog-image.jpg" style={{ position: 'absolute', bottom: '20px', left: '20px' }} />
      <Text
        style={{ fontSize: 60, color: 'white', position: 'absolute', top: '20px', left: '20px' }}
      >
        Dogs are great companions!
      </Text>
    </AbsoluteFill>
  );
};
