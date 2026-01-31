"use client"
import React, { useState } from 'react'

export default function AuthForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-white shadow-xl rounded-2xl p-8 flex flex-col w-96">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Lisi Mere Admin
        </h1>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="name@example.com"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-linear-to-r from-pink-500 to-blue-500 text-white font-semibold py-3 rounded-xl shadow-md hover:from-pink-600 hover:to-blue-600 transition duration-300"
        >
          Sign In
        </button>


      </form>
    </div>
  )
}
