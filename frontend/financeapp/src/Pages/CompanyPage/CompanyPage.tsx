import { useEffect, useState } from 'react'
import type { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../Components/api';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';
import Spinner from '../../Components/Spinner/Spinner';
import CompFinder from '../../Components/CompFinder/CompFinder';

const CompanyPage = () => {
    const { ticker } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();
    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.[0])
        }
        getProfileInit();
    }, [ticker])
    return (
        <div>
            {company ? <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                <Sidebar />
                <CompanyDashboard ticker={ticker!}>
                    <Tile title="Company Name" subTitle={company.companyName} />
                    <Tile title="Price" subTitle={company.price.toString()} />
                    <Tile title="Sector" subTitle={company.sector} />
                    <Tile title="DCF" subTitle={company.dcf.toString()} />
                    <CompFinder ticker={company.symbol} />
                    <p className='bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4'>{company.description}</p>
                </CompanyDashboard>



            </div> : <Spinner />}
        </div>
    )
}

export default CompanyPage
