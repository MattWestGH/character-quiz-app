import { useState } from "react";
import Questionnaire from "./components/Questionnaire/Questionnaire";
import Introduction from "./components/Introduction/Introduction";

function App() {
  const [isQuizLive, setIsQuizLive] = useState(false);

  return (
    <>
      <div>
        <h1>Welcome</h1>
        <div>
          {isQuizLive != true ? (
            <Introduction setIsQuizLive={setIsQuizLive} />
          ) : (
            <Questionnaire />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
