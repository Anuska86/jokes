import Header from "./components/Header";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div className="Jokes">
        <Jokes
          setup="Why did the scarecrow win an award?"
          punchline="Because he was outstanding in his field!"
        />
        <Jokes
          setup="What do you call a fish wearing a crown?"
          punchline="A kingfish!"
        />
        <Jokes
          setup="What do you call a pile of cats?"
          punchline="A meowtain!"
        />
        <Jokes
          setup="What do you call a bear with no teeth?"
          punchline="A gummy bear!"
        />
        <Jokes
          setup="What do you call a cow with no legs?"
          punchline="Ground beef!"
        />
        <Jokes punchline="It's hard to explain puns to kleptomaniacs because they always take things literally." />
      </div>
    </div>
  );
}

export default App;
