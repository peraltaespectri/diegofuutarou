
import config from "../config"
import Link from "next/link"
export default function footer() {
  return (
    <div>
      <footer className="page-footer font-small blue ">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
  <div class="text-center">
  <span className="badge badge-success">
  <Typed strings={config.typedArray} typeSpeed={40} loop ={true} />
             <a
              href={"https://fb.me/" + config.facebookUsername}
              className="btn-floating btn-fb mx-1"
            >
              <img
                style={{ width: "80px", height: "80px" }}
                src={"https://img.icons8.com/doodle/48/000000/facebook-new.png"}
                alt="facebook"
              />
          <div className="text-center text-light">Facebook</div>
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
          <div className="text-center text-light">Telegram</div>
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
          <div className="text-center text-light">Telegram</div>
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
          <div className="text-center text-light">Telegram</div>
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
          <div className="text-center text-light">Telegram</div>
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
          <div className="text-center text-light">Telegram</div>
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
          <div className="text-center text-light">Instagram</div>
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
          <div className="text-center text-light">GitHub</div>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
