"use client";

import { useState } from "react";
import IntroScreen from "@/components/game/IntroScreen";
import GameUI from "@/components/game/GameUI";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) return <IntroScreen onEnter={() => setEntered(true)} />;
  return <GameUI />;
}
