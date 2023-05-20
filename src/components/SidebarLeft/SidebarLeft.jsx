import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showSidebar, sidebarState } from '../../redux/reducers/sidebarSlice'
// import s from '../../assets/google.png'

const SidebarLeft = () => {
  const dispatch = useDispatch()
  const sidebarVisibility = useSelector(sidebarState)
  const sidebarRef = useRef()

  document.addEventListener('click', (e) => {
    if (e.target !== sidebarRef.current) {
      dispatch(showSidebar(false))
    } else {
      dispatch(showSidebar(true))
    }
    e.stopPropagation()
  })

  return (
    <div className={sidebarVisibility ? 'absolute left-0 top-0 bg-gray-50 flex flex-col px-6 py-4 w-72 shadow-lg shadow-gray-500 min-h-screen transition-all' : 'absolute -left-72 top-0 bg-gray-50 flex flex-col px-6 py-4 w-72 shadow-lg shadow-gray-500 min-h-screen transition-all'} ref={sidebarRef}>
      <div className='flex gap-2 items-center cursor-pointer'>
        <div className='w-[4.5rem] h-8 flex justify-center items-center -mb-1'>
          <img src="/assets/img-icons/google.png" alt="google" className='w-fit object-cover bg-transparent' />
        </div>
        <h3 className='font-normal text-[1.35rem] text-gray-600 ml-0'>Docs</h3>
      </div>
    </div>
  )
}

export default SidebarLeft