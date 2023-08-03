import "./cuerpo.css";

function Cuerpo(props) {
  return (
    <>
      <p className={props.cambiarFuente ? "texto1" : "texto2"}>
        {props.texto}
        {props.mostrarCodigo && <code>{props.codigo}</code>}
        {props.texto2}
      </p>
    </>
  );
}

export default Cuerpo;
