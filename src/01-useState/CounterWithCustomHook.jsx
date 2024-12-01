import useCounter from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrease } = useCounter(0);

  return (
    <div className="d-flex flex-column justify-content-center container-sm">
      <div className="d-flex justify-content-center">
        <h1>Counter with Hook: {counter}</h1>
      </div>

      <div className="d-flex justify-content-center gap-2">
        <div className="d-flex justify-content-between gap-2 mx-auto">
          <button className="btn btn-primary btn-block" onClick={()=>{decrease(1)}}>
            -1
          </button>
          <button className="btn btn-primary btn-block" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-primary btn-block" onClick={()=>{increment(1)}}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterWithCustomHook;
