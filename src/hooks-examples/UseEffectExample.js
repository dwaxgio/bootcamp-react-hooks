import { useEffect, useState } from "react";
import "./styles.css";

export const getData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: 1,
          name: "awwada",
        },
        {
          title: 2,
          name: "awwada",
        },
        {
          title: 3,
          name: "awwada",
        },
        {
          title: 4,
          name: "awwada",
        },
      ]);
    }, 4000);
  });

const Counter = () => {
  const [count, setCount] = useState(0);

  const _handleClickIncrement = () => setCount(count + 1);
  const _handleClickDrecrease = () => setCount(count - 1);

  // componentDidMount
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("se esta llamando el timer");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("unmount");
    };
  }, []);

  // componentDidMount + componenteDidUpdate
  useEffect(() => {
    console.log("count", count);

    return () => {
      console.log("unmount 2");
    };
  }, [count]);

  console.log("render");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>count: {count}</div>
      <button onClick={_handleClickDrecrease}>prev</button>
      <button onClick={_handleClickIncrement}>next</button>
    </div>
  );
};

export default function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div>
      <button onClick={() => setShowCounter((prev) => !prev)}>toggle</button>
      {showCounter && <Counter />}
    </div>
  );
}
