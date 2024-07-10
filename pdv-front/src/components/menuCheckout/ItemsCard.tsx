'use client'
import { CartDao } from "@/infra/repository/cartDao";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useMenuCheckout } from "../MenuCheckutContext";


type Product = {
    product_id: string;
    name: string;
    description: string;
    price: number;
  };
  

export default function ItemsCard(item: any) {
    const [counter , setCounter] = useState(0)
    const useMenu = useMenuCheckout()
    const handleIncrement = () => {
        console.log("increment")
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        if (counter === 0) return
        setCounter(counter - 1)
    }
    console.log("ItemsCard", item)
    return (
        <div className="h-24 flex flex-row items-center justify-between px-2 w-full border-red-500 rounded-xl border ">
            <div className="flex flex-row">
                <MdShoppingCartCheckout size={24} />
                <p>
                    {item.product.name}
                </p>
            </div>
            <div className="flex flex-row">
                <button  className="ml-2 outline-none">
                    <FaMinus size={20} onClick={handleDecrement} />
                </button>
                <p className="pl-2">{counter}</p>
                <button className="ml-2 outline-none" onClick={handleIncrement}>
                    <FaPlus size={20} />
                </button>
            </div>
        </div>
    )
        
}