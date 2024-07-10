'use client'
import React from 'react';
import { useMenuCheckoutStore } from '../Store/Store';
import { useCartStore } from '../Store/CartStore';


type Product = {
  product_id: string;
  name: string;
  price: number;
};

type Props = {
  product: Product | undefined;
};

const ProductCard = ({ product }: Props) => {
  const { actions: { addProduct  }, states:{  products, }} = useCartStore()
  const {  actions: {  countTotal} } = useCartStore()
  


  // Verifica se o produto está definido
  if (!product) {
    return null; // Retorna nulo se o produto não estiver definido
  }

  const handleProductClick = (product: Product) => {
    const newProduct = {...product, quantity: 1}
    addProduct(newProduct)
    countTotal()
    console.log("Product added to cart", products)
  }


  

  return (
    <div key={product.product_id} className="bg-blue-500 h-72 w-80 flex flex-col items-center justify-center rounded-md shadow-xl border border-black hover:scale-105 ">
      <p className="text-white text-xl">{product?.name}</p>
      <p className="text-white text-sm">Preço: ${product?.price}</p>
      <button className='border border-red-400 bg-red-400 text-white font-bold p-4 cursor-pointer' onClick={() => handleProductClick({...product})}>
        Adicionar no carrinho
      </button>
      {/* Exemplo de exibição adicional, como descrição */}
    </div>
  );
};

export default ProductCard;
