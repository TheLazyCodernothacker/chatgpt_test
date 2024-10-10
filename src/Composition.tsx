import React from "react";
import { useCurrentFrame, spring } from "remotion";

const topics = [
  {
    title: "Primitive Types",
    explanation: "Learn about int, double, boolean, and more.",
    code: `int numStudents = 25;`,
  },
  {
    title: "Using Objects",
    explanation: "Create and use objects from classes.",
    code: `Scanner reader = new Scanner(System.in);`,
  },
  {
    title: "Boolean Expressions",
    explanation: "Use conditional statements for control flow.",
    code: `if (x > 5) {
  // do something
}`,
  },
  {
    title: "Iteration",
    explanation: "Use for and while loops to repeat code.",
    code: `for (int i = 0; i < 10; i++) {
  // loop body
}`,
  },
  {
    title: "Array Lists",
    explanation: "Store and manipulate collections of data.",
    code: `ArrayList<String> names = new ArrayList<>();`,
  },
  {
    title: "Recursion",
    explanation: "Solve problems by breaking them down recursively.",
    code: `public int factorial(int n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}`,
  },
];

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const index = Math.floor((frame / 240) % topics.length); // 8 seconds per topic

  const titleOpacity = spring({
    frame: frame - index * 240,
    fps: 30,
    config: {
      damping: 200,
      mass: 1,
    },
  });

  const explanationOpacity = spring({
    frame: frame - index * 240 - 60, // Delay explanation
    fps: 30,
    config: {
      damping: 200,
      mass: 1,
    },
  });

  const codeOpacity = spring({ 
    frame: frame - index * 240 - 120, 
    fps: 30, 
    config: {
      damping: 200, 
      mass: 1, 
    }, 
  }); 

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-screen h-screen flex flex-col items-center justify-center">
      <h1
        className="text-white text-5xl font-bold"
        style={{ opacity: titleOpacity }}
      >
        {topics[index].title}
      </h1>
      <p
        className="text-white text-xl mt-4"
        style={{ opacity: explanationOpacity }}
      >
        {topics[index].explanation}
      </p>
      <div 
        className="bg-gray-800 p-4 rounded-md mt-4 text-white font-mono"
        style={{ opacity: codeOpacity }}
      >
        <code className="text-sm">{topics[index].code}</code>
      </div>
    </div>
  );
};