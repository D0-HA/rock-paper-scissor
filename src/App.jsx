import "./App.css";
import Box from "./components/Box";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "src/assets/Rock.png",
  },
  paper: {
    name: "Paper",
    img: "src/assets/Paper.png",
  },
  scissor: {
    name: "Scissor",
    img: "src/assets/Scissor.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Draw";
    } else if (user.name === "Rock")
      return computer.name === "Scissor" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
    else if (user.name === "Scissor")
      return computer.name === "Paper" ? "Win" : "Lose";
  };
  return (
    <>
      <div className="main-container">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="button-container">
        <button className="button-type_scissor" onClick={() => play("scissor")}>
          가위
        </button>
        <button className="button-type_rock" onClick={() => play("rock")}>
          바위
        </button>
        <button className="button-type_paper" onClick={() => play("paper")}>
          보
        </button>
      </div>
    </>
  );
}

export default App;
