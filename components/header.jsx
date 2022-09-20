import config from "../config";


export default function Customhead() {


  return (
    <div id="home">
      <nav className="navbar navbar-light bg-dark">
        <Link href="/">
          <a className={"navbar-brand logo"} >
            <img
              src="./code.png"
              width="0"
              height="0"
              className="d-inline-block align-top"
              alt=""
            />
            <kbd id="username"></kbd>
          </a>
        </Link>

      </nav>
    </div>
  );
}
