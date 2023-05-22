import { memo } from 'react'
import { Plus } from '../jsx-icons'

const SidebarRight = () => {
  return (
    <>
      <div className='w-16 h-screen right-0 flex flex-col items-center gap-4'>
        <button className='flex p-2.5 rounded-full hover:bg-gray-200/50'>
          <img src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png" alt="calendar" className='w-5 h-5 m-auto' />
        </button>
        <button className='flex p-2.5 rounded-full hover:bg-gray-200/50'>
          <img src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png" alt="calendar" className='w-5 h-5 m-auto' />
        </button>
        <button className='flex p-2.5 rounded-full hover:bg-gray-200/50'>
          <img src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png" alt="calendar" className='w-5 h-5 m-auto' />
        </button>
        <button className='flex p-2.5 rounded-full hover:bg-gray-200/50'>
          <img src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png" alt="calendar" className='w-5 h-5 m-auto' />
        </button>
        <button className='flex p-2.5 rounded-full hover:bg-gray-200/50'>
          <img src="https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png" alt="calendar" className='w-5 h-5 m-auto' />
        </button>

        <div className='border-b border-gray-300 w-5'></div>

        <button className='flex p-2.5 rounded-full hover:bg-gray-200/50'>
          <Plus />
        </button>
      </div>
    </>
  )
}

export default memo(SidebarRight)