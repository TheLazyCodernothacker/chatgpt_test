import React from 'react';
import { interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion';
import { z } from 'zod';
import { GradientBackground } from './GradientBackground';
import { loadFont } from '@remotion/google-fonts/Roboto';

const { fontFamily } = loadFont();

export const partSchema = z.object({
  titleText: z.string(),
  bodyText: z.string(),
  titleColor: z.string(),
  backgroundGradient: z.array(z.string()),
  imageSrc: z.string().optional(),
});

type PartProps = z.infer<typeof partSchema>;

export const Part: React.FC<PartProps> = ({
  titleText,
  bodyText,
  titleColor,
  backgroundGradient,
  imageSrc,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Entrance animation using spring
  const titleSpring = spring({
    frame,
    fps,
    from: -50,
    to: 0,
    damping: 10,
    stiffness: 100,
  });

  const bodySpring = spring({
    frame: frame - 15,
    fps,
    from: 50,
    to: 0,
    damping: 10,
    stiffness: 100,
  });

  // Opacity fade-in
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <GradientBackground colors={backgroundGradient} />
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          style={{
            width: '60%',
            maxWidth: '500px',
            marginBottom: '30px',
            opacity,
            transform: `translateY(${titleSpring}px)`,
            zIndex: 1,
          }}
        />
      )}
      <h1
        style={{
          color: titleColor,
          fontSize: '56px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '10px',
          opacity,
          transform: `translateY(${titleSpring}px)`,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          zIndex: 1,
          padding: '0 20px',
        }}
      >
        {titleText}
      </h1>
      <p
        style={{
          color: '#ffffff',
          fontSize: '28px',
          textAlign: 'center',
          maxWidth: '80%',
          opacity,
          transform: `translateY(${bodySpring}px)`,
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          zIndex: 1,
          padding: '0 20px',
        }}
      >
        {bodyText}
      </p>
    </div>
  );
};
