import CardHowToStart from "../CardHowToStart/CardHowToStart"
import SectionStructure from "../SectionStructure/SectionStructure"
import "./HowToStart.css"
import service_1 from "../../assets/service-01.jpg"
import service_2 from "../../assets/service-02.jpg"
import service_3 from "../../assets/service-03.jpg"
export default function HowToStart() {
  return (
    <>
      <SectionStructure title="How To Start Your" subTitle="Live Stream" linkBtnContent="Go To Profile" linkBtnHref="#" typeTitle="center">
        <div className="cards-how-to-start">
        <CardHowToStart imgSrc={service_1} imgAlt="#" title="Go To Your Profile">
          Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.
        </CardHowToStart>
        <CardHowToStart imgSrc={service_2} imgAlt="#" title="Live Stream Button">
          If you wish to support us, you can make a small contribution via PayPal to info [at] templatemo.com
        </CardHowToStart>
        <CardHowToStart imgSrc={service_3} imgAlt="#" title="You Are Live">
          You are not allowed to redistribute this template's downloadable ZIP file on any other template collection website.
        </CardHowToStart>
        </div>
      </SectionStructure>
    </>
  )
}
