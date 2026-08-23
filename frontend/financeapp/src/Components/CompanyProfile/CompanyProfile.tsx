import { useEffect, useState } from 'react'
import type { CompanyKeyMetrics } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getKeyMetrics } from '../api';
import RatioList from '../RatioList/RatioList';
import Spinner from '../Spinner/Spinner';


const tableConfig = [
    {
        label: "Market Cap",
        subTitle: "Total value of all a company's shares of stock",
        render: (company: CompanyKeyMetrics) => company.marketCap,
    },
    {
        label: "Current Ratio",
        subTitle: "Measures the companies ability to pay short term debt obligations",
        render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
    },
    {
        label: "Return On Equity",
        subTitle: "Return on equity is the measure of a company's net income divided by its shareholder's equity",
        render: (company: CompanyKeyMetrics) => company.returnOnEquityTTM,
    },
    {
        label: "Return On Assets",
        subTitle: "Return on assets is the measure of how effective a company is using its assets",
        render: (company: CompanyKeyMetrics) => company.returnOnAssetsTTM,
    },
    {
        label: "Free Cashflow Per Share",
        subTitle: "Return on assets is the measure of how effective a company is using its assets",
        render: (company: CompanyKeyMetrics) => company.freeCashFlowPerShareTTM,
    },
    {
        label: "Cash Per Share",
        render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
    },
    {
        label: "Book Value Per Share TTM",
        subTitle: "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
        render: (company: CompanyKeyMetrics) => company.bookValuePerShareTTM,
    },
    {
        label: "Dividend Yield TTM",
        subTitle: "Shows how much a company pays each year relative to stock price",
        render: (company: CompanyKeyMetrics) => company.dividendYieldTTM,
    },
    {
        label: "Capex Per Share TTM",
        subTitle: "Capex is used by a company to aquire, upgrade, and maintain physical assets",
        render: (company: CompanyKeyMetrics) => company.capexPerShareTTM,
    },
    {
        label: "Graham Number",
        subTitle: "This is the upperbound of the price range that a defensive investor should pay for a stock",
        render: (company: CompanyKeyMetrics) => company.grahamNumberTTM,
    },
    {
        label: "PE Ratio",
        subTitle: "This is the upperbound of the price range that a defensive investor should pay for a stock",
        render: (company: CompanyKeyMetrics) => company.priceToEarningsRatioTTM,
    },
];

const CompanyProfile = () => {

    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
    useEffect(() => {
        const getCompanyKeyMetrics = async () => {
            const value = await getKeyMetrics(ticker);
            setCompanyData(value?.[0])
        };
        getCompanyKeyMetrics();
    }, [ticker])

    return (
        <div>
            {
                companyData ? (
                    <>
                        <RatioList config={tableConfig} data={companyData} />
                    </>
                ) : (
                    <>
                        <Spinner />
                    </>
                )
            }
        </div>
    )
}

export default CompanyProfile
