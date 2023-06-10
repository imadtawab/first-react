import PlayPauseBtn from "../PlayPauseBtn/PlayPauseBtn"
import "./CardYourMostPopularClips.css"
import { FaEye } from "react-icons/fa"

export default function CardYourMostPopularClips(props) {
    let {key , image , title , views} = props
    return (
        <div key={key} className="card-YourMostPopularClips">
        <div className="card-image">
          <img src={image} alt="#"/>
          <PlayPauseBtn href="#"/>
        </div>
          <div className="content">
            <h3>{title}</h3>
            <div className="icon">
                <FaEye/>
                <p>{views}</p>
            </div>
        </div>
      </div>
      )
}
 