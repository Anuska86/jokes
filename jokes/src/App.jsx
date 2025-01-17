import Header from "./components/Header";
import Jokes from "./components/Jokes";
import jokesdata from "./jokesdata";

function App() {
  console.log(jokesdata);

  const jokeElements = jokesdata.map((joke) => (
    <Jokes key={joke.id} question={joke.question} punchline={joke.punchline} />
  ));

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="jokes">{jokeElements}</div>
    </div>
  );
}

export default App;
