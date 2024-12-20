import { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((incrementValue) => {
    setCounter((value) => {
      return value + incrementValue;
    });
  }, []);

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </div>
  );
};

export default CallbackHook;
