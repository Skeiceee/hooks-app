import { memo } from "react";

const Small = memo(function Small({ value }) {
  console.log("me volvi a dibujar :(");
  return (
    <div>
      <small>{value}</small>
    </div>
  );
});

export default Small;
