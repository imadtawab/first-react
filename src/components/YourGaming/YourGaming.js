import CardGamingData from "../../Data/CardGamingData"
import CardGaming from "../CardGaming/CardGaming"
import SectionStructure from "../SectionStructure/SectionStructure"
import "./YourGaming.css"


export default function YourGaming() {
    let loopForCardGaming = CardGamingData.map((card,index) => {
        return <CardGaming key={index} img={card.img} title={card.title} subTitle={card.subTitle} dateAdded={card.dateAdded} heurePlayed={card.heurePlayed} minutePlayed={card.minutePlayed} linkDownload={{...card.linkDownload}}/>
    })
  return (
    <>
        <SectionStructure title="Your Gaming" subTitle="Library" linkBtnContent="View Your Library" linkBtnHref="#" >
            <div className="cards-gaming">
                {loopForCardGaming}
            </div>
        </SectionStructure>
    </>
  )
}
