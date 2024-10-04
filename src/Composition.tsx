import { AbsoluteFill, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig } from "remotion";

const unitData = [
  {
    unit: 1,
    title: "Primitive Types",
    concepts: ["Variables", "Data Types", "Operators"],
    icon: "💻",
    color: 'blue',
  },
  {
    unit: 2,
    title: "Using Objects",
    concepts: ["Classes", "Objects", "Methods"],
    icon: "📦",
    color: 'green',
  },
  {
    unit: 3,
    title: "Boolean Expressions",
    concepts: [
      "Logical Operators",
      "Conditional Statements",
      "Boolean Logic",
    ],
    icon: "❓",
    color: 'red',
  },
  {
    unit: 4,
    title: "Iteration",
    concepts: ["For Loops", "While Loops", "Nested Loops"],
    icon: "🔄",
    color: 'purple',
  },
  {
    unit: 5,
    title: "Arrays",
    concepts: ["Arrays", "ArrayLists", "2D Arrays"],
    icon: "🗃️",
    color: 'yellow',
  },
  // Add more units and concepts as needed
];

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 20, mass: 1 }, from: 0.8, to: 1 });
  const subtitleOpacity = interpolate(frame, [45, 60], [0, 1]);

  return (
    <AbsoluteFill className="bg-[#1a202c] text-white">
      <div className="flex flex-col items-center justify-center h-full w-full px-16">
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold transform scale-x-${titleScale} mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            AP Computer Science A
          </h1>
          <p className="text-4xl font-semibold opacity-${subtitleOpacity} mb-16 tracking-wide">
            A Quick Overview
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 px-8 pb-16">
          {unitData.map((unit, index) => (
            <Sequence from={40 + index * 80} durationInFrames={200} key={unit.unit}>
              <div
                className="bg-[#2d3748] rounded-lg shadow-lg p-8 transform -translate-y-${spring({
                  frame: frame - (40 + index * 80),
                  fps,
                  config: { damping: 20, mass: 1 },
                })} * 50 transition duration-500 ease-in-out text-gray-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-transform duration-300 cursor-pointer"
                style={{ backgroundColor: `rgba(0, 0, 0, 0.2)` }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-6xl mr-3" style={{ color: `var(--color-${unit.color})` }}>
                    {unit.icon}
                  </span>
                  <h2 className="text-3xl font-bold">
                    Unit {unit.unit}: {unit.title}
                  </h2>
                </div>
                <ul className="list-disc list-inside text-lg">
                  {unit.concepts.map((concept) => (
                    <li key={concept}>{concept}</li>
                  ))}
                </ul>
              </div>
            </Sequence>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};