export default function Jokes(props) {
  console.log(props);
  return (
    <div>
      {props.question && <p className="question">Setup: {props.question}</p>}

      <p className="punchline">Punchline: {props.punchline}</p>
      <hr />
    </div>
  );
}
