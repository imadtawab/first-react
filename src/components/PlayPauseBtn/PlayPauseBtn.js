import { BsPlayFill } from 'react-icons/bs'
import './PlayPauseBtn.css'

export default function PlayPauseBtn(props) {
  return (
    <a href={props.href} className="PlayPauseBtn">
        <BsPlayFill/>
  </a>
  )
}
