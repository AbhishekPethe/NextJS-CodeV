"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


const OrderProduct = () => {
    
    const router = useRouter()

    const handleClick = () => {
        console.log("Order placed");
        router.push("/")
        // other
        // router.replace("/") //same as replace property
        // router.back() // goes back to previous page
        // router.forward() 
    }
  return (
      <div>
          <button onClick={handleClick}>
          OrderProduct
          </button>
      </div>
  )
}

export default OrderProduct