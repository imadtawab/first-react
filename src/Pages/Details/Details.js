import FirstDetails from "../../components/FirstDetails/FirstDetails"
import FortniteDetails from "../../components/FortniteDetails/FortniteDetails"
import OtherRelated from "../../components/OtherRelated/OtherRelated"
import "./Details.css"

export default function Details() {
  return (
    <>
      <FirstDetails/>
      <h1 className="main-tilte">FORTNITE DETAILS</h1>
      <FortniteDetails/>
      <OtherRelated/>
    </>
  )
}
