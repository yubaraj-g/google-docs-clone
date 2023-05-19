import React from 'react'

const MainSection = () => {
    const templates = [
        {
            name: "Blank",
            sub: "",
            link: "https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
        },
        {
            name: "Resume",
            sub: "Serif",
            link: "https://ssl.gstatic.com/docs/templates/thumbnails/1wyFqxsRmKm9q--7j4WRmBMn694YdhV6hmNrfh4rVm2E_400.png"
        },
        {
            name: "Resume",
            sub: "Coral",
            link: "https://ssl.gstatic.com/docs/templates/thumbnails/10bJALGfGJG8BrzBSmG6EznIq6-84l1TZkQ-HC8jO368_400.png"
        },
        {
            name: "Letter",
            sub: "Spearmint",
            link: "https://ssl.gstatic.com/docs/templates/thumbnails/10e8_E36oj6_LuCRzckBFX_9oqbCHntmYB-jxB5U9gsw_400_2.png"
        },
        {
            name: "Project Proposal",
            sub: "Tropic",
            link: "https://ssl.gstatic.com/docs/templates/thumbnails/1XykI9TfWo4IoUqGLjQ-D8NIU4jZ1Ml9OI8-Euj5FrA0_400_3.png"
        },
        {
            name: "Brochure",
            sub: "Geometric",
            link: "https://ssl.gstatic.com/docs/templates/thumbnails/1TojfPV3jurwEV2RpmVqnCCCR4z9g2eQBZ40XTHPBqk8_400_3.png"
        },
        {
            name: "Report",
            sub: "Luxe",
            link: "https://ssl.gstatic.com/docs/templates/thumbnails/1OLxGsoZ-q6o9MiMbWpY7FngEKzF94SS6fZXAwo-vorM_400_2.png"
        },
    ]

    return (
        <>
            <div className='pl-48 pr-60 py-4 bg-gray-100 min-h-[10rem] w-full flex flex-col justify-start gap-4'>
                <div className='w-full flex px-2 justify-between'>
                    <h4 className='text-[1.05rem]'>Start a new document</h4>
                    <div className='flex items-center gap-2'>
                        <button className='text-[0.92rem] font-medium border-r px-4 hover:bg-gray-300 py-1 rounded'>Template Gallery</button>
                        <div className='flex flex-col gap-0.5 rounded-full hover:bg-gray-300 cursor-pointer w-3 justify-center items-center px-4 py-2'>
                            <div className='w-1 h-1 rounded-full bg-gray-500'></div>
                            <div className='w-1 h-1 rounded-full bg-gray-500'></div>
                            <div className='w-1 h-1 rounded-full bg-gray-500'></div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4'>
                    {
                        templates.map((temp, index) => (
                            <div className='flex flex-col gap-2' key={index}>
                                <button className='border border-gray-300 w-36 h-fit bg-white rounded hover:border-blue-400'>
                                    <img src={temp.link} alt="" className='w-fit object-cover rounded' />
                                </button>
                                <div className='px-1'>
                                    <h6 className='font-medium text-sm'>{temp.name}</h6>
                                    <h6 className='text-sm font-light'>{temp.sub}</h6>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default MainSection