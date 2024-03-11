import { useState } from "react"
import Card from "../components/Card";
import Swithcer from "../components/Swithcer";

export default function App() {
  const [scoreA, setScroreA] = useState(0)
  const [scoreB, setScroreB] = useState(0);

  // if ()

  function scoreUpA() {
    setScroreA(scoreA + 1)
  }

  // Handle Crash before 0
  function scoreDownA() {
    if (scoreA > 0) {
      setScroreA(scoreA - 1);
    }
  }

  function scoreUpB() {
    setScroreB(scoreB + 1)
  }

  // Handle Crash before 0
  function scoreDownB() {
    if (scoreB > 0) {
      setScroreB(scoreB - 1);
    }
  }

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 relative">
        <Swithcer />
        <div className="flex w-3/4 justify-around items-center">
          <Card dis={!scoreA > 0} up={scoreUpA} down={scoreDownA} id={1} player={"Player 1"}>{scoreA}</Card>
          <h1 className="dark:text-white text-black font-bold text-5xl">VS</h1>
          <Card dis={!scoreB > 0} up={scoreUpB} down={scoreDownB} id={2} player={"Player 2"}>{scoreB}</Card>
        </div>
      </div>
    </>
  )
}

