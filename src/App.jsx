import { useState } from "react";
import { getQuestions } from "./utils/question";
import { TestOptions } from "./components/TestOptions";
import { Test } from "./components/Test";

function App() {
  const [selectedSetIndex, setSelectedSetIndex] = useState(null);
  const questionSets = getQuestions();
  return (
    <>
      {selectedSetIndex === null ? (
        <TestOptions onSelectSet={setSelectedSetIndex} />
      ) : (
        <Test
          questions={questionSets[selectedSetIndex]}
          onRestart={() => setSelectedSetIndex(null)}
        />
      )}
    </>
  );
}

export default App;
