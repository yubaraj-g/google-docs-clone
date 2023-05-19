import Navbar from '../../components/Navbar/Navbar'
import MainSection from '../../components/MainSection/MainSection'
import Sidebar from '../../components/SidebarLeft/SidebarLeft'

const Home = () => {
  return (
    <div className='w-full flex items-center min-h-screen flex-col bg-white'>
      <Navbar />
      <Sidebar />
      <MainSection />
    </div>
  )
}

export default Home