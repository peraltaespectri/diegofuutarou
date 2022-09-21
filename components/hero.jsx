import Typed from "react-typed";
import config from "../config";
export default function Hero() {
  return (
     <div class="text-center">
      <h2>
        <kbd className={"text-light"}>{config.heroHead}</kbd></h2><br /><br />
         <div class="text-center">
         <h3>
        </div>
        <code className="text-light">{config.heroText}</code>
        <div class="text-center">
          <span className="badge badge-primary">
            <Typed strings={config.typedArray} typeSpeed={40} loop ={true} />
          </span>
        </div>
      </h3>
    </div>
  );
}
