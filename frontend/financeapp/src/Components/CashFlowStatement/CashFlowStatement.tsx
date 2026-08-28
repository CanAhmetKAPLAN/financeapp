import type { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getCashflowStatement } from '../api';
import { useEffect, useState } from 'react';
import Table from '../Table/Table';
import Spinner from '../Spinner/Spinner';

const config = [
    {
        label: "Date",
        render: (company: CompanyCashFlow) => company.date,
    },
    {
        label: "Operating Cashflow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.operatingCashFlow),
    },
    {
        label: "Investing Cashflow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
    },
    {
        label: "Financing Cashflow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(
                company.netCashUsedProvidedByFinancingActivities
            ),
    },
    {
        label: "Cash At End of Period",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
    },
    {
        label: "CapEX",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.capitalExpenditure),
    },
    {
        label: "Issuance Of Stock",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.commonStockIssued),
    },
    {
        label: "Free Cash Flow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.freeCashFlow),
    },
];

const CashflowStatement = () => {

    const ticker = useOutletContext<string>()
    const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[]>()
    useEffect(() => {
        const fetchCashflow = async () => {
            const result = await getCashflowStatement(ticker)
            setCashFlowData(result)
        }
        fetchCashflow()
    }, [ticker])

    return (
        <>
            {cashFlowData ?
                <>
                    <Table data={cashFlowData} config={config} />
                </>
                :
                <>
                    <Spinner />
                </>
            }
        </>
    )
}

export default CashflowStatement

function formatLargeMonetaryNumber(value: number) {
    return value;
}
