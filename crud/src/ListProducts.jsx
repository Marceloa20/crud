import React, { useEffect, useState } from 'react'
import Linha from './Linha';

const ListProducts = () => {

let [products, setProducts] = useState([]);
useEffect(() => {
    fetch('http://localhost:3000/produts')
    .then(response => response.json())
    .then(data => {
        setProducts(data)
    })

});

  return (
    <>
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Produto
                </th>
                <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Preço
                </th>
            </tr>
        </thead>
        <tbody>
            {
                products.map(product => {
                    return(
                        <Linha key={product.id}  
                            name={product.name}
                            price={product.price}
                        />
                    )       
                })
            }
        </tbody>
    </table>
</div>

    </>
  )
}

export default ListProducts