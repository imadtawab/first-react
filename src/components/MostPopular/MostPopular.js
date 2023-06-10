import CardMostPopularData from "../../Data/CardMostPopularData"
import CardMostPopular from "../CardMostPopular/CardMostPopular"
import SectionStructure from "../SectionStructure/SectionStructure"
import "./MostPopular.css"

export default function MostPopular() {

  let loopForCard = CardMostPopularData.map((card,index) => {
    return <CardMostPopular mykey={"cardMost"+index} imgSrc={card.imgSrc} imgAlt={card.imgAlt} title={card.title} subTitle={card.subTitle} stars={card.stars} views={card.views} />
  })
  return (
    <>
    <SectionStructure title="Most Popular" subTitle="Right Now" linkBtnContent="Discover Popular"  linkBtnHref="#" >
      <div className="cards">
        {loopForCard}
      </div>
    </SectionStructure>
    </>
  )
}
