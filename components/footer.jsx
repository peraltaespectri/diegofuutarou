
import config from "../config"
import Link from "next/link"
export default function footer() {
  return (
    <div>
      <footer className="page-footer font-small blue ">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              href={"https://fb.me/" + config.facebookUsername}
              className="btn-floating btn-fb mx-1"
            >
              <img
                style={{ width: "80px", height: "80px" }}
                src={"https://img.icons8.com/doodle/48/000000/facebook-new.png"}
                alt="facebook"
              />
          <div className="text-center text-light">Made</div>
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href={"https://t.me/" + config.tgUsername}
              className="btn-floating btn-tw mx-1"
            >
              <img
                style={{ width: "80px", height: "80px" }}
                src="https://img.icons8.com/fluent/50/000000/telegram-app.png"
                alt="telegram"
              />
          <div className="text-center text-light">Made</div>
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href={"https://t.me/" + config.tgUsername}
              className="btn-floating btn-tw mx-1"
            >
              <img
                style={{ width: "80px", height: "80px" }}
                src="https://img.icons8.com/fluent/50/000000/telegram-app.png"
                alt="telegram"
              />
          <div className="text-center text-light">Made</div>
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href={"https://vk.com/" + config.VKUsername}
              className="btn-floating btn-tw mx-1"
            >
              <img
                style={{ width: "80px", height: "80px" }}
                src="https://img.icons8.com/fluent/50/000000/telegram-app.png"
                alt="telegram"
              />
          <div className="text-center text-light">Made</div>
            </a>
          </li><br />

          <li className="list-inline-item">
            <a
              href={"https://t.me/" + config.tgUsername}
              className="btn-floating btn-tw mx-1"
            >
              <img
                style={{ width: "80px", height: "80px" }}
                src="https://img.icons8.com/fluent/50/000000/telegram-app.png"
                alt="telegram"
              />
          <div className="text-center text-light">Made</div>
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href={"https://t.me/" + config.tgUsername}
              className="btn-floating btn-tw mx-1"
            >
              <img
                style={{ width: "80px", height: "80px" }}
                src="https://img.icons8.com/fluent/50/000000/telegram-app.png"
                alt="telegram"
              />
          <div className="text-center text-light">Made</div>
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href={"https://www.instagram.com/" + config.instaUsername}
              className="btn-floating btn-tw mx-1"
            >
              <img
                style={{ width: "80px", height: "80px" }}
                src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                alt="Instagram"
              />
          <div className="text-center text-light">Made</div>
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href={"https://github.com/" + config.githubUsername}
              className="btn-floating btn-tw mx-1"
            >
              <img
                style={{ width: "80px", height: "80px" }}
                src="https://img.icons8.com/doodle/48/000000/github.png"
                alt="github"
              />
          <div className="text-center text-light">Made</div>
            </a>
          </li>
        </ul>
        <div className="footer-copyright text-center py-3 text-light">
          Made With NextJs{" "}
          <i>
            <img
              style={{ width: "10px", height: "10px" }}
              src="https://img.icons8.com/emoji/48/000000/red-heart.png"
              alt="love"
            />
          </i>{" "}
          By Aryan Vikash
        </div>
      </footer>
    </div>
  );
}
