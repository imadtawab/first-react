import "./CardHowToStart.css"

export default function CardHowToStart(props) {
  return (
    <div className="card-how-to-start">
        <div className="image">
            <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <h4>{props.title}</h4>
        <p>{props.children}</p>
  </div>
  )
}
