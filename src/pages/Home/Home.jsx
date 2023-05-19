import { useState, useCallback } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MainSection from '../../components/MainSection/MainSection'
import Sidebar from '../../components/SidebarLeft/SidebarLeft'

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const showSidebarFunction = useCallback(() => {
    setShowSidebar(!showSidebar)
  }, [])

  return (
    <div className='w-full flex items-center min-h-screen flex-col bg-white'>
      <Navbar showSidebar={showSidebarFunction} />
      {
        showSidebar ?
        <Sidebar /> : null
      }
      <MainSection />
    </div>
  )
}

export default Home