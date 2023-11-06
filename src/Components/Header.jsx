import { FcGallery } from 'react-icons/fc'
import { useContext } from 'react'
import { GalleryContext } from '../App'
import DeleteButton from './DeleteButton'


const Header = () => {
  const { currentChecked } = useContext(GalleryContext)

  return (
    <div className='transition-all duration-300 flex justify-between items-center relative mt-4 bottom-2'>
      <div className='sm:ml-4 flex items-center justify-center gap-2'>
      {currentChecked.length > 0 ?
        <p className='animate-fade-down relative animate-once animate-duration-200 left-1 text-xs sm:text-lg animate-ease-linear'>{currentChecked.length} Images Selected</p>
        :
        <h3 className='font-semibold'>Gallery</h3>
      }
      </div>
      {currentChecked.length > 0 &&
        <div className='absolute flex right-4 gap-4 items-center'>
          <DeleteButton currentChecked={currentChecked} />
      </div>}
    </div>
  )
}
export default Header