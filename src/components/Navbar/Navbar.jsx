import { memo, useRef, useState } from 'react'
import { Hamburger, Search } from '../../components/jsx-icons'
import { useDispatch } from 'react-redux'
import { showSidebar } from '../../redux/reducers/sidebarSlice'
import { Link } from 'react-router-dom'
import Tooltip from '../Tooltip/Tooltip'

const Navbar = () => {
  const dispatch = useDispatch()
  const hamburger = useRef()
  const searchParentDiv = useRef()
  const searchInput = useRef()
  // state to manage the tooltip
  const [tooltip, setTooltip] = useState(false)

  // event listener to change the look of the search input bar when focused or clicked
  document.addEventListener('click', (e) => {
    if (e.target === searchInput.current) {
      searchParentDiv.current.classList.add('bg-white')
      searchParentDiv.current.classList.add('shadow')
      searchParentDiv.current.classList.add('shadow-gray-400')
    } else if (e.target !== searchInput.current) {
      searchParentDiv?.current?.classList.remove('bg-white')
      searchParentDiv?.current?.classList.remove('shadow')
      searchParentDiv?.current?.classList.remove('shadow-gray-400')
    }
  })

  let timer
  const showTooltip = (e) => {
    timer = setTimeout(() => {
      setTooltip(true)
    }, 500)
    e.stopPropagation()
  }
  const hideTooltip = (e) => {
    setTooltip(false)
    if (timer !== undefined) {
      clearTimeout(timer)
      e.stopPropagation()
    }
  }


  return (
    <>
      <div className='bg-white w-full px-4 py-2 flex justify-between'>
        <Link to='/' className='flex items-center gap-1 -ml-1'>
          <button
            className='bg-transparent hover:bg-gray-200/60 p-3 rounded-full cursor-pointer relative'
            ref={hamburger}
            onClick={(e) => {
              // call the redux function to change the left sidebar state to show it when clicked in this button
              dispatch(showSidebar(true))
              e.preventDefault()
              // Prevent the event bubbling so that it doesn't call the parent events to hide the left sidebar since document has an event to hide the sidebar when clicked outside of the sidebar
              e.stopPropagation()
            }}
            onMouseOver={showTooltip}
            onMouseOut={hideTooltip}
          >
            <Hamburger />
            {
              tooltip ?
              <Tooltip data={'Main menu'} /> : null
            }
          </button>
          <div className='w-10 cursor-pointer'>
            <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" alt="g-docs" className='w-fit' />
          </div>
          <h2 className='font-normal text-[1.35rem] text-gray-600 ml-1 cursor-pointer'>Docs</h2>
        </Link>
        <div className='bg-gray-100 flex rounded-lg w-1/2 items-center px-2' ref={searchParentDiv}>
          <div className='p-2 hover:bg-gray-300/50 rounded-full cursor-pointer'>
            <Search />
          </div>
          <input type="text" placeholder='Search' id='search_input' className='w-full bg-transparent outline-none rounded-lg px-2' ref={searchInput} />
        </div>
        <div className='w-10 h-10 flex my-1 hover:bg-gray-200 rounded-full justify-center items-center p-1 cursor-pointer'>
          <div className='bg-gray-800 rounded-full w-8 h-8 flex'>
            <img src="/assets/react.svg" alt="profile" className='w-3/4 m-auto' />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Navbar)