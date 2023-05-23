import { useState } from "react";
import Questionnaire from "./components/Questionnaire/Questionnaire";
import Introduction from "./components/Introduction/Introduction";
export default function App({ quiz }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  return (
    <>
      <div>
        <h1>{quiz.quizTitle}</h1>
        <Introduction description={quiz.quizDescription} />
        <Questionnaire
          activeQuestion={activeQuestion}
          questions={quiz.questions}
        />
      </div>
    </>
  );
}
