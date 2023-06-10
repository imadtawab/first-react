import SectionStructure from "../SectionStructure/SectionStructure"
import "./FirstDetails.css"
import feature_left from "../../assets/feature-left.jpg"
import feature_right from "../../assets/feature-right.jpg"
import PlayPauseBtn from "../PlayPauseBtn/PlayPauseBtn"
export default function FirstDetails() {
  return (
    <>
      <SectionStructure typeTitle="none" >
          <div className="feature-left-right">
            <div className="left-img">
              <img src={feature_left} alt="#" />
            </div>
            <div className="right-img">
              <img src={feature_right} alt="#" />
                <PlayPauseBtn href="#"/>
            </div>
          </div>
      </SectionStructure>
    </>
  )
}
