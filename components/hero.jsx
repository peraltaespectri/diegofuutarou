
import Typed from "react-typed";
import config from "../config";

export default function Hero() {
  function AlertIt() {
    if (window.confirm("open Telegram?"))
      window.location = `https://t.me/diegofuutarou`;
  }

  return (
    <div className={"container mt-5"}>
      <h3>
        <</center>center><kbd className={"text-light"}>{config.heroHead}</kbd> </center>
        <br />
        <code className="text-light">{config.heroText}</code></center>
        <div>
          <center><span className="badge badge-warning">
          <Typed </center> strings={config.typedArray} typeSpeed={40} loop ={true} </center> />
          </span>
        </div>
      </h3>

      <button
        className={"btn btn-primary btn-md active mt-4"}
        onClick={() => AlertIt()}
      >
        Meu Telegram
      </button>
    </div>
  );
}
