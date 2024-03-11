import { useState } from "react"
import Card from "../components/Card";
import { MdNightlight, MdBrightness7 } from "react-icons/md"

export default function App() {
  const [togle, setTogle] = useState(false);
  const [scoreA, setScroreA] = useState(0)
  const [scoreB, setScroreB] = useState(0);

  function darkMode() {
    setTogle(!togle);
  }

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
        <button onClick={darkMode} className=" absolute top-0 right-0 m-8 p-3 dark:bg-white rounded-full">
          {togle ? <MdBrightness7 /> : <MdNightlight />}
        </button>
        <div className="flex w-3/4 justify-around items-center">
          <Card dis={!scoreA > 0} up={scoreUpA} down={scoreDownA} id={1} player={"Player 1"}>{scoreA}</Card>
          <h1 className="text-white font-bold text-5xl">VS</h1>
          <Card dis={!scoreB > 0} up={scoreUpB} down={scoreDownB} id={2} player={"Player 2"}>{scoreB}</Card>
        </div>
      </div>
    </>
  )
}

