export type AxisClipesResource = {
  title: string;
  description: string;
  platform: string;
  url: string;
  icon: "play" | "github" | "updates";
};

// Add only public destinations confirmed by the AXIS team.
export const axisClipesResources: AxisClipesResource[] = [];
