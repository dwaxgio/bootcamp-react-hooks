import { memo, useCallback, useMemo, useState } from "react";
import "./styles.css";

const Count = ({ count }) => {
  return <div>count: {count}</div>;
};

const Title = memo(({ props, onClickNext }) => {
  console.log("render title");

  return (
    <h1>
      {props?.name}
      <button onClick={onClickNext}>next desde el hijo</button>
    </h1>
  );
});

const Counter = () => {
  const [count, setCount] = useState(0);

  const _handleClickDrecrease = () => setCount(count - 1);
  const _handleClickIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const props = useMemo(() => {
    return {
      name: "Hola Mundo",
    };
  }, []);

  return (
    <div className="App">
      <Title props={props} onClickNext={_handleClickIncrement} />
      <Count count={count} />
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
