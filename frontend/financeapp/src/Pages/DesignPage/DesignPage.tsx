import Table from '../../Components/Table/Table'
import Tile from '../../Components/Tile/Tile'

const DesignPage = () => {
    return (
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-2xl font-bold">Financeapp Dizayn Sayfasi</h1>
            <h2 className="text-gray-500 mb-8">Burasi Financeapp dizayn sayfasi. Burada uygulamanin birçok dizaynini tutacağiz</h2>

            <div className="flex items-center justify-between border-b pb-8 mb-8">
                <div>
                    <h3 className="font-bold">Company Name</h3>
                    <p className="text-gray-500 text-sm">This is the company name</p>
                </div>
                <Tile title="Company Name" subTitle="Apple Inc." />
            </div>

            <div className="border-b pb-8 mb-8">
                <h3 className="font-bold">Table</h3>
                <p className="text-gray-500 text-sm mb-4">This is a data table</p>
                <Table />
            </div>
        </div>
    )
}

export default DesignPage
