import { useCurrentFrame, interpolate } from "remotion";

const topics = [
  {
    title: "Primitive Types",
    explanation: "Learn about int, double, boolean, and more!",
  },
  {
    title: "Using Objects",
    explanation: "Create instances of classes and utilize their methods.",
  },
  {
    title: "Boolean Expressions & If Statements",
    explanation: "Control the flow of your program with conditional logic.",
  },
  {
    title: "Iteration",
    explanation: "Repeat blocks of code with for and while loops.",
  },
  {
    title: "Classes",
    explanation: "Design your own objects and methods with encapsulation.",
  },
  {
    title: "Arrays",
    explanation: "Store and manipulate collections of data efficiently.",
  },
  {
    title: "ArrayList",
    explanation: "A flexible, dynamic way to work with lists of objects.",
  },
  {
    title: "2D Arrays",
    explanation: "Represent tabular data and solve more complex problems.",
  },
  {
    title: "Inheritance",
    explanation: "Build relationships between classes and reuse code.",
  },
  {
    title: "Recursion",
    explanation: "Solve problems by breaking them into smaller, self-similar parts.",
  },
];

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const index = Math.floor(frame / 360) % topics.length;
  const progress = (frame % 360) / 360;

  const titleOpacity = interpolate(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const explanationOpacity = interpolate(progress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white text-center px-10 opacity-0 transition-opacity duration-500" style={{ opacity: titleOpacity }}>
        {topics[index].title}
      </h1>
      <p className="text-2xl text-white mt-8 text-center px-20 opacity-0 transition-opacity duration-500" style={{ opacity: explanationOpacity }}>
        {topics[index].explanation}
      </p>
    </div>
  );
};
