import config from "../config";
import Link from "next/link";


export default function Customhead() {


  return (
    <div id="home">
      <nav className="navbar navbar-light bg-dark">
        <Link href="/">
          <a className={"navbar-brand logo"} >
            <img
              src="./code.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Jigar Varma"
            />
            <kbd id="username">{config.websiteName}</kbd>
          </a>
        </Link>

        <Link href="/projects" as="/projects">
          <a className={"btn btn-outline-light"}>Projetos</a>
        </Link>
      </nav>
    </div>
  );
}
