import { memo, useState, useEffect, lazy, Suspense, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, Chat, Lock, VideoCall } from '../jsx-icons'
import { toolbarExpanded } from '../../redux/reducers/toolbarSlice'
import { useDispatch, useSelector } from 'react-redux'
import { changeModalState, modalState } from '../../redux/reducers/modalSlice'
import { getDocumentName } from '../../redux/reducers/documentNameSlice'
import Tooltip from '../Tooltip/Tooltip'
// import ShareModal from '../ShareModal/ShareModal'

const ShareModal = lazy(() => import('../ShareModal/ShareModal'))

const PrimaryToolbar = () => {
    const dispatch = useDispatch()
    const stateModal = useSelector(modalState)
    // redux state to see if toolbar is expanded or not
    const toolbarExpand = useSelector(toolbarExpanded)
    const documentTitle = 'Untitled document' // just an initial state
    const [documentName, setDocumentName] = useState(documentTitle)

    // Tooltip states
    const [docsLogoTooltip, setDocsLogoTooltip] = useState(false)
    const [inputRenameTooltip, setInputRenameTooltip] = useState(false)
    const [chatTooltip, setChatTooltip] = useState(false)
    const [videocallTooltip, setVideocallTooltip] = useState(false)
    const [shareTooltip, setShareTooltip] = useState(false)
    const [profileTooltip, setProfileTooltip] = useState(false)
    // Storing timer for tooltip
    let timerState

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

                <Link
                    to='/'
                    className='w-[2.4rem] cursor-pointer -m-1 relative'
                    onMouseEnter={(e) => {
                        timerState = setTimeout(() => {
                            setDocsLogoTooltip(true)
                        }, 400)
                        e.stopPropagation()
                    }}
                    onMouseOut={(e) => {
                        setDocsLogoTooltip(false)
                        clearTimeout(timerState)
                        e.stopPropagation()
                    }}
                >
                    <img src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png" alt="g-docs" className='w-fit -mb-1' />
                    {
                        docsLogoTooltip
                            ? <Tooltip data={'Docs home'} />
                            : null
                    }
                </Link>

                <div className='flex flex-col flex-grow min-w-fit' id='primary_toolbar_div'>
                    <div className='w-fit h-fit relative'>
                        <input
                            type='text'
                            className='bg-transparent text-lg px-1 rounded border border-transparent hover:border-gray-500 max-w-fit'
                            value={documentName}
                            onChange={documentNameChange}
                            onMouseEnter={(e) => {
                                timerState = setTimeout(() => {
                                    setInputRenameTooltip(true)
                                }, 400)
                                e.stopPropagation()
                            }}
                            onMouseOut={(e) => {
                                setInputRenameTooltip(false)
                                clearTimeout(timerState)
                                e.stopPropagation()
                            }}
                        />
                        {
                            inputRenameTooltip ? <Tooltip data={'Rename'} /> : null
                        }
                    </div>

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

                    <button
                        className='rounded-full hover:bg-gray-200/75 p-2 -mr-2 relative'
                        onMouseEnter={(e) => {
                            timerState = setTimeout(() => {
                                setChatTooltip(true)
                            }, 400)
                            e.stopPropagation()
                        }}
                        onMouseOut={(e) => {
                            setChatTooltip(false)
                            clearTimeout(timerState)
                            e.stopPropagation()
                        }}
                    >
                        <Chat />
                        {
                            chatTooltip ?
                                <div className='absolute top-10 -left-24'>
                                    <Tooltip data={'Open comment history (Ctrl+Alt+Shift+A)'} />
                                </div> :
                                null
                        }
                    </button>

                    <button
                        className='flex items-center gap-1 hover:bg-gray-200/75 rounded-full px-4 py-2 -mr-2 relative'
                        onMouseEnter={(e) => {
                            timerState = setTimeout(() => {
                                setVideocallTooltip(true)
                            }, 400)
                            e.stopPropagation()
                        }}
                        onMouseOut={(e) => {
                            setVideocallTooltip(false)
                            clearTimeout(timerState)
                            e.stopPropagation()
                        }}
                    >
                        <VideoCall />
                        <ArrowDown />
                        {
                            videocallTooltip ?
                                <div className='absolute top-10 -left-24'>
                                    <Tooltip data={"Join a call here or present this tab to the call"} />
                                </div> :
                                null
                        }
                    </button>

                    <div
                        className='bg-[#c2e7ff] hover:bg-cyan-400 hover:shadow hover:shadow-gray-400 rounded-full px-6 py-[0.56rem] cursor-pointer relative'
                        onClick={(e) => {
                            shareFunction()
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseEnter={(e) => {
                            timerState = setTimeout(() => {
                                setShareTooltip(true)
                            }, 400)
                            e.stopPropagation()
                        }}
                        onMouseOut={(e) => {
                            setShareTooltip(false)
                            clearTimeout(timerState)
                            e.stopPropagation()
                        }}
                    >
                        <div className='-ml-[0.2rem] flex items-center justify-center gap-2 font-medium text-[0.93rem]'>
                            <Lock />
                            <span>Share</span>
                        </div>
                        {
                            // This is to show the tooltip
                            shareTooltip ? <Tooltip data={'Private to only me'} /> : null
                        }

                        {
                            // This is to show the modal
                            stateModal === true ?
                                <Suspense fallback={<div className='w-screen h-screen text-white'>Loading...</div>}>
                                    <div onClick={(e) => {
                                        closeModal()
                                        e.preventDefault()
                                        e.stopPropagation()
                                    }} className='fixed top-0 left-0 bg-[#0009] w-screen h-screen z-50 flex justify-center items-center'>
                                        <ShareModal />
                                    </div>
                                </Suspense> :
                                null
                        }
                    </div>

                    <div
                        className='w-10 h-10 flex my-1 hover:bg-gray-200 rounded-full justify-center items-center p-1 cursor-pointer relative'
                        
                    >
                        <div
                            className='bg-gray-800 rounded-full w-8 h-8 flex'
                            onMouseEnter={(e) => {
                                timerState = setTimeout(() => {
                                    setProfileTooltip(true)
                                }, 400)
                                e.stopPropagation()
                            }}
                            onMouseOut={(e) => {
                                setProfileTooltip(false)
                                clearTimeout(timerState)
                                e.stopPropagation()
                            }}
                        >
                            <img src="/assets/react.svg" alt="profile" className='w-3/4 m-auto' />
                        </div>

                        {
                            profileTooltip ?
                                <div className='absolute -bottom-16 -left-32 text-xs min-w-fit w-44 flex flex-col whitespace-nowrap bg-gray-900/75 text-white font-semibold rounded p-2 z-50'>
                                    <h4 className='font-semibold text-xs'>Google Account</h4>
                                    <h6 className='text-xs text-gray-200'>React</h6>
                                    <h6 className='text-xs text-gray-200'>reactjs@facebook.com</h6>
                                </div> : null
                        }
                    </div>

                </div>

            </div>
        </>
    )
}

export default memo(PrimaryToolbar)