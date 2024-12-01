const PokemonCard = ({ id, name, sprites = {} }) => {
//   const { back_default, front_default, back_shiny, front_shiny } = sprites;
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>

      {/* Imagénes */}
      <div>
        {
            sprites.map( (sprite) => (
                <img key={sprite} src={sprite} />
            ))
        }
      </div>
    </section>
  );
};

export default PokemonCard;
