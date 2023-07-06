import React from 'react'
import { useSelector } from 'react-redux'

const AddtoCart = () => {
    const {totalAmount,cart,quantity} = useSelector(state)
    console.log(useSelector(state));
  return (
    <div>
      <div className="">
        
      </div>
    </div>
  )
}

export default AddtoCart
