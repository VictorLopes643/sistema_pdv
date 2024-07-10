'use client'
import { CartDao } from "@/infra/repository/cartDao";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useMenuCheckout } from "../MenuCheckutContext";
import { useCartStore } from "../Store/CartStore";


type ItemsProps = {
    product_id: string;
    name: string;
    price: number;
  };
  

export default function ItemsCard({name, product_id}: ItemsProps) {
    console.log('product_id', product_id)
    const { actions: { plusTotalWithProduct, minusTotalWithProduct, countTotal  }, states:{  products, }} = useCartStore()
    // console.log('products', products)
    const [productFilter] = products.filter((product) => product.product_id === product_id);
    console.log('productFilter', [productFilter])
    const handleIncrement = (id: any) => {
        // setCounter(counter + 1)
        plusTotalWithProduct(id)
        countTotal()
    }
    const handleDecrement = (id:any) => {
        // if (counter === 0) return
        // setCounter(counter - 1)
        minusTotalWithProduct(id)
        countTotal()
    }
    return (
        <div className="h-24 flex flex-row items-center justify-between px-2 w-full border-red-500 rounded-xl border " key={product_id}>
            <div className="flex flex-row">
                <MdShoppingCartCheckout size={24} />
                <p>
                    {name}
                </p>
            </div>
            <div className="flex flex-row">
                <button  className="ml-2 outline-none">
                    <FaMinus size={20} onClick={() => handleDecrement(product_id)} />
                </button>
                <p className="pl-2">{productFilter.quantity}</p>
                <button className="ml-2 outline-none" onClick={() => handleIncrement(product_id)}>
                    <FaPlus size={20} />
                </button>
            </div>
        </div>
    )
        
}