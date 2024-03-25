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

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  return (
    <>
      <div className="main-container">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={computerSelect} />
      </div>
      <div className="button-container">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
