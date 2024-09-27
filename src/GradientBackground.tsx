import React from 'react';
import { AbsoluteFill } from 'remotion';

export const GradientBackground: React.FC<{ colors: string[] }> = ({ colors }) => {
  const gradient = `linear-gradient(180deg, ${colors.join(', ')} )`;
  return (
    <AbsoluteFill
      style={{
        background: gradient,
      }}
    />
  );
};
