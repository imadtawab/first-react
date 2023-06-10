import { BsFillCloudDownloadFill, BsFillStarFill } from "react-icons/bs"
import "./CardFeaturedGames.css"
export default function CardFeaturedGames(props) {
    let {mykey, imgSrc, imgAlt, title, downloadNumber, stars, views , streamingNumber} = props
  return (
            <div key={mykey} className="featured-games-card">
                <div className="card-image">
                    <img src={imgSrc} alt={imgAlt}/>
                    <div className="streamingNumber">{streamingNumber}K Streaming</div>

                </div>
                <div className="card-content">
                    <div className="text-content">
                        <h3>{title}</h3>
                        <p>{downloadNumber}K Downloads</p>
                    </div>
                    <div className="icon-content">
                        <div className="icon stars">
                            <BsFillStarFill/>
                            <p>{stars}</p>
                        </div>
                        <div className="icon views">
                            <BsFillCloudDownloadFill/>
                            <p>{views}M</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}
