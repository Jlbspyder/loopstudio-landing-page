import { useState } from 'react'
import Hero from './components/Hero'
import MobileMenu from './components/MobileMenu'


function App() {
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setOpen((prev) => !prev)
    setIsOpen((prev) => !prev)
  }
  return (
    <div className='container'>
        <Hero open={handleOpen} />
        {open && <MobileMenu open={handleOpen}/>}
    </div>
  )
}

export default App
