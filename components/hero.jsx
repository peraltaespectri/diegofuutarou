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
        <center><code className="text-light">{config.heroText}</code></center>
        <center><kbd className={"text-light"}>{config.heroHead}</kbd></center>
        <center><code className="text-light">{config.typedArray}<code></center>
        </div>
      </h3>
    </div>
  );
}
