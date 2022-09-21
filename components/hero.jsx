import Typed from "react-typed";
import config from "../config";
export default function Hero() {
  return (
    <div className={"container mt-5"}>
      <h3>
        <center><kbd className={"p-3 mb-2 bg-white text-dark"}>{config.heroHead}</kbd></center><br />
        <center><code className="p-3 mb-2 bg-white text-dark">{config.heroText}</code></center>
        <div class="text-center">
          <span className="badge badge-warning">
            <Typed strings={config.typedArray} typeSpeed={40} loop ={true} />
          </span>
        </div>
      </h3>
    </div>
  );
}
