import { useContext } from "react";
import deleteImage from "../utils/deleteImage";
import { BsFillTrashFill } from 'react-icons/bs';
import { GalleryContext } from "../App";

const DeleteButton = () => {
  const { imageIndex, setCurrentChecked, currentChecked, setImageIndex } = useContext(GalleryContext);

  return (
    <button onClick={() => deleteImage(imageIndex, currentChecked, setImageIndex, setCurrentChecked)} className="text-[18px] text-red-500 hover:underline">
      {currentChecked.length > 1 ? `Delete Files` : `Delete File`}
    </button>
  );
}

export default DeleteButton;
