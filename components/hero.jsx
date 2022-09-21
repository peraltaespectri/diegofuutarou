import Typed from "react-typed";
import config from "../config";
export default function Hero() {
  return (
     <div class="text-center">
      <h3>
        <center><kbd className={"text-light"}>{config.heroHead}</kbd></center><br />
         <div class="text-center">
        </div>
        <center><code className="text-light">{config.heroText}</code></center>
        <div class="text-center">
          <span className="badge badge-warning">
            <Typed strings={config.typedArray} typeSpeed={40} loop ={true} />
          </span>
        </div>
      </h3>
    </div>
  );
}
