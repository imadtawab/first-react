import { BsFillCheckCircleFill } from "react-icons/bs"
import "./CardLiveStream.css"
import { FaEye, FaGamepad } from "react-icons/fa"

export default function CardLiveStream(props) {
    let {key , mainImg , mainImgAlt , views , categorie , profileImg , profileImgAlt , subTitle , title} = props
  return (
    <div key={key} className="card-live-stream">
        <div className="image">
            <img src={mainImg} alt={mainImgAlt} />
            <div className="box-in-hover">
                <div className="live">Live</div>
                <div className="views">
                    <FaEye/> {views}K
                </div>
                <div className="categorie">
                    <FaGamepad/> {categorie}
                </div>
            </div>
        </div>
        <div className="content">
            <div className="profile">
                <img src={profileImg} alt={profileImgAlt} />
            </div>
            <div className="text">
                <div className="sub-title">
                    <BsFillCheckCircleFill/> {subTitle}
                </div>
                <h4 className="title">
                    {title}
                </h4>
            </div>
        </div>
    </div>
  )
}
