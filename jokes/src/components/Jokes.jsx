import React from "react";

export default function Jokes(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toogleIsShown() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  console.log(isShown);
  return (
    <div>
      {props.question && <p className="question">Setup: {props.question}</p>}
      {isShown === true && (
        <p className="punchline">Punchline: {props.punchline}</p>
      )}
      <button onClick={toogleIsShown}>Show Punchline</button>
      <hr />
    </div>
  );
}
