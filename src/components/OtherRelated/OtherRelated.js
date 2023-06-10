import CardOtherRelatedData from "../../Data/CardOtherRelatedData"
import CardOtherRelated from "../CardOtherRelated/CardOtherRelated"
import SectionStructure from "../SectionStructure/SectionStructure"
import "./OtherRelated.css"

export default function OtherRelated() {
    let loopForOtherRelated = CardOtherRelatedData.map((card,index) => {
        return <CardOtherRelated img={card.img} title={card.title} subTitle={card.subTitle} stars={card.stars} downloads={card.downloads} />
    })
  return (
    <>
        <SectionStructure title="Other Related" subTitle="Games">
            <div className="cards-other-related">
                {loopForOtherRelated}
            </div>
        </SectionStructure>
    </>
  )
}
