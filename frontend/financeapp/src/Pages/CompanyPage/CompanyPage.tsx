import { useEffect, useState } from 'react'
import type { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../Components/api';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';

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
                <CompanyDashboard>
                    <Tile title="Company Name" subTitle={company.companyName} />
                </CompanyDashboard>



            </div> : <div>company not found</div>}
        </div>
    )
}

export default CompanyPage
