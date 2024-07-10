'use client'
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { IoClose } from "react-icons/io5";
import ItemsCard from "./ItemsCard";
import MenuCheckoutProvider from "../MenuCheckutContext";
import { useMenuCheckoutStore } from "../Store/Store";
import { useCartStore } from "../Store/CartStore";

const MenuHeader = () => {
  const { actions: { toggleMenu } } = useMenuCheckoutStore()
  
  return (
    <div className="flex justify-between items-center p-4 w-full">
      <p className="text-lg font-semibold text-gray-800">Carrinho ez</p>
      <button
        onClick={toggleMenu}
        className="text-red-500 hover:text-red-600">
        <IoClose size={30} />
      </button>
    </div>
  )
}

export function Menu() {
  const { states: { products, total } } = useCartStore()
  const { states: { isOpen }, actions: { toggleMenu } } = useMenuCheckoutStore()
  return (
    <div className={`flex flex-col h-full bg-zinc-400 rounded-r-3xl ${isOpen ? 'w-96' : 'w-24'}`}>
      <div className="h-full flex flex-col w-full bg-blue-400 justify-between">
        <div>

        <div className="flex justify-between items-center p-4 w-full">
          {isOpen ? (
            <MenuHeader />
          ) : (
            <div className="flex flex-row w-full items-center justify-center">
              <button
                onClick={toggleMenu}
              >
                <LeftCircleOutlined style={{ fontSize: "24px" }} className="hover:bg-gray-100 hover:text-blue-500" />
              </button>
            </div>
          )}
        </div>
        <div className="w-full p-2">
          <div className="h-[0.2px] w-full bg-gray-300" />
        </div>
        <div className="p-5 w-full">
          Meus pedidos
          <div className="flex flex-col justify-between w-full ">
            {products && products.map((product, i) => (
              <div className="flex flex-col py-2" key={product.product_id}>
                <ItemsCard name={product.name} product_id={product.product_id} price={product.price} key={i} />
              </div>
            ))}

          </div>
        </div>
        </div>

        <div className="p-5">
          Total: {total}
        </div>
      </div>
    </div>
  );
}
