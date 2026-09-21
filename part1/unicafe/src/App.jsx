import { useState } from "react";

const Statistics = (props) => {
  console.log(props);
  const {good, neutral, bad, total, average, positive} = props;

  if (total === 0) {
    return (
        <div>
          No feedback given
        </div>
    )
  }

  return (
      <div>
        <table>
          <tbody>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"total"} value={total} />
            <StatisticLine text={"average"} value={average} />
            <StatisticLine text={"positive"} value={`${positive} %`} />
          </tbody>
        </table>
      </div>
  )
}

const StatisticLine = (props) => {
  console.log(props);
  const {text, value} = props;
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

const Button = (props) => {
  console.log(props);
  const {text, onClick} = props;
  return (
      <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBadClick = () => {
    setBad(bad + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const total = good + neutral + bad;
  let average = 0;
  let positive = 0;

  if (total > 0) {
    average = (good + bad * -1) / total;
    positive = (good / total) * 100
  }


  return (
        <div>
          <div>
            <h1>give feedback</h1>
            <Button text={"good"} onClick={handleGoodClick} />
            <Button text={"neutral"} onClick={handleNeutralClick} />
            <Button text={"bad"} onClick={handleBadClick} />
          </div>
          <div>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
          </div>
        </div>
    )
}

export default App
