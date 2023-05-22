import { memo, lazy, useState, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { toolbarExpanded } from '../../redux/reducers/toolbarSlice'
import { ArrowDown } from '../jsx-icons'

const SidebarRight = lazy(() => import('../SidebarRight/SidebarRight'))

const EditorArea = () => {
  const toolbarExpand = useSelector(toolbarExpanded)  // toolbar state from redux
  const [textareaValue, setTextareaValue] = useState('')

  const [expandRightSidebar, setExpandRightSidebar] = useState(false)

  const showRightToolbar = () => {
    setExpandRightSidebar(!expandRightSidebar)
  }

  return (
    <>
      <div className={`w-[99%] flex ml-4 mr-4 mb-4 fixed overflow-hidden ${toolbarExpand ? 'mt-[7.5rem]' : 'mt-16'}`}>

        <div className='h-screen border-l border-t border-gray-300 flex overflow-y-scroll w-full mr-1 pt-4 pb-36 justify-center z-10'>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className='w-[52rem] h-[75rem] border border-gray-300 outline-none text-sm px-28 py-24 font-medium'
            value={textareaValue}
            onChange={(e) => {
              setTextareaValue(e.target.value)
            }} />

        </div>

        {/* div which shows mini sidebar on the right side */}
        <div className={`h-screen right-0 transition-all ${expandRightSidebar ? 'w-16' : 'w-0'}`}>
          {
            expandRightSidebar ?
              <Suspense fallback={<h5>Loading...</h5>}>
                <SidebarRight />
              </Suspense>
              :
              null
          }
        </div>

        {/* button which lets us expand the sidebar on the right */}
        <button
          className={expandRightSidebar ? 'absolute bottom-32 w-10 h-10 rounded-full bg-gray-50 right-3 hover:bg-gray-200 flex justify-center items-center' : 'absolute w-8 hover:w-[3.3rem] h-10 bottom-32 -right-2 bg-gray-200 transition-all rounded-l-full shadow-md shadow-gray-400 flex justify-start items-center pl-1 hover:pl-2.5 z-50'}
          onClick={showRightToolbar}
        >
          <div className={`flex justify-center items-center ${expandRightSidebar ? '-rotate-90' : 'rotate-90'}`}>
            <ArrowDown />
          </div>
        </button>

      </div>
    </>
  )
}

export default memo(EditorArea)