import axios from "axios"
import type { CompanySearch } from "../company";

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
