import React, { useState } from "react";

function Signup() {
  let emptyUser = { name: "", email: "", password: "" };
  let [data, setData] = useState(emptyUser);

  let handleSubmit = () => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6 space-y-5">
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="inp1" className="text-gray-700 font-medium mb-1">
          Full Name
        </label>
        <input
          onChange={(e) => setData({ ...data, name: e.target.value })}
          type="text"
          id="inp1"
          placeholder="John Doe"
          className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="inp2" className="text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          onChange={(e) => setData({ ...data, email: e.target.value })}
          type="email"
          id="inp2"
          placeholder="johndoe12@gmail.com"
          className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col">
        <label htmlFor="inp3" className="text-gray-700 font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          id="inp3"
          placeholder="••••••••"
          className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </div>
  );
}

export default Signup;
