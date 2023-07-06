import React from 'react'
import Navbar from './Navbar';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import Otherplants from './Otherplants';
import Newsletter from './Newsletter';
import Footer from './Footer';
import OtherSupplies from './OtherSupplies';

const SuppliesDetail = () => {
    const { tag } = useParams();
    const SupplieDetailURL = useLocation();
    // console.log(SupplieDetailURL);
    // console.log(SupplieDetailURL?.state?.images);
    const supplies = SupplieDetailURL?.state?.images;
    const [bigImg,setbigImg] = useState(supplies[0]);
    const clickFun =(smallImg)=>{
      setbigImg(smallImg);
    }
   
  
    return (
      <>
       
        <Navbar/>
       <div className="p-2  ">
       <div className="breadcrumb font-semibold ">
            <Link to="/">Home</Link>&gt;
            <Link to="/supplies">Graden Supplies</Link>
          </div>
       </div>
        {/* supplies photo */}
        <div className="flex flex-1 gap-10 justify-center items-center p-2 mx-auto">
        <div className="flex flex-col  justify-center items-center ">
          {supplies.map((image, index) => {
            return (
              <div className="mb-4" key={index}>
              <img src={image} className="w-[80px] h-[80px]  border-2 border-[#8B4513]" onClick={() => clickFun(image)} alt="" />
              </div>
            );
          })}
        </div>
  
       
        <div className="flex justify-center items-center">
          <img src={bigImg}  className="w-[400px] mb-4 border-2 border-[#8B4513]  shadow-lg" alt="" />
        </div>
        
  
        {/* Detail Description */}
        <div className=" flex flex-1 flex-col">
            <h1 className="text-3xl font-semibold">{SupplieDetailURL?.state?.name}</h1>
            <p className="text-xl mt-3 font-semibold">${SupplieDetailURL?.state?.price}</p>
            
            <div className="mt-3">
              <h4 className="text-xl font-semibold" >Size</h4>
              <div className="mt-3">
              <button className="btn px-2"> Small </button>
              <button className="btn ml-2 px-2"> Medium </button>
              <button className="btn ml-2 px-2"> Large </button>
              </div>
            </div>
            <h1 className="text-xl font-semibold"> Description</h1>
            <p className="text-[15px]">{SupplieDetailURL?.state?.description}</p>
            <button className="btn mt-5">Add to Cart</button>
        </div>
       </div><hr className="w-full h-3" />
    <OtherSupplies/>
        <Newsletter/>
        <Footer/>
      </>
    );
  };
  

export default SuppliesDetail
