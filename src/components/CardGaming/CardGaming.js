import "./CardGaming.css"
import LinkBtn from "../LInkBtn/LinkBtn"
export default function CardGaming(props) {
  return (
    <ul key={props.key} className="one-card-gaming">
    <li className="img">
        <img src={props.img} alt="#" />
    </li>
    <li className="title">
        <h4>{props.title}</h4>
        <p>{props.subTitle}</p>
    </li>
    <li className="date">
        <h4>Date added</h4>
        <p>{props.dateAdded}</p>
    </li>
    <li className="played">
        <h4>Heure Played</h4>
        <p>{props.heurePlayed} H {props.minutePlayed} Mins</p>
    </li>
    <li className="currently">
        <h4>Currently</h4>
        <p>Downloaded</p>
    </li>
    <li className="button">
        <LinkBtn type={props.linkDownload.isDownloaded ? "border-link" : "border-link-grey"} content={props.linkDownload.isDownloaded ? "download" : "downloaded"} href={props.linkDownload.href} />
    </li>
</ul>
  )
}
