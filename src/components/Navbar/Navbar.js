import { NavLink } from 'react-router-dom'
import './Navbar.css'
import profile_header from '../../assets/profile-header.jpg'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

export default function Navbar(props) {

//   let darkStyle = {
//     cursor:"pointer",
//     fontSize: "22px",
//     border: "none",
//     width: "45px",
//     height: "45px",
//     borderRadius: "var(--brd-rd-cercul)",
//     display: "grid",
//     placeContent: "center",
//     color: "var(--yellow-color)",
//     background: "var(--dark-color)"
// }
// let lightStyle = {
//   cursor:"pointer",
//   fontSize: "22px",
//   border: "none",
//   width: "45px",
//   height: "45px",
//   borderRadius: "var(--brd-rd-cercul)",
//   display: "grid",
//   placeContent: "center",
//   color:"var(--light-color)",
//   background: "var(--dark-color)"
// }

  return (
    <ul className={"nav-bar " + props.menuBarIsActive}> 
        <li> <NavLink onClick={props.outsideMenuBar} to="/" activeClassName="active">Home</NavLink> </li>
        <li> <NavLink onClick={props.outsideMenuBar} to="/browse">Browse</NavLink> </li>
        <li> <NavLink onClick={props.outsideMenuBar} to="/details">Details</NavLink> </li>
        <li> <NavLink onClick={props.outsideMenuBar} to="/streams">Streams</NavLink> </li>
        <li> <NavLink onClick={props.outsideMenuBar} to="/profile">Profile <img src={profile_header} alt="" /></NavLink> </li>
        {/* {props.mode ==="dark" ? <button style={darkStyle} onClick={props.changeModeLight} > <BsFillSunFill/> </button> : <button style={lightStyle} onClick={props.changeModeDark} > <BsFillMoonFill/> </button>} */}
    </ul>
  )
}
