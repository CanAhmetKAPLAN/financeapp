import { useEffect, useState } from 'react'
import type { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../Components/api';
import { useParams } from 'react-router-dom';

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
            {company ? <div>{company.companyName}</div> : <div>company not found</div>}
        </div>
    )
}

export default CompanyPage
