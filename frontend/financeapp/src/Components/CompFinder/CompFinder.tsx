import { useEffect, useState } from 'react'
import type { CompanyCompData } from '../../company';
import { getCompData } from '../api';
import CompFinderItem from './CompFinderItem/CompFinderItem';

type Props = {
    ticker: string;
}

const CompFinder = ({ ticker }: Props) => {
    const [companyData, setCompanyData] = useState<CompanyCompData>()
    useEffect(() => {
        const getComps = async () => {
            const value = await getCompData(ticker)
            setCompanyData(value[0])
        }
        getComps()
    }, [ticker])
    return (
        <div className='inline-flex rounded-mb shadow-sm m-4'>
            {companyData?.peersList.map((peerTicker) => {
                return <CompFinderItem key={peerTicker} ticker={peerTicker} />
            })}
        </div>
    )
}

export default CompFinder
