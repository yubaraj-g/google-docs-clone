import { memo, useMemo } from 'react'

const Tooltip = ({ data }) => {
    const name = useMemo(() => data, [data])

    return (
        <div className='absolute -bottom-9 -left-1 text-xs min-w-fit flex whitespace-nowrap bg-black text-white font-semibold rounded p-2 z-50'>{name}</div>
    )
}

export default memo(Tooltip)