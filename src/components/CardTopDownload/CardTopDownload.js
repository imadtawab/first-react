import { BsFillCloudDownloadFill, BsFillStarFill } from "react-icons/bs"
import { FaDownload } from "react-icons/fa"
import "./CardTopDownload.css"

export default function CardTopDownload(props) {
    let {mykey, imgSrc, imgAlt, title, subTitle, stars, views } = props

  return (
    <div key={mykey} className="card-top-download">
    <div className="left-content">
      <div className="card-image">
        <img src={imgSrc} alt={imgAlt}/>
      </div> 
      <div className="card-content">
        <div className="text-content">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
        <div className="icon-content">
          <div className="icon stars">
            <BsFillStarFill/>
            <p>{stars}</p>
          </div>
          <div className="icon views">
            <BsFillCloudDownloadFill/>
            <p>{views}M</p>
          </div>
        </div>
      </div>
    </div>
    <div className="download-button">
      <a href="/" alt="#">
        <FaDownload/>
      </a>
    </div>
  </div>
  )
}
