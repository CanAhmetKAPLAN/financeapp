import { useOutletContext } from "react-router-dom";
import type { CompanyIncomeStatement } from "../../company";
import { useEffect, useState } from "react";
import { getIncomeStatement } from "../api";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";

const configs = [
    {
        label: "Date",
        render: (company: CompanyIncomeStatement) => company.date,
    },
    {
        label: "Revenue",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.revenue),
    },
    {
        label: "Cost Of Revenue",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.costOfRevenue),
    },
    {
        label: "Gross Profit",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.grossProfit),
    },
    {
        label: "Research And Development Expenses",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.researchAndDevelopmentExpenses),
    },
    {
        label: "Selling, General And Administrative Expenses",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.sellingGeneralAndAdministrativeExpenses),
    },
    {
        label: "Operating Expenses",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.operatingExpenses),
    },
    {
        label: "Depreciation",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.depreciationAndAmortization),
    },
    {
        label: "EBITDA",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.ebitda),
    },
    {
        label: "EBIT",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.ebit),
    },
    {
        label: "Operating Income",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.operatingIncome),
    },
    {
        label: "Interest Expense",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.interestExpense),
    },
    {
        label: "Income Before Taxes",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.incomeBeforeTax),
    },
    {
        label: "Income Tax Expense",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.incomeTaxExpense),
    },
    {
        label: "Net Income",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.netIncome),
    },
    {
        label: "Net Income Ratio",
        render: (company: CompanyIncomeStatement) =>
            formatRatio(company.netProfitMargin),
    },
    {
        label: "Earnings Per Share",
        render: (company: CompanyIncomeStatement) => formatRatio(company.eps),
    },
    {
        label: "Earnings Per Diluted",
        render: (company: CompanyIncomeStatement) =>
            formatRatio(company.epsDiluted),
    },
    {
        label: "Weighted Average Shares Outstanding",
        render: (company: CompanyIncomeStatement) =>
            formatLargeMonetaryNumber(company.weightedAverageShsOut),
    },
    {
        label: "Gross Profit Ratio",
        render: (company: CompanyIncomeStatement) =>
            formatRatio(company.grossProfitMargin),
    },
    {
        label: "Opearting Income Ratio",
        render: (company: CompanyIncomeStatement) =>
            formatRatio(company.operatingProfitMargin),
    },
    {
        label: "Income Before Taxes Ratio",
        render: (company: CompanyIncomeStatement) =>
            formatRatio(company.pretaxProfitMargin),
    },
];

const IncomeStatement = () => {

    const ticker = useOutletContext<string>();
    const [incomeStatement, setIncomeStatement] = useState<CompanyIncomeStatement[]>();
    useEffect(() => {
        const incomeStatementFetch = async () => {
            const result = await getIncomeStatement(ticker);
            setIncomeStatement(result);
        }
        incomeStatementFetch();
    }, [ticker])

    return (
        <>
            {incomeStatement ?
                <>
                    <Table data={incomeStatement} config={configs} />
                </>
                :
                <>
                    <Spinner />
                </>
            }
        </>
    )
}

export default IncomeStatement

function formatLargeMonetaryNumber(value: number) {
    return value;
}

function formatRatio(value: number) {
    return value;
}
