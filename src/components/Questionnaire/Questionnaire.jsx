import { useState } from "react";
export default function Questionnaire({ activeQuestion, questions }) {
  return (
    <>
      <h2>{questions[activeQuestion].question}</h2>
      <form>
        {questions[activeQuestion].choices.map((choice) => {
          return (
            <>
              <input type="radio" name="question" id={choice} value={choice} />
              <label for={choice}>{choice}</label>
            </>
          );
        })}
        <button>Next</button>
      </form>
    </>
  );
}
