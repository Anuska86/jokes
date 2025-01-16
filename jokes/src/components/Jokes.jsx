export default function Jokes(props) {
  console.log(props);
  return (
    <div>
      <li>
        {" "}
        <h2>{props.setup}</h2>
      </li>
      <li>
        <h3>{props.punchline}</h3>
      </li>
    </div>
  );
}
