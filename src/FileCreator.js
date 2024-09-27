const {promises: fsp} = require('fs');
const {join} = require('path');

// Logging helper with success and error messages
const logMessage = (message, type = 'success') => {
	const colors = {
		success: '\x1b[32m%s\x1b[0m', // Green for success
		error: '\x1b[31m%s\x1b[0m', // Red for error
	};
	console.log(colors[type], message);
};

// Root component for the full 1-minute video (1920x1080 resolution)
const RootTSX = `
import { Composition } from 'remotion';
import { MainComposition } from './MainComposition';
import './tailwind.css';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="MainVideo"
      component={MainComposition}
      durationInFrames={1800} // 60 seconds (30fps * 60 = 1800 frames)
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
`;

// MainComposition that switches between scenes
const MainCompositionTSX = `
import { useCurrentFrame } from 'remotion';
import { MyComposition } from './Composition';

export const MainComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const section = Math.floor(frame / 300); // Change section every 10 seconds

  const sections = [
    { titleText: 'Introduction to Neural Networks', bodyText: 'Neural networks are a series of algorithms that mimic the operations of a human brain to recognize relationships between vast amounts of data.', logoColor: '#10b981' },
    { titleText: 'Backpropagation', bodyText: 'Backpropagation adjusts network weights based on the error between predictions and actual outcomes.', logoColor: '#f97316' },
    { titleText: 'Training the Network', bodyText: 'Training improves the network by adjusting weights over many iterations.', logoColor: '#e11d48' },
    { titleText: 'Neural Networks in Action', bodyText: 'Neural networks are used in image recognition, language processing, and many other applications.', logoColor: '#8b5cf6' },
  ];

  const currentSection = sections[section] || sections[0];
  return (
    <MyComposition
      titleText={currentSection.titleText}
      bodyText={currentSection.bodyText}
      logoColor={currentSection.logoColor}
      titleColor="#000"
    />
  );
};
`;

// Composition component with Tailwind for professional styling
const CompositionTSX = `
import { interpolate, useCurrentFrame } from 'remotion';
import { z } from 'zod';

export const myCompSchema = z.object({
  titleText: z.string(),
  bodyText: z.string(),
  titleColor: z.string(),
  logoColor: z.string(),
});

export const MyComposition: React.FC<{
  titleText: string;
  bodyText: string;
  titleColor: string;
  logoColor: string;
}> = ({ titleText, bodyText, titleColor, logoColor }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 60], [0, 1]); // Smooth fade-in

  return (
    <div className="flex items-center justify-center h-full" style={{ backgroundColor: logoColor }}>
      <div className="text-center px-8 py-4">
        <h1 className="text-6xl font-bold" style={{ color: titleColor, opacity }}>{titleText}</h1>
        <p className="text-2xl mt-6 text-gray-800">{bodyText}</p>
      </div>
    </div>
  );
};
`;

// Tailwind CSS placeholder (Assumes you already have this set up)
const tailwindCSS = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;

// Function to write a file
async function writeFile(content, fileName) {
	try {
		await fsp.writeFile(join(process.cwd(), 'src', fileName), content);
		logMessage('Created ' + fileName + ' successfully');
	} catch (error) {
		logMessage('Failed to create ' + fileName + ': ' + error.message, 'error');
	}
}

// Function to create all project files
async function createProjectFiles() {
	await writeFile(RootTSX, 'Root.tsx');
	await writeFile(MainCompositionTSX, 'MainComposition.tsx');
	await writeFile(CompositionTSX, 'Composition.tsx');
	await writeFile(tailwindCSS, 'tailwind.css'); // Assuming Tailwind isn't pre-installed, otherwise skip this.
	logMessage('All files have been created successfully!');
}

// Execute the file creation process
createProjectFiles();
