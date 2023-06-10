import { BsFillCloudDownloadFill, BsFillStarFill } from 'react-icons/bs'
import SectionStructure from '../SectionStructure/SectionStructure'
import './FeaturedGames.css'
import CardFeaturedGames from '../CardFeaturedGames/CardFeaturedGames'
import CardFeaturedGamesData from '../../Data/CardFeaturedGamesData'

export default function FeaturedGames(props) {
    console.log(CardFeaturedGamesData[0].imgSrc);
    let loopForCardFeaturedGames = CardFeaturedGamesData.map((card,index) => {
        return <CardFeaturedGames mykey={index} imgSrc={card.imgSrc} imgAlt={card.imgAlt} title={card.title} downloadNumber={card.downloadNumber} streamingNumber={card.streamingNumber} stars={card.stars} views={card.views}/>
    })
  return (
    <div className="featured-games-parent">
            <SectionStructure title="Featured" subTitle="Games">

  <div className="slider-container">
      {loopForCardFeaturedGames}
  </div>
  </SectionStructure>
    </div>
  )
}
