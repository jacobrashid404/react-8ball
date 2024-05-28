import { useState } from "react";
import "./Eightball.css";

/** Picks random answer and updates 8ball's state
 *
 * Props
 *  - answers: array of 8ball answer objects => [{msg: "text", color: "green"}, ...]
 * State
 *  - answer: 8ball answer object => {msg: "text", color: "green"}
 *
 * App => Eightball
 *
 */

function Eightball({ answers }) {
  const defaultAnswer = {msg: "Think of a question", color: "black"};
  const [answer, setAnswer] = useState(defaultAnswer);

  function getRandomAnswer() {
    const randIdx = Math.floor(Math.random() * answers.length);
    return answers[randIdx];
  }

  function handleClick(evt) {
    const randomAnswer = getRandomAnswer();
    setAnswer(randomAnswer);
  }

  return (
    <div className="Eightball">
      <h1>8 Ball!</h1>
      <div
          onClick={handleClick}
          style={{ backgroundColor: answer.color}}
          >
        <b>{ answer.msg }</b>
      </div>
    </div>
  )
}

export default Eightball;