import Typed from "react-typed";
import config from "../config";
export default function Hero() {
  return (
     <div class="text-center">
      <h2>
        <center><kbd className={"p-3 mb-2 bg-info text-white"}>{config.heroHead}</kbd></center>
        <center><kbd className={"p-3 mb-2 bg-info text-white"}>{config.heroText}</kbd></center>
        <div class="text-center">
          <span className="badge badge-warning">
            <Typed strings={config.typedArray} typeSpeed={40} loop ={true} />
          </span>
        </div>
      </h2>
    </div>
  );
}
