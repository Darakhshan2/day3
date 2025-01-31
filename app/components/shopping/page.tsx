"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Product } from '../type'
import { GetCartItem, removeItem, updatecartQuantity } from '../../functionality/funct'
import Swal from 'sweetalert2'

const Shopping = () => {
  const [cartItem, setCartItem] = useState<Product[]>([])

  useEffect(() => {
    setCartItem(GetCartItem())
  }, [])

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#03085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it"
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(id)
        setCartItem(GetCartItem())
        Swal.fire("Removed", "Item has been removed successfully", "success")
      }
    })
  }

  const handleQuantity = (id: string, quantity: number) => {
    updatecartQuantity(id, quantity)
    setCartItem(GetCartItem())
  }

  const increment = (id: string) => {
    const product = cartItem.find((item) => item._id === id)
    if (product) {
      handleQuantity(id, product.inventory + 1)
    }
  }

  const decrement = (id: string) => {
    const product = cartItem.find((item) => item._id === id)
    if (product && product.inventory > 1) {
      handleQuantity(id, product.inventory - 1)
    }
  }

  const totalCalculate = () => {
    return cartItem.reduce((total, item) => total + item.price * item.inventory, 0)
  }

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Please review your cart before checkout",
      icon: "question",
      confirmButtonColor: "#03085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been successfully processed", "success")
        setCartItem([])
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Cart Items Section */}
        <div className="col-span-2">
          <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>

          {/* Cart Items List */}
          <div className="space-y-6">
            {cartItem.length > 0 ? (
              cartItem.map((item) => (
                <div key={item._id} className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="object-cover rounded-md"
                    />
                    <div className="text-sm">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500">${item.price}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decrement(item._id)}
                      className="px-3 py-1 bg-gray-300 rounded-full hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.inventory}</span>
                    <button
                      onClick={() => increment(item._id)}
                      className="px-3 py-1 bg-gray-300 rounded-full hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Item */}
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </div>

        {/* Payment Calculation Sidebar */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-lg">Subtotal:</span>
              <span className="font-semibold">${totalCalculate().toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg">Shipping:</span>
              <span className="font-semibold">Free</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg">Tax:</span>
              <span className="font-semibold">${(totalCalculate() * 0.1).toFixed(2)}</span>
            </div>

            <div className="flex justify-between border-t pt-4">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">${(totalCalculate() + totalCalculate() * 0.1).toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleProceed}
            className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Shopping
