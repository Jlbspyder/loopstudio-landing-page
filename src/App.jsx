import { useState } from 'react'
import Hero from './components/Hero'
import MobileMenu from './components/MobileMenu'


function App() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className='container'>
      {!open && <Hero open={handleOpen} />}
        {open && <MobileMenu open={handleOpen}/>}
    </div>
  )
}

export default App
