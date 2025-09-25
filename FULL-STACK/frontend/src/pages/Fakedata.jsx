// https://jsonplaceholder.typicode.com/posts
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Fakedata() {

    let [data, setData] = useState([]);

    let fetchData = async () => {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(response.data);
            toast.success("Data Fetched Successfully")
        } catch (error) {
            toast.error("Unknown Error Occured!")
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="max-w-2xl mx-auto mt-6 space-y-4">
            {data &&
                data.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition"
                    >
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.body}</p>
                    </div>
                ))}
        </div>


    )
}

export default Fakedata