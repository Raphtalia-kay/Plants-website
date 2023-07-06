import { Anchor, Breadcrumbs } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
// import ImageGallery from "react-image-gallery";
// import Template from "./Template";
import "./Detail.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import Otherplants from "./Otherplants";
const PlantDetail = () => {
  const { tag } = useParams();
  const plantURLDetail = useLocation();
  // console.log(plantURLDetail);
  // console.log(plantURLDetail?.state?.images);
  const plants = plantURLDetail?.state?.images;
  const [bigImg,setbigImg] = useState(plants[0]);
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
      {/* plants photo */}
      <div className="flex flex-1 gap-10 justify-center items-center p-2 mx-auto">
      <div className="flex flex-col  justify-center items-center ">
        {plants.map((image, index) => {
          return (
            <div className="mb-4" key={index}>
            <img src={image} className="w-[80px] h-[80px]   border-2 border-[#8B4513]" onClick={() => clickFun(image)} alt="" />
            </div>
          );
        })}
      </div>

     
      <div className="flex justify-center items-center border-2 border-[#8B4513]  shadow-lg w-[400px] h-[400px] object-cover ">
        <img src={bigImg}  className=" mb-4 " alt="" />
      </div>
      

      {/* Detail Description */}
      <div className=" flex flex-1 flex-col">
          <h1 className="text-3xl font-semibold">{plantURLDetail?.state?.name}</h1>
          <p className="text-xl mt-3 font-semibold">${plantURLDetail?.state?.price}</p>
          
          <div className="mt-3">
            <h4 className="text-xl font-semibold" >Size</h4>
            <div className="mt-3">
            <button className="btn px-2"> Small </button>
            <button className="btn ml-2 px-2"> Medium </button>
            <button className="btn ml-2 px-2"> Large </button>
            </div>
          </div>
          <h1 className="text-xl font-semibold"> Description</h1>
          <p className="text-[15px]">{plantURLDetail?.state?.description}</p>
          <button className="btn mt-5">Add to Cart</button>
      </div>
     </div>
     
     <hr className="w-full h-3" />
     <Otherplants/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default PlantDetail;
