import React from "react";

export default function Jokes(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toogleIsShown() {
    setIsShown((prevIsShown) => !prevIsShown);
  }

  console.log(isShown);
  return (
    <div>
      {props.question ? <p className="question">{props.question}</p> : null}
      {isShown ? <p className="punchline">{props.punchline}</p> : null}

      <button onClick={toogleIsShown}>
        {isShown ? "Hide" : "Show"} punchline
      </button>
      <hr />
    </div>
  );
}
