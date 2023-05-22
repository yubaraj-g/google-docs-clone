import { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { documentNameRedux, getDocumentName } from '../../redux/reducers/documentNameSlice'
import { ArrowDown, InsertLink, Lock } from '../jsx-icons'
import { changeModalState } from '../../redux/reducers/modalSlice'
import { CrossXmark } from '../jsx-icons'

const ShareModal = () => {
    const dispatch = useDispatch()
    const documentName = useSelector(documentNameRedux)
    const [name, setName] = useState(documentName)
    const [skipped, setSkipped] = useState(false)

    // function to skip the rename dialogue when clicked on skip
    const skip = () => {
        setSkipped(true)
    }
    // function to close modal when clicked on "Done" button in the end
    const closeModal = () => {
        dispatch(changeModalState(false))
    }

    if (documentName === 'Untitled document' && skipped === false) {
        return <>
            <div className='flex flex-col p-6 justify-between w-[24%] h-[31%] bg-white rounded-md relative' onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
            }}>
                <button className='w-fit h-fit p-1 rounded-full absolute hover:bg-gray-100 right-6 top-6' onClick={closeModal}>
                    <CrossXmark />
                </button>
                <h2 className='text-[1.35rem] text-gray-800'>Name before sharing</h2>
                <h6 className='text-xs -mt-4'>Give your untitled document a name before it's shared:</h6>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                        dispatch(getDocumentName(e.target.value))
                    }}
                    className='px-3 py-1.5 border border-gray-400/50 rounded outline-blue-500/90'
                />
                <div className='btn-grp flex justify-end gap-3'>
                    <button
                        type='button'
                        className='px-6 py-1.5 rounded bg-white border hover:bg-blue-50 text-blue-500'
                        onClick={(e) => {
                            e.preventDefault()
                            skip()
                            e.stopPropagation()
                        }}
                    >
                        Skip
                    </button>
                    <button
                        type='button'
                        className='px-6 py-1.5 rounded bg-blue-600 text-white'
                        onClick={(e) => {
                            e.preventDefault()
                            skip()
                            e.stopPropagation()
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </>
    } else {
        return (
            <>
                <div className='flex flex-col w-1/3 h-[55%] bg-white rounded-md py-6 justify-between transition-all' onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}>

                    <h2 className='text-[1.35rem] mx-6 cursor-text'>Share "{name}"</h2>
                    <div className='px-6 w-full'>
                        <input
                            type="text"
                            className='px-5 py-3 rounded border border-gray-400 hover:border-black hover:border-b-2 w-full placeholder:text-gray-600 placeholder:text-sm hover:-mb-[1px]'
                            placeholder='Add people and groups'
                        />
                    </div>

                    <h3 className='mx-6 -mb-3 font-medium mt-[1px] cursor-text'>People with access</h3>
                    <div className='flex justify-between w-full hover:bg-gray-100 px-6 items-center py-2 mb-1'>
                        <div className='flex gap-2 items-center'>
                            <img src="/assets/react.svg" alt="" className='bg-slate-800 rounded-full px-1.5 w-8 h-8' />
                            <div className='flex flex-col'>
                                <h4 className='font-medium'>React (you)</h4>
                                <h6 className='text-xs'>reactjs@facebook.com</h6>
                            </div>
                        </div>

                        <h5 className='text-sm mr-4'>Owner</h5>
                    </div>

                    <h3 className='px-6 -mb-4 font-medium cursor-text'>General access</h3>
                    <div className='w-full flex gap-2 hover:bg-gray-100 items-center py-2 px-6 mb-2'>
                        <div className='p-2 rounded-full bg-gray-200 flex justify-center items-center w-fit h-fit'>
                            <Lock />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <button className='flex gap-1 font-medium hover:bg-gray-200 rounded w-fit px-1 text-sm -ml-1'>Restricted <ArrowDown /></button>
                            <h6 className='text-xs'>Only people with access can open with the link</h6>
                        </div>
                    </div>

                    <div className='flex justify-between px-6'>
                        <button className='bg-white hover:bg-blue-50 text-blue-600 border border-gray-500 rounded-full px-4 py-2 flex gap-2 items-center text-sm'>
                            <InsertLink />
                            Copy link
                        </button>
                        <button
                            className='bg-blue-700/90 text-white rounded-full px-6 py-2 text-sm hover:bg-blue-700 transition-all hover:shadow hover:shadow-blue-400'
                            onClick={e => {
                                e.preventDefault()
                                closeModal()
                                e.stopPropagation()
                            }}
                        >Done</button>
                    </div>

                </div>
            </>
        )
    }
}

export default memo(ShareModal)