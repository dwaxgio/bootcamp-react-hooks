import logo from "./logo.svg";
import "./App.css";

import { useCallback, /** useId,  */ useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // const id = useId();
  const ref = useRef();

  const _handleClickDrecrease = () => setCount(count - 1);
  const _handleClickIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const _handleClickControllerOtherButton = () => {
    // const button = document.getElementById(id);

    console.log("ref.current", ref.current);

    ref.current.click();
  };

  // console.log("id", id);

  return (
    <div className="App">
      Hola Mundo
      <button onClick={_handleClickControllerOtherButton}>
        Controlador de otro boton next
      </button>
      count: {count}
      <button onClick={_handleClickDrecrease}>prev</button>
      <button ref={ref} onClick={_handleClickIncrement}>
        next
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
