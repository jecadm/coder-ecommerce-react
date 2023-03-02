const Description = (props) => {
  return (
    <div className="cardDescript">
      <h2 className="title">Acá va el tipulodesde Description</h2>
      {props.title}
      <div className="descript">
        <span className="descriptTitle">Detalles: </span>
        <p className="parrafo"></p>
        {props.parrafo}
      </div>
      <span className="cant"></span>
      Stock: {props.cantidad}
      <span className="precio"></span>
      {props.precio}
    </div>
  );
};

export default Description;
