import "./Container.css"

export default function Container(props) {
  return (
    <div className="container">
          <div className="content-container">

            {props.children}
            
          </div>
        </div>
  )
}
