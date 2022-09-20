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
        <center><kbd className={"text-light"}>{config.heroHead}</kbd></center>
        <center><code className="text-light">{config.heroText}</code></center>
        <div>
          </center><span className="badge badge-warning"></center><Typed strings={config.typedArray} typeSpeed={40} loop ={true} />
          </span>
        </div>
      </h3>
    </div>
  );
}
