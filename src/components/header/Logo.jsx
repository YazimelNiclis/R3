import "./logo.css";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

function Logo(props) {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
      <h3>{props.cuerpo}</h3>
    </>
  );
}

export default Logo;
