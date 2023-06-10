import FeaturedGames from "../../components/FeaturedGames/FeaturedGames"
import HowToStart from "../../components/HowToStart/HowToStart"
import LiveStream from "../../components/LiveStream/LiveStream"
import TopDownloaded from "../../components/TopDownloaded/TopDownloaded"
import "./Browse.css"

export default function Browse() {
  return (
    <>
      <div className="container-for-row">
        <FeaturedGames/>
        <TopDownloaded/>
      </div>
      <HowToStart/>
      <LiveStream length={4}/>
    </>
  )
}
