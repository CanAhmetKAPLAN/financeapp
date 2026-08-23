import axios from "axios"
import type { CompanySearch, CompanyProfile, CompanyKeyMetrics, CompanyIncomeStatement, CompanyBalanceSheet } from "../company";

const API_KEY = import.meta.env.VITE_FMP_API_KEY;

export const searchCompanies = async (query: string) => {
    try {
        const { data } = await axios.get<CompanySearch[]>(
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${API_KEY}`
        )
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("API İsteği Başarısız Oldu:", error.message);
        } else {
            console.error("Beklenmeyen bir hata oluştu:", error);
        }
        throw error;
    }
}

export const getCompanyProfile = async (symbol: string) => {
    try {
        const { data } = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/stable/profile?symbol=${symbol}&apikey=${API_KEY}`
        )
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("API İsteği Başarısız Oldu:", error.message);
        } else {
            console.error("Beklenmeyen bir hata oluştu:", error);
        }
        throw error;
    }
}

export const getKeyMetrics = async (symbol: string): Promise<CompanyKeyMetrics[]> => {
    try {
        const [{ data: keyMetrics }, { data: ratios }] = await Promise.all([
            axios.get<Partial<CompanyKeyMetrics>[]>(
                `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${symbol}&apikey=${API_KEY}`
            ),
            axios.get<Partial<CompanyKeyMetrics>[]>(
                `https://financialmodelingprep.com/stable/ratios-ttm?symbol=${symbol}&apikey=${API_KEY}`
            ),
        ])
        return [{ ...keyMetrics[0], ...ratios[0] } as CompanyKeyMetrics];
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("API İsteği Başarısız Oldu:", error.message);
        } else {
            console.error("Beklenmeyen bir hata oluştu:", error);
        }
        throw error;
    }
}

export const getIncomeStatement = async (symbol: string): Promise<CompanyIncomeStatement[]> => {
    try {
        const [{ data: incomeStatements }, { data: ratios }] = await Promise.all([
            axios.get<Partial<CompanyIncomeStatement>[]>(
                `https://financialmodelingprep.com/stable/income-statement?symbol=${symbol}&limit=5&apikey=${API_KEY}`
            ),
            axios.get<Partial<CompanyIncomeStatement>[]>(
                `https://financialmodelingprep.com/stable/ratios?symbol=${symbol}&limit=5&apikey=${API_KEY}`
            ),
        ])
        return incomeStatements.map((statement) => ({
            ...statement,
            ...ratios.find((ratio) => ratio.date === statement.date),
        })) as CompanyIncomeStatement[];
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("API İsteği Başarısız Oldu:", error.message);
        } else {
            console.error("Beklenmeyen bir hata oluştu:", error);
        }
        throw error;
    }
}
export const getBalanceSheet = async (symbol: string): Promise<CompanyBalanceSheet[]> => {
    try {
        const { data } = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${symbol}&limit=5&apikey=${API_KEY}`
        )
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("API İsteği Başarısız Oldu:", error.message);
        } else {
            console.error("Beklenmeyen bir hata oluştu:", error);
        }
        throw error;
    }
}