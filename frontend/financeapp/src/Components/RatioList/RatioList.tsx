type Props = {
    config: any;
    data: any;
}

const RatioList = ({ config, data }: Props) => {

    const renderedRow = config.map((row: any, index: number) => {
        return (
            <li key={index} className='py-3 sm:py-4'>
                <div className='flex items-center space-x-4'>
                    <div className='flex-1 min-w-0'>
                        <div className='text-sm fonmt-medium text-gray-900 truncate'>
                            {row.label}
                        </div>
                        <p className='text-sm text-gray-500 truncate'>{row.subTitle}</p>
                    </div>
                    <div className='.inline-flex.items-center.text-base.font-semibold.text-gray-900'>{row.render(data)}</div>
                </div>
            </li>
        )
    })

    return (
        <div className='bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6'>
            <ul className='divide-y divided-gray-200'>{renderedRow}</ul>
        </div>
    )
}

export default RatioList
