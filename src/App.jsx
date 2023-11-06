import { createContext, useState } from 'react'
import Header from './Components/Header'
import Gallery from './Components/Gallery'
import INITIAL_ARRAY from './utils/constant'

// Context
export const GalleryContext = createContext(null)

export default function App() {
  const [currentChecked, setCurrentChecked] = useState([])
  const [currentHovered, setCurrentHovered] = useState(-1)

  const [imageIndex, setImageIndex] = useState(INITIAL_ARRAY)
  const [currentImage, setCurrentImage] = useState(1)

  // Context values
  const contextValue = {
    currentChecked, setCurrentChecked, currentHovered, setCurrentHovered, imageIndex, setImageIndex, currentImage, setCurrentImage
  }

  return (
    <GalleryContext.Provider value={contextValue}>
      <main className='bg-[#ebeff4] transition-all duration-300 min-h-screen text-slate-800 flex items-center justify-center'>
        <section className='bg-white shadow-lg text-2xl top-[-0.5rem] font-semibold flex flex-col rounded-lg w-fit h-full'>
          <header className='w-full border-b border-slate-400 py-2 px-3'>
            <Header />
          </header>
          <div className='gallery px-3 lg:h-[80vh] overflow-y-auto'>
            <Gallery />
          </div>
        </section>
      </main>
    </GalleryContext.Provider>
  )
}