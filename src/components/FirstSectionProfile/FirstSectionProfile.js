import LinkBtn from "../LInkBtn/LinkBtn"
import "./FirstSectionProfile.css"
import profile from "../../assets/profile.jpg"

export default function FirstSectionProfile() {
  return (
    <div className="FirstSectionProfile">
        <div className="profile-image">
            <img src={profile} alt="Profile" />
        </div>
        <div className="profile-offline">
            <LinkBtn type="bg-link" content="Offline" href="#" />
            <h3>Alan Smithee</h3>
            <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
            <LinkBtn type="border-link" content="Start live Stream" href="#" />
        </div>
        <div className="profile-card">
        <div className="row">
                <p>Games Downloaded</p>
                <span>3</span>
            </div>
            <div className="row">
                <p>Friends Online</p>
                <span>16</span>
            </div>
            <div className="row">
                <p>Live Streams</p>
                <span>None</span>
            </div>
            <div className="row">
                <p>Clips</p>
                <span>29</span>
            </div>
        </div>
    </div>
  )
}
