import { memo, useState, useEffect, lazy, Suspense, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, Chat, Lock, VideoCall } from '../jsx-icons'
import { toolbarExpanded } from '../../redux/reducers/toolbarSlice'
import { useDispatch, useSelector } from 'react-redux'
import { changeModalState, modalState } from '../../redux/reducers/modalSlice'
import { getDocumentName } from '../../redux/reducers/documentNameSlice'
// import ShareModal from '../ShareModal/ShareModal'

const ShareModal = lazy(() => import('../ShareModal/ShareModal'))

const PrimaryToolbar = () => {
    const dispatch = useDispatch()
    const stateModal = useSelector(modalState)
    // redux state to see if toolbar is expanded or not
    const toolbarExpand = useSelector(toolbarExpanded)
    const documentTitle = 'Untitled document' // just an initial state
    const [documentName, setDocumentName] = useState(documentTitle)

    // change the name of the document
    const documentNameChange = (e) => {
        setDocumentName(e.target.value)
    }

    // Using debouncing to prevent changing title in every keypress or change of title
    useEffect(() => {
        let timer = setTimeout(() => {
            document.title = documentName
            dispatch(getDocumentName(documentName))   // Sending the name to redux
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [documentName])

    const shareFunction = () => {
        dispatch(changeModalState(true))
    }
    const closeModal = () => {
        dispatch(changeModalState(false))
    }


    return (
        <>
            <div className={`flex w-full items-center py-1.5 gap-1.5 ${toolbarExpand ? 'h-fit' : 'hidden'}`}>

                <Link to='/' className='w-[2.4rem] cursor-pointer -m-1'>
                    <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" alt="g-docs" className='w-fit -mb-1' />
                </Link>

                <div className='flex flex-col flex-grow min-w-fit' id='primary_toolbar_div'>
                    <input type='text' className='bg-transparent text-lg px-1 rounded border border-transparent hover:border-gray-500 max-w-fit' value={documentName} onChange={documentNameChange} />

                    <div className='flex gap-1 font-[400]'>
                        <button className='px-1.5 text-[0.9rem] hover:bg-gray-200/75 rounded'>File</button>
                        <button className='px-1.5 text-[0.9rem] hover:bg-gray-200/75 rounded'>Edit</button>
                        <button className='px-1.5 text-[0.9rem] hover:bg-gray-200/75 rounded'>View</button>
                        <button className='px-1.5 text-[0.9rem] hover:bg-gray-200/75 rounded'>Insert</button>
                        <button className='px-1.5 text-[0.9rem] hover:bg-gray-200/75 rounded'>Format</button>
                        <button className='px-1.5 text-[0.9rem] hover:bg-gray-200/75 rounded'>Tools</button>
                        <button className='px-1.5 text-[0.9rem] hover:bg-gray-200/75 rounded'>Extensions</button>
                        <button className='px-1.5 text-[0.9rem] hover:bg-gray-200/75 rounded'>Help</button>
                    </div>
                </div>

                <div className='w-fit flex gap-4 items-center'>

                    <button className='rounded-full hover:bg-gray-200/75 p-2 -mr-2'>
                        <Chat />
                    </button>

                    <button className='flex items-center gap-1 hover:bg-gray-200/75 rounded-full px-4 py-2 -mr-2'>
                        <VideoCall />
                        <ArrowDown />
                    </button>

                    <div
                        className='bg-[#c2e7ff] hover:bg-cyan-400 hover:shadow hover:shadow-gray-400 rounded-full px-6 py-[0.56rem] cursor-pointer relative'
                        onClick={(e) => {
                            shareFunction()
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                    >
                        <div className='-ml-[0.2rem] flex items-center justify-center gap-2 font-medium text-[0.93rem]'>
                            <Lock />
                            <span>Share</span>
                        </div>

                        {
                            stateModal === false ?
                                null
                                :
                                <Suspense fallback={<div className='w-screen h-screen text-white'>Loading...</div>}>
                                    <div onClick={(e) => {
                                        closeModal()
                                        e.preventDefault()
                                        e.stopPropagation()
                                    }} className='fixed top-0 left-0 bg-[#0009] w-screen h-screen z-50 flex justify-center items-center'>
                                        <ShareModal />
                                    </div>
                                </Suspense>
                        }
                    </div>

                    <div className='w-10 h-10 flex my-1 hover:bg-gray-200 rounded-full justify-center items-center p-1 cursor-pointer'>
                        <div className='bg-gray-800 rounded-full w-8 h-8 flex'>
                            <img src="/assets/react.svg" alt="profile" className='w-3/4 m-auto' />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default memo(PrimaryToolbar)