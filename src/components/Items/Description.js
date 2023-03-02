const Description = (props) => {
  return (
    <div className="cardDescript">
      <h2 className="title">Title:</h2>
      {props.title}
      <div className="descript">
        <span className="descriptTitle">Detalles: </span>
        <p className="parrafo"></p>
        {props.parrafo}
      </div>
      <span className="stock"></span>
      Stock: {props.cantidad}
      <span className="precio"></span>
      ${props.precio} PesosAR
    </div>
  );
};

export default Description;
