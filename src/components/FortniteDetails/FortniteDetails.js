import { BsFillCloudDownloadFill, BsFillHddStackFill, BsFillStarFill } from "react-icons/bs"
import SectionStructure from "../SectionStructure/SectionStructure"
import "./FortniteDetails.css"
import { FaGamepad } from "react-icons/fa"
import details_1 from "../../assets/details-01.jpg"
import details_2 from "../../assets/details-02.jpg"
import details_3 from "../../assets/details-03.jpg"
import LinkBtn from "../LInkBtn/LinkBtn"

export default function FortniteDetails() {
  return (
    <>
        <SectionStructure>
            <div className="fortnite-details">
                <div className="fortnite-cards">
                <div className="first-card">
                    <div className="text-content">
                        <h3>Fortnite</h3>
                        <p>Sandbox</p>
                    </div>
                    <div className="icon-content">
                        <div className="icon stars">
                            <BsFillStarFill/>
                            <p>4.8</p>
                        </div>
                        <div className="icon views">
                            <BsFillCloudDownloadFill/>
                            <p>2.3M</p>
                        </div>
                    </div>
                </div>
                <div className="second-card">
                <div className="box">
                        <BsFillStarFill/>
                        <span>4.8</span>
                    </div>
                    <div className="box">
                        <BsFillCloudDownloadFill/>
                        <span>2.3M</span>
                    </div>
                    <div className="box">
                        <BsFillHddStackFill/>
                        <span>36GB</span>
                    </div>
                    <div className="box">
                        <FaGamepad/>
                        <span>Action</span>
                    </div>
                </div>
                </div>
                <div className="catalogue">
                    <img src={details_1} alt="#" />
                    <img src={details_2} alt="#" />
                    <img src={details_3} alt="#" />
                </div>
                <div className="content-text">
                    <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small contribution via PayPal to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
                    <div className="button">
                        <LinkBtn type="border-link" content="Download Fortnite Now!" href="#" />
                    </div>
                </div>
            </div>
        </SectionStructure>
    </>
  )
}
