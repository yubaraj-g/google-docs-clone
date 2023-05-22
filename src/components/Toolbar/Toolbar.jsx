import { memo, Suspense, lazy } from 'react'
import { toolbarExpanded } from '../../redux/reducers/toolbarSlice'
import { useSelector } from 'react-redux'

const PrimaryToolbar = lazy(() => import('../PrimaryToolbar/PrimaryToolbar'))
const SecondaryToolbar = lazy(() => import('../SecondaryToolbar/SecondaryToolbar'))

const Toolbar = () => {
  const toolbarExpand = useSelector(toolbarExpanded)  // Toolbar state from redux


  return (
    <>
      <div className={`bg-slate-50/50 w-full px-4 flex flex-col items-center gap-1 fixed top-0 z-20 left-0 ${!toolbarExpand ? 'py-2' : ''}`}>

        <Suspense fallback={<h3>Loading...</h3>}>
          <PrimaryToolbar />
        </Suspense>

        <Suspense fallback={<h3>Loading...</h3>}>
          <SecondaryToolbar />
        </Suspense>

      </div>
    </>
  )
}

export default memo(Toolbar)