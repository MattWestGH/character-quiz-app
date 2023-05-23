export default function Introduction({ setIsQuizLive }) {
  function handleClick() {
    setIsQuizLive(true);
  }
  return (
    <>
      <article>This is the introduction</article>
      <button onClick={handleClick}>Start the quiz!</button>
    </>
  );
}
