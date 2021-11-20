import { Link } from "react-router-dom";
import "./social.css";

export default function Social({ socialIcon, socialAlt }) {
  return (
    <li>
      <Link to="/">
        <div className="socials__img">
          <img src={socialIcon} alt={socialAlt} />
        </div>
      </Link>
    </li>
  );
}
