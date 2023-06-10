import CardLiveStreamData from "../../Data/CardLiveStreamData"
import CardLiveStream from "../CardLiveStream/CardLiveStream"
import SectionStructure from "../SectionStructure/SectionStructure"
import "./LiveStream.css"

export default function LiveStream(props) {
    let loopForLiveStream = CardLiveStreamData.map((card , index) => {
      if (props.length) {
        if (index < props.length) {
          return <CardLiveStream key={index} mainImg={card.mainImg} mainImgAlt={card.mainImgAlt} views={card.views} categorie={card.categorie} profileImg={card.profileImg} profileImgAlt={card.profileImgAlt} subTitle={card.subTitle} title={card.title} />
        }
      }else{
          return <CardLiveStream key={index} mainImg={card.mainImg} mainImgAlt={card.mainImgAlt} views={card.views} categorie={card.categorie} profileImg={card.profileImg} profileImgAlt={card.profileImgAlt} subTitle={card.subTitle} title={card.title} />
        
      }
    })
  return (
    <SectionStructure title="Most Popular" subTitle="Live Stream" linkBtnContent="Discover All Streams" linkBtnHref="#">
        <div className="cards-live-stream">
            {loopForLiveStream}
        </div>
    </SectionStructure>
  )
}
