import { memo, useRef } from 'react'
import { Hamburger, Search } from '../../assets/'

const Navbar = () => {
  const searchParentDiv = useRef()
  const searchInput = useRef()
  document.addEventListener('click', (e) => {
    if (e.target === searchInput.current) {
      searchParentDiv.current.classList.add('bg-white')
      searchParentDiv.current.classList.add('shadow')
      searchParentDiv.current.classList.add('shadow-gray-400')
    } else {
      searchParentDiv?.current?.classList.remove('bg-white')
      searchParentDiv?.current?.classList.remove('shadow')
      searchParentDiv?.current?.classList.remove('shadow-gray-400')
    }
  })

  return (
    <>
      <div className='bg-white w-full px-4 py-2 flex justify-between'>
        <div className='flex items-center gap-1 -ml-1'>
          <div className='hover:bg-gray-200/60 p-3 rounded-full cursor-pointer'>
            <Hamburger />
          </div>
          <div className='w-10 cursor-pointer'>
            <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" alt="g-docs" className='w-fit' />
          </div>
          <h2 className='font-normal text-[1.35rem] text-gray-600 ml-1 cursor-pointer'>Docs</h2>
        </div>
        <div className='bg-gray-100 flex rounded-lg w-1/2 items-center px-2' ref={searchParentDiv}>
          <div className='p-2 hover:bg-gray-300/50 rounded-full cursor-pointer'>
            <Search />
          </div>
          <input type="text" placeholder='Search' id='search_input' className='w-full bg-transparent outline-none rounded-lg px-2' ref={searchInput} />
        </div>
        <div className='w-10 h-10 flex my-1 hover:bg-gray-200 rounded-full justify-center items-center p-1 cursor-pointer'>
          <div className='bg-gray-800 rounded-full w-8 h-8 flex'>
            <img src=".../../src/assets/react.svg" alt="" className='w-3/4 m-auto' />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Navbar)