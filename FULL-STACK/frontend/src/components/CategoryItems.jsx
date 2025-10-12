import React, { useEffect, useState } from 'react'
import Button from './Button'
import axios from 'axios'
import { toast } from 'react-toastify'

function CategoryItems() {

    let [category, setCategory] = useState([])
    let [products, setProducts] = useState([])
    let [selectedCategory, setSelectedCategory] = useState({
        slug: "all-categories",
        url: "https://dummyjson.com/products"
    })


    // fetch categories
    let fetchCategories = async () => {
        try {
            let response = await axios.get('https://dummyjson.com/products/categories')
            setCategory(response.data);
        } catch (error) {
            toast.error("ERROR: Failed to Load data", { position: "bottom-right" })
        }
    }

    // fetch items
    let fetchItems = async () => {
        try {
            let response = await axios.get(selectedCategory.url)
            console.log(response.data);

            setProducts(response.data.products);
        } catch (error) {
            toast.error("ERROR: Failed to Load data", { position: "bottom-right" })
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchItems()
    }, [selectedCategory])

    return (
        <div className='p-10 px-20 flex flex-col gap-5'>

            <p className='text-xl font-extrabold text-gray-800 leading-tight'>Let’s Check Out Our Products With Categories</p>
            <div className="flex gap-5 items-center bg-white p-3 shadow-md rounded-xl px-5">
                {
                    (Object.keys(selectedCategory).length > 0 & selectedCategory.slug !== 'all-categories') ? <span className=' font-medium cursor-pointer text-sm text-center' onClick={() => setSelectedCategory({ slug: "all-categories", name: "All Categories", url: "https://dummyjson.com/products" })} text={"All Categories"}>All Categories</span> : <Button text={"All Categories"} onClick={() => setSelectedCategory({ slug: "all-categories", name: "All Categories", url: "https://dummyjson.com/products" })} />
                }
                {
                    category.length > 0 && category.slice(0, 11).map((item, idx) => (
                        selectedCategory.slug === item.slug ? <Button key={idx} text={item.name} /> : <span key={idx} className='font-medium cursor-pointer text-sm text-center' onClick={() => setSelectedCategory(item)} text={item.name}>{item.name}</span>
                    ))
                }
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-">
                {products.length > 0 ? (
                    products.map((item, idx) => (
                        <div
                            key={idx}
                            className="w-[280px] bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center cursor-pointer"
                        >
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-44 object-cover rounded-xl mb-3"
                            />

                            <div className="flex flex-col gap-1 text-center w-full">
                                <h3 className="text-gray-800 font-semibold text-sm truncate">{item.title}</h3>
                                <p className="text-gray-500 text-xs">{item.brand}</p>

                                <div className="flex items-center justify-center gap-3 mt-2">
                                    <span className="text-lg font-bold text-green-600">₹{item.price}</span>
                                    <span className="text-yellow-500 text-sm flex items-center">
                                        ⭐ {item.rating}
                                    </span>
                                </div>

                                <div className="mt-4 flex items-center justify-center">
                                    <Button text="Add To Wishlist" />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center w-full">No products found.</p>
                )}
            </div>



        </div>
    )
}

export default CategoryItems