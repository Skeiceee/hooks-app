import { useState } from "react";
import { useCounter } from "../hooks";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);
  
  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
