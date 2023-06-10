import { BsFillCloudDownloadFill, BsFillStarFill } from "react-icons/bs"
import "./CardOtherRelated.css"

export default function CardOtherRelated(props) {
    let {img , title , subTitle , stars, downloads} = props
  return (
    <div className="card-other-related">
        <div className="parent-left">
            <div className="image">
                <img src={img} alt="#" />
            </div>
            <div className="text-content">
                <h3>{title}</h3>
                <p>{subTitle}</p>
            </div>
        </div>
        <div className="icon-content">
            <div className="icon stars">
                <BsFillStarFill/>
                <p>{stars}</p>
            </div>
            <div className="icon views">
                <BsFillCloudDownloadFill/>
                <p>{downloads}M</p>
            </div>
        </div>
    </div>
  )
}
