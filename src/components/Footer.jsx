import { Facebook, FacebookOutlined, Google, Instagram, Twitter, WhatsApp } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div >
      <div className="p-12">
      <div className="flex justify-center gap-2 items-center mx-auto">
      <div className="border-2 border-[#8B4513] p-2 shadow-lg  rounded-full">
        <FacebookOutlined/>
      </div>
      <div className="border-2 p-2 border-[#8B4513] shadow-lg  rounded-full">
        <Twitter/>
      </div>
      <div className="border-2 p-2 border-[#8B4513] shadow-lg  rounded-full">
        <Google/>
      </div>
      <div className="border-2 p-2 border-[#8B4513] shadow-lg  rounded-full">
        <Instagram/>
      </div>
      <div className="border-2 p-2 border-[#8B4513] shadow-lg  rounded-full">
        <WhatsApp/>
      </div>
      </div>
      <p className='text-[12px] font-semibold flex pt-1 justify-center'>@Copyright. All rights reserved.</p>

      </div>
      
    </div>
  )
}

export default Footer
