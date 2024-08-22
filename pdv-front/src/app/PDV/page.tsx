import { Header } from "@/components/Header";
import MenuCheckoutProvider from "@/components/MenuCheckutContext";
import ProductCard from "@/components/cardsProducts/CardsProducts";
import { MenuWithProvider } from "@/components/menu/Menu";
import { Menu } from "@/components/menuCheckout/menuCheckout";


async function getData() {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
type Product = {
    product_id: string;
    name: string,
    description: string,
    price: number,
};
export default async function Pdv() {

    const products: Product[] = await getData()

    return (
        <div className="bg-white300 flex flex-col h-screen ">
            <Header />
            <div className="flex flex-row w-full h-full">
                <MenuWithProvider />
                <div className="w-full p-12">
                    <div className=" h-full  rounded-xl">
                        <p className="font-bold text-2xl">
                            Mais vendidos
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                            {products && products.map((product, i) => (
                                <ProductCard product={product} key={i} />
                            ))}
                        </div>
                    </div>

                </div>
                <Menu />
            </div>
        </div>
    );
}
