import Typed from "react-typed";
import config from "../config";
export default function Hero() {
  return (
  <div class="text-center">
  <h2>
  <kbd className={"text-light"}>{config.heroHead}</kbd><br />
  </h2>
  <div class="text-center">
  </div>
  <h3>
  <code className="text-light">{config.heroText}</code>
  <div class="text-center">
  <span className="badge badge-success">
  <Typed strings={config.typedArray} typeSpeed={40} loop ={true} />
  </span>
  </div>
  </h3>
  </div>
  );
}
