import RatioList from '../../Components/RatioList/RatioList'
import Table from '../../Components/Table/Table'
import { testIncomeStatementData } from '../../Components/Table/testData'

const tableConfig = [
    {
        label: "Market Cap",
        render: (company: any) => company.marketCapTTM,
    },
]
const DesignGuide = () => {
    return (
        <>
            <RatioList data={testIncomeStatementData} config={tableConfig} />
            <Table data={testIncomeStatementData} config={tableConfig} />
        </>
    )
}

export default DesignGuide
