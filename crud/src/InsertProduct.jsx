import React from 'react'

const InsertProduct = () => {

    function onSubmitHandle(event) {
        event.preventDefault()
        console.log(event.target.elements.name.value)
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value

        fetch('http://localhost:3000/produts', {
            method: "POST",
            body: JSON.stringify({
                id: 5,
                name: name,
                price: price
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        
    }

  return (
    <>
    <form action="#" 
    className="max-w-sm mx-auto form"
    onSubmit={(e) => onSubmitHandle(e)}
    >
        <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Produto</label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Produto'></input>
        </div>
        <div>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preço</label>
            <input type="number" id="price" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='R$1000'></input>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 button">Cadastrar</button>
    </form>
    </>
  )
}

export default InsertProduct