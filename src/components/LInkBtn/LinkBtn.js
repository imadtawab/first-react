import { NavLink } from "react-router-dom"
import "./LinkBtn.css"

export default function LinkBtn(props) {
  return (
    // Type : bg-link | border-link | border-link-grey
    <NavLink className={props.type} to={props.href}>{props.content}</NavLink>
  )
}
