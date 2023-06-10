import LinkBtn from "../LInkBtn/LinkBtn"
import "./WelcomeSection.css"

export default function WelcomeSection() {
  return (
    <div className="welcome-section">
        <p>Welcome To Cyborg</p>
        <h1><span>Browse </span>our<br/>popular games here</h1>
        <LinkBtn type="bg-link" href="/browse" content="Browse Now" />
    </div>
  )
}
