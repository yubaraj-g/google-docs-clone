import { memo, useState } from 'react'
import { Undo, Printer, Paint, ArrowDown, InsertLink, Photo, BarsLeft, BarsArrow } from '../jsx-icons'
import { useDispatch, useSelector } from 'react-redux'
import { expandToolbar, toolbarExpanded } from '../../redux/reducers/toolbarSlice'
import Tooltip from '../Tooltip/Tooltip'

const SecondaryToolbar = () => {
    const dispatch = useDispatch()
    // redux state of toolbar expanded or not
    const toolbarExpand = useSelector(toolbarExpanded)
    const [fontsize, setFontsize] = useState(11)
    // states for tooltip
    const [tooltipUndo, setTooltipUndo] = useState(false)
    const [tooltipRedo, setTooltipRedo] = useState(false)
    const [tooltipPrint, setTooltipPrint] = useState(false)
    const [tooltipSpelling, setTooltipSpelling] = useState(false)
    const [tooltipPaint, setTooltipPaint] = useState(false)
    const [tooltipZoom, setTooltipZoom] = useState(false)
    const [tooltipStyles, setTooltipStyles] = useState(false)
    const [tooltipFont, setTooltipFont] = useState(false)
    const [fontSizeDecrease, setFontSizeDecrease] = useState(false)
    const [tooltipFontsize, setTooltipFontsize] = useState(false)
    const [fontSizeIncrease, setFontSizeIncrease] = useState(false)
    const [tooltipBold, setTooltipBold] = useState(false)
    const [tooltipItalic, setTooltipItalic] = useState(false)
    const [tooltipUnderline, setTooltipUnderline] = useState(false)
    const [tooltipTextColor, setTooltipTextColor] = useState(false)
    const [tooltipHighlightColor, setTooltipHighlightColor] = useState(false)
    const [tooltipInsertLink, setTooltipInsertLink] = useState(false)
    const [tooltipInsertImage, setTooltipInsertImage] = useState(false)
    const [tooltipAlign, setTooltipAlign] = useState(false)
    const [tooltipLineSpace, setTooltipLineSpace] = useState(false)

    // function to change font size from input box
    const fontSizeChange = (e) => {
        if (e.target.value > 0) {
            setFontsize(e.target.value)
        } else {
            alert('Font size cannot be empty or less than 1')
        }
    }

    // function to collapse the upper(primary) toolbar
    const toolbarCollapse = () => {
        if (toolbarExpand === false) {
            dispatch(expandToolbar(true))
        } else {
            dispatch(expandToolbar(false))
        }
    }

    // timer variable to store timer for the tooltip
    let timer
    // function to make any tooltip state true after hovering on it's button for a while
    const tooltipHandle = (setState) => {
        timer = setTimeout(() => {
            setState(true)
        }, 300)
    }

    return (
        <>
            <div className='flex w-full justify-between rounded-full px-3 py-1 bg-[#edf2fa] items-center'>
                <div className='flex items-center gap-[0.08rem]'>
                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipUndo)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipUndo(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 p-2 rounded relative'
                    >
                        <div className='rotate-90'>
                            <Undo /> {/** This is Undo component */}
                        </div>
                        {
                            tooltipUndo ? <Tooltip data={'Undo (Ctrl+Z)'} /> : null
                        }
                    </button>
                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipRedo)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipRedo(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 p-2 rounded relative'
                    >
                        <div className='-rotate-90 transform scale-x-[-1]'>
                            <Undo /> {/* This is Redo component */}
                        </div>
                        {
                            tooltipRedo ? <Tooltip data={'Redo (Ctrl+Y)'} /> : null
                        }
                    </button>
                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipPrint)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipPrint(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 p-2 rounded relative'
                    >
                        <Printer />
                        {
                            tooltipPrint ? <Tooltip data={'Print (Ctrl+P)'} /> : null
                        }
                    </button>
                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipSpelling)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipSpelling(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 p-2 rounded flex relative'
                    >
                        <img src="/assets/img-icons/spell-check.png" alt="spell-check" className='w-4 h-4 m-auto' />
                        {
                            tooltipSpelling ? <div className='absolute top-8 -left-20'>
                                <Tooltip data={'Spelling and grammar check (Ctrl+Alt+X)'} />
                            </div> : null
                        }
                    </button>
                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipPaint)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipPaint(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 p-2 rounded relative'
                    >
                        <Paint />
                        {
                            tooltipPaint ? <Tooltip data={'Paint format'} /> : null
                        }
                    </button>
                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipZoom)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipZoom(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 py-1.5 px-3 rounded flex gap-1 items-center text-sm font-medium relative'
                    >
                        <span>100%</span>
                        <ArrowDown />
                        {
                            tooltipZoom ? <div className='absolute top-8 left-5'>
                                <Tooltip data={'Zoom'} />
                            </div> : null
                        }
                    </button>

                    <div className='border-r h-5 border-gray-300 mx-1'></div>

                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipStyles)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipStyles(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 py-1.5 px-3 rounded flex gap-1 items-center text-sm font-medium relative'
                    >
                        <span>Normal text</span>
                        <ArrowDown />
                        {
                            tooltipStyles ?
                                <div className='absolute top-8 left-9'>
                                    <Tooltip data={'Styles'} />
                                </div>
                                : null
                        }
                    </button>

                    <div className='border-r h-5 border-gray-300 mx-1'></div>

                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipFont)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipFont(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 py-1.5 px-3 rounded flex gap-3 items-center text-sm font-medium relative'
                    >
                        <span>Arial</span>
                        <ArrowDown />
                        {
                            tooltipFont ? <div className='absolute top-8 left-9'>
                                <Tooltip data={'Font'} />
                            </div> : null
                        }
                    </button>

                    <div className='border-r h-5 border-gray-300 mx-1'></div>

                    <div className='flex gap-1 bg-transparent'>
                        <button
                            onClick={() => { }}
                            onMouseEnter={(e) => {
                                tooltipHandle(setFontSizeDecrease)
                                e.preventDefault()
                                e.stopPropagation()
                            }}
                            onMouseOut={() => {
                                setFontSizeDecrease(false)
                                if (timer) clearTimeout(timer)
                            }}
                            className='hover:bg-slate-200 px-2 rounded flex items-center font-medium text-lg relative'
                        >-
                            {
                                fontSizeDecrease ?
                                    <Tooltip data={'Decrease font size (Ctrl+Shift+,)'} />
                                    : null
                            }
                        </button>

                        <div className='relative flex flex-col h-full items-center justify-center py-1'>
                            <input
                                type="number"
                                className='bg-transparent h-full border border-gray-400 rounded px-2 py-0.5 text-sm font-medium w-8 relative'
                                value={fontsize}
                                onChange={fontSizeChange}
                                onMouseEnter={(e) => {
                                    tooltipHandle(setTooltipFontsize)
                                    e.preventDefault()
                                    e.stopPropagation()
                                }}
                                onMouseOut={() => {
                                    setTooltipFontsize(false)
                                    if (timer) clearTimeout(timer)
                                }}
                            />
                            {
                                tooltipFontsize ? <Tooltip data={'Font size'} /> : null
                            }
                        </div>

                        <button
                            onClick={() => { }}
                            onMouseEnter={(e) => {
                                tooltipHandle(setFontSizeIncrease)
                                e.preventDefault()
                                e.stopPropagation()
                            }}
                            onMouseOut={() => {
                                setFontSizeIncrease(false)
                                if (timer) clearTimeout(timer)
                            }}
                            className='hover:bg-slate-200 px-2 rounded flex items-center font-medium text-lg relative'
                        >+
                            {
                                fontSizeIncrease ?
                                    <Tooltip data={'Font size increase'} />
                                    : null
                            }
                        </button>
                    </div>

                    <div className='border-r h-5 border-gray-300 mx-1'></div>

                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipBold)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipBold(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='font-bold px-2 py-0.5 rounded hover:bg-slate-200 relative'
                    >B
                        {
                            tooltipBold ?
                                <Tooltip data={'Bold (Ctrl+B)'} />
                                : null
                        }
                    </button>
                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipItalic)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipItalic(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='font-medium px-2 py-2 rounded hover:bg-slate-200 relative'
                    >
                        <img src="/assets/img-icons/italic-icon.png" alt="italic" className='w-2.5 -mb-0.5' />
                        {
                            tooltipItalic ? <Tooltip data={'Italic (Ctrl+I)'} /> : null
                        }
                    </button>
                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipUnderline)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipUnderline(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='font-medium px-2 py-2 rounded hover:bg-slate-200 relative'
                    >
                        <img src="/assets/img-icons/underline.png" alt="italic" className='w-3.5 -mb-1' />
                        {
                            tooltipUnderline ? <Tooltip data={'Underline (Ctrl+U)'} /> : null
                        }
                    </button>

                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipTextColor)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipTextColor(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='flex flex-col font-medium text-sm px-1.5 py-1.5 -mb-0.5 rounded hover:bg-slate-200 items-center relative'
                    >
                        <span className='-mt-1'>A</span>
                        <div className='w-5 h-1 bg-black -mt-0.5'></div>

                        {
                            tooltipTextColor ? <Tooltip data={'Text color'} /> : null
                        }
                    </button>
                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipHighlightColor)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipHighlightColor(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='flex flex-col font-medium text-sm px-2 py-2 -mb-0.5 rounded hover:bg-slate-200 items-center relative'
                    >
                        <img src="/assets/img-icons/color-pencils.png" alt="italic" className='w-3.5 -mt-0.5' />
                        {
                            tooltipHighlightColor ? <Tooltip data={'Highlight color'} /> : null
                        }
                    </button>

                    <div className='border-r h-5 border-gray-300 mx-1'></div>

                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipInsertLink)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipInsertLink(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 p-1.5 rounded relative'
                    >
                        <InsertLink />
                        {
                            tooltipInsertLink ? <Tooltip data={'Insert link (Ctrl+K)'} /> : null
                        }
                    </button>
                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipInsertImage)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipInsertImage(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 p-1.5 rounded relative'
                    >
                        <Photo />
                        {
                            tooltipInsertImage ? <Tooltip data={'Insert image'} /> : null
                        }
                    </button>

                    <div className='border-r h-5 border-gray-300 mx-1'></div>

                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipAlign)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipAlign(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 px-1.5 py-1 rounded flex items-center relative'
                    >
                        <BarsLeft />
                        <ArrowDown />
                        {
                            tooltipAlign ? <Tooltip data={'Align'} /> : null
                        }
                    </button>
                    <button
                        onClick={() => { }}
                        onMouseEnter={(e) => {
                            tooltipHandle(setTooltipLineSpace)
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                        onMouseOut={() => {
                            setTooltipLineSpace(false)
                            if (timer) clearTimeout(timer)
                        }}
                        className='bg-transparent hover:bg-slate-200 px-1.5 py-1 rounded flex items-center relative'
                    >
                        <BarsArrow />
                        {
                            tooltipLineSpace ? <div className='absolute top-8 -left-12'>
                                <Tooltip data={'Line & paragraph spacing'} />
                            </div> : null
                        }
                    </button>

                </div>


                <div className='flex items-center'>
                    <div className='border-r w-1 h-5 border-gray-300 mx-1'></div>
                    <button
                        className={`bg-transparent hover:bg-slate-200 px-1.5 py-1 rounded flex items-center ${toolbarExpand ? 'rotate-180' : ''}`}
                        onClick={toolbarCollapse}
                    >
                        <ArrowDown />
                    </button>
                </div>
            </div>
        </>
    )
}

export default memo(SecondaryToolbar)