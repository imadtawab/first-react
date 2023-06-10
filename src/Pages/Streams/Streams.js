import FeaturedGames from "../../components/FeaturedGames/FeaturedGames"
import LiveStream from "../../components/LiveStream/LiveStream"
import TopStreamers from "../../components/TopStreamers/TopStreamers"
import "./Streams.css"

export default function Streams() {
  return (
    <>
        <div className="container-for-row">
            <FeaturedGames/>
            <TopStreamers length="4"/>
        </div>
        <LiveStream/>
    </>
  )
}
