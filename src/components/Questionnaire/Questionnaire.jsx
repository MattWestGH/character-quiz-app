export default function Questionnaire() {
  return (
    <>
      <form>
        <input
          type="radio"
          id="answer-1"
          name="fav_language"
          value="answer-1"
        />
        <label for="answer-1">Answer 1</label>
        <br></br>
        <input
          type="radio"
          id="answer-1"
          name="fav_language"
          value="answer-2"
        />
        <label for="answer-2">Answer 2</label>
        <br></br>
        <input
          type="radio"
          id="answer-3"
          name="fav_language"
          value="answer-3"
        />
        <label for="answer-3">Answer 3</label>
        <br></br>
        <input
          type="radio"
          id="answer-4"
          name="fav_language"
          value="answer-4"
        />
        <label for="answer-4">Answer 4</label>
        <br></br>
        <button>Submit</button>
      </form>
    </>
  );
}
