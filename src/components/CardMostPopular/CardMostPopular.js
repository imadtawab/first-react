import "./CardMostPopular.css"
import { BsFillCloudDownloadFill, BsFillStarFill } from "react-icons/bs";

export default function CardMostPopular(props) {
    let {mykey, imgSrc, imgAlt, title, subTitle, stars, views } = props
  return (
    <div key={mykey} className="card">
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
  )
}
