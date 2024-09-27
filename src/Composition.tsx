import { useCurrentFrame, Motion, Spring, Stagger } from "remotion";
import { Text, Box } from "remotion";

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Box
      width={1280}
      height={720}
      backgroundColor="#111111"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Motion.div
        style={{
          transform: Spring({
            opacity: frame < 30 ? 0 : 1,
            y: frame < 30 ? 100 : 0,
          }),
        }}
      >
        <Text
          fontSize={72}
          color="white"
          textAlign="center"
        >
          Welcome to Remotion!
        </Text>
      </Motion.div>
    </Box>
  );
};