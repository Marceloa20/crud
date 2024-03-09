import React from 'react'

const Linha = ({ name, price }) => {
  return (
    <tr className="bg-white dark:bg-gray-800">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {name}
        </th>
        <td className="px-6 py-4">
                {price}
        </td>
    </tr>
  )
}

export default Linha