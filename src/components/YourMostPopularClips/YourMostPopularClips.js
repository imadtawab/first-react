import './YourMostPopularClips.css'
import SectionStructure from '../SectionStructure/SectionStructure'
import FirstSectionProfile from '../FirstSectionProfile/FirstSectionProfile'
import CardYourMostPopularClips from '../CardYourMostPopularClips/CardYourMostPopularClips'
import CardYourMostPopularClipsData from '../../Data/CardYourMostPopularClipsData'

export default function YourMostPopularClips() {
    let loopForCardYourMostPopularClips = CardYourMostPopularClipsData.map((card,index) => {
        return <CardYourMostPopularClips key={index} image={card.image} title={card.title} views={card.views} />
    })
  return (
    <>
        <SectionStructure>
            <FirstSectionProfile/>
            
            <SectionStructure title="Your Most Popular" subTitle=" Clips" margin="none" linkBtnContent="Load More Clips" linBtnHref="#" >
                <div className="cards-YourMostPopularClips">
                    {loopForCardYourMostPopularClips}
                </div>
            </SectionStructure>
        </SectionStructure>

    </>
  )
}
