//import ToolTip from '../uiAceternity/Tooltip';

import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { useMotionValue } from "framer-motion";

const x = useMotionValue(0)

export default function Home() {
  return (
    <><h1 className="text-red-300 text-bold">hi</h1><><GoogleGeminiEffect pathLengths={[ x ]} /></></>
  );
}
