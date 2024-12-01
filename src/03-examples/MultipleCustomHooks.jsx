import { useCounter, useFetch } from "../hooks";
import LoadingMessage from "./LoadingMessage";
import PokemonCard from "./PokemonCard";

const MultipleCustomHooks = () => {
  const { counter, decrease, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <div>
      <h1>Información del pokemon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage></LoadingMessage>
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        ></PokemonCard>
      )}

      <div className="d-flex gap-2 mt-2">
        <button
          className="btn btn-primary"
          onClick={() => (counter > 1 ? decrease() : null)}
        >
          Anterior
        </button>
        <button className="btn btn-primary" onClick={() => increment()}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default MultipleCustomHooks;
