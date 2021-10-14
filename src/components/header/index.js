import { Link } from "react-router-dom"
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Logo from "../../resources/images/logo.png"

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} />
      <ul className="list-unstyled">
        <li>TOKENOMICS</li>
        <li>MEET THE PUNKS</li>
        <li>FAQ</li>
        <li>ABOUT</li>
      </ul>
      <ul className="list-unstyled btn-bar">
        <li>ISSUE %1</li>
        <li>METAHERO IDENTITIES</li>
        <li>METAHERO IDENTITIES</li>
        <li>
        </li>
      </ul>
      <ul className="list-unstyled icon-bar">
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faDiscord} />
        </li>
      </ul>
    </header>
  )
}

export default Header
