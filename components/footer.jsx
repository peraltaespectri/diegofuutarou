
import config from "../config"
import Link from "next/link"
export default function footer() {
  return (
    <div>
      <footer className="page-footer font-small blue ">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              href={"https://fb.me/diegofuutarou"}
              className="btn-floating btn-fb mx-1"
            >
              <img
                style={{ width: "35px", height: "35px" }}
                src={"https://img.icons8.com/fluency/344/facebook-circled.png"}
                alt="github"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
