import CardLiveStreamData from '../../Data/CardLiveStreamData'
import CardTopStreamers from '../CardTopStreamers/CardTopStreamers'
import SectionStructure from '../SectionStructure/SectionStructure'
import './TopStreamers.css'

export default function TopStreamers(props) {
   let loopForTopStreamers = CardLiveStreamData.map((card,index) => {
    if (props.length) {
        if (index < props.length) {
            return <CardTopStreamers index={index+1} profileImg={card.profileImg} subTitle={card.subTitle} title={card.title} />
        }
    }else{
        return <CardTopStreamers profileImg={card.profileImg} subTitle={card.subTitle} title={card.title} />
    }
   })
  return (
    <>
        <div className="parentTopStreamers">
            <SectionStructure title="Top" subTitle="Streamers" >
                <div className="topStreamers">
                    {loopForTopStreamers}
                </div>
            </SectionStructure>
        </div>
    </>
  )
}
