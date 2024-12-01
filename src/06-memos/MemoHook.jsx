import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heaveStuff = ( iterationNumber = 100 ) => {
  for(let i = 0; i < iterationNumber; i++ ){
    console.log('ahi vamos...')
  }

  return `${iterationNumber} iteraciones realizadas`;
}

const MemoHook = () => {
  const { counter, increment } = useCounter( 4000 );
  const [ show, setShow ] = useState(true);
  
  const memorizeValue = useMemo(() => heaveStuff(counter), [counter])

  return (
    <div>
      <h1>
        {/* Counter: <Small value={counter} /> */}
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{ memorizeValue }</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
