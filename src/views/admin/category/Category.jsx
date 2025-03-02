import { getCategory } from 'config_API/category_api'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getAccessToken } from 'service/Auth'

const Category = () => {
  const [category, setCategory] = useState([]);
  const token = getAccessToken();
  const list = async () => {
    const response = await getCategory(token)
    setCategory(response.category);
  }
  useEffect(() => {
    list();
  }, []);

  return (
    <main className="mt-3 px-2">


      <div className="overflow-x-auto rounded-lg shadow-md">
      <Link to='/addcategory'>
        <button className="mb-4 w-32 rounded-lg bg-green-600 p-2 text-white">
          Add Category
        </button>
      </Link>
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-yellow-600">
              <th className="border-b px-6 py-3 text-left font-medium text-white">
                ID
              </th>
              <th className="border-b px-6 py-3 text-left font-medium text-white">
                Category Name
              </th>
              <th className="border-b px-6 py-3 text-left font-medium text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          { category.map((item) => (
            <tr key={item.id}>
                <td className="border-b px-6 py-4">{item.id}</td>
                <td className="border-b px-6 py-4">{item.name}</td>
                <td className="border-b px-6 py-4">
                  <Link to='/editcategory'>
                    <button className="w-16 rounded-lg bg-blue-600 p-2 text-white">
                      Edit
                    </button>
                  </Link>

                  <button className="ml-2 w-16 rounded-lg bg-red-600 p-2 text-white">
                    Delete
                  </button>
                </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Category