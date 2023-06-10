import LinkBtn from "../LInkBtn/LinkBtn"
import "./SectionStructure.css"

export default function SectionStructure(props) {
  let checkLinkBtn = () => {
    if(props.linkBtnContent){
      return (
        <div className="footer-link">
              <LinkBtn type="bg-link" href={props.linkBtnHref} content={props.linkBtnContent} />
          </div>
      )
    }
  }
  let checkTitle = () => {
    if(props.title || props.subTitle){
      return <h2><span>{props.title}</span> {props.subTitle}</h2>

    }
  }
  return (
    <div className={(props.linkBtnContent?"section-structure add-padding-bottom":"section-structure") + (props.typeTitle === "center" ?" centerTitle":"") + (props.typeTitle === "none" ?" noneTitle":"") + (props.margin === "none" ? " noneMargin" : "")}>
        {checkTitle()}
        {props.children}
        {checkLinkBtn()}
    </div>
  )
  }
