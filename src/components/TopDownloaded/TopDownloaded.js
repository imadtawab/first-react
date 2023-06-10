import CardTopDownload from "../CardTopDownload/CardTopDownload"
import SectionStructure from "../SectionStructure/SectionStructure"
import "./TopDownloaded.css"
import CardMostPopularData from "../../Data/CardMostPopularData"

export default function TopDownloaded(props) {
  let loopForTopDownload = CardMostPopularData.map((card,index) => {
        if (index < 3) {
          return <CardTopDownload mykey={index} imgSrc={card.imgSrc} imgAlt={card.imgAlt} title={card.title} subTitle={card.subTitle} stars={card.stars} views={card.views}/>
        }
  })
  return (
    <>
      <div className="topDownload">
        <SectionStructure title="Top" subTitle="Downloaded" linkBtnContent="View All Games" linkBtnHref="#">
              {loopForTopDownload}
          </SectionStructure>
      </div>
    </>
  )
}
