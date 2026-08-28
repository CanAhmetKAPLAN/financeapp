import { useEffect, useState } from 'react'
import type { CompanyTenK } from '../../company';
import { getTenK } from '../api';
import TenKFinderItem from './TenKFinderItem/TenKFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
    ticker: string;
}

const TenKFinder = ({ ticker }: Props) => {

    const [companyData, setCompanyData] = useState<CompanyTenK[]>();
    useEffect(() => {
        const getData = async () => {
            try {
                const value = await getTenK(ticker);
                setCompanyData(value)
            } catch {
                setCompanyData([])
            }
        }
        getData()
    }, [ticker])

    return (
        <div className='inline-flex rounded-md shadow-sm m-4'>
            {companyData ? companyData.slice(0, 5).map((tenK) => {
                return <TenKFinderItem key={tenK.finalLink} tenK={tenK} />
            }) : (<Spinner />)}
        </div>
    )
}

export default TenKFinder
