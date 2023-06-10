import { BsFillCheckCircleFill } from "react-icons/bs"
import "./CardTopStreamers.css"
import LinkBtn from "../LInkBtn/LinkBtn"

export default function CardTopStreamers(props) {
    let {profileImg , subTitle , index} = props
  return (
    <div className="parent-streamers">
        <div className="card-top-streamers">
            <div className="classement">
                # {index <10 ? `0${index}` : index}
            </div>
            <div className="profile">
                <img src={profileImg} alt="#" />
            </div>
            <div className="text">
                <div className="sub-title">
                    <BsFillCheckCircleFill/> {subTitle}
                </div>
            </div>
        </div>
        <div className="button-follow">
            <LinkBtn type="bg-link" content="Follow" href="#" />
        </div>
    </div>
  )
}
