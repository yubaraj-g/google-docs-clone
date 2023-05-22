import { memo, lazy, Suspense } from 'react'
const Toolbar = lazy(() => import('../../components/Toolbar/Toolbar'))
const EditorArea = lazy(() => import('../../components/EditorArea/EditorArea'))

const Editor = () => {

  return (
    <>
      <div className='w-screen min-h-screen flex flex-col bg-slate-50/75 overflow-auto'>

        <Suspense fallback={<h1>Loading...</h1>}>
          <Toolbar />
        </Suspense>

        <Suspense fallback={<h1>Loading...</h1>}>
          <EditorArea />
        </Suspense>

      </div>
    </>
  )
}

export default memo(Editor)