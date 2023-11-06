import { useContext } from "react"
import { GalleryContext } from "../App"
import checkbox from "../utils/checkbox"

const Checkbox = ({ imageNum }) => {
  const { setCurrentChecked, currentChecked, currentHovered } = useContext(GalleryContext)

  if (currentChecked.includes(Number(imageNum)) || Number(currentHovered) === Number(imageNum)) {
    return (<input
      onChange={e => {
        checkbox(e, currentChecked, setCurrentChecked)
      }} value={Number(imageNum)} type="checkbox" checked={currentChecked.includes(Number(imageNum)) ? "checked" : ''} className="animate-fade animate-duration-200 animate-ease-linear checkbox-info absolute top-2 left-2 z-20 h-5 w-5 cursor-pointer" />
    )
  } else
    return null
}
export default Checkbox;