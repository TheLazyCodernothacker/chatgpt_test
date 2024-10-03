import { useCurrentFrame, spring, interpolate } from "remotion";

const topics = [
  {
    title: "Unit 1: Fundamentals",
    concepts: ["Variables", "Data Types", "Operators", "Control Flow"],
  },
  {
    title: "Unit 2: Object-Oriented Programming",
    concepts: ["Classes", "Objects", "Inheritance", "Polymorphism"],
  },
  {
    title: "Unit 3: Arrays and ArrayLists",
    concepts: ["Arrays", "ArrayLists", "Searching", "Sorting"],
  },
  {
    title: "Unit 4: 2D Arrays",
    concepts: ["2D Array Declaration", "Nested Loops", "Image Manipulation"],
  },
  {
    title: "Unit 5: Recursion",
    concepts: ["Recursive Methods", "Base Cases", "Problem Solving with Recursion"],
  },
  {
    title: "Unit 6: Sorting and Searching Algorithms",
    concepts: ["Selection Sort", "Insertion Sort", "Merge Sort", "Binary Search"],
  },
];

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();

  const titleScale = spring({ frame, from: 0.5, to: 1, damping: 10 });
  const conceptOpacity = interpolate(frame, [0, 30], [0, 1]);

  const currentTopicIndex = Math.floor(frame / 300) % topics.length;
  const currentTopic = topics[currentTopicIndex];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-screen h-screen flex flex-col items-center justify-center text-white">
      <h1
        className="text-6xl font-bold mb-10"
        style={{ transform: `scale(${titleScale})` }}
      >
        {currentTopic.title}
      </h1>
      <ul className="text-3xl opacity-80" style={{ opacity: conceptOpacity }}>
        {currentTopic.concepts.map((concept, index) => (
          <li key={index} className="mb-4">
            {concept}
          </li>
        ))}
      </ul>
    </div>
  );
};
