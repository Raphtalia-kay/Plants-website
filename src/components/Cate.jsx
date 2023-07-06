import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Cate = ({image,name,tag}) => {
  console.log(tag);
  const [isReady,setIsReady] = useState(false);
  // const [category,setCategory] = useState([]);
  // const getCategory=async()=>{
  //   const data = await axios.get("http://localhost:3000/categories");
  //   setCategory(data);
  //   console.log(data);
  // }

  useEffect(() =>{
    if(isReady){
      navigate(`/${tag}`);
        }
  },[isReady]);

  const navigate = useNavigate();
  
  return (
    <div>
      <div className="border-2 shadow-md rounded-lg relative hover:opacity-90 ease-in duration-200">
        <img src={image} className='w-[400px] h-[300px] object-contain ' alt="" />
        <div className="flex w-[100%] h-[100%] left-0  flex-col justify-center items-center absolute top-0 ">
            <p className='text-[25px] text-[#8B4513] font-semibold'>{name}</p>
                <button className="btn" onClick={() => setIsReady(true)}>See More</button>
        </div>
      </div>
    </div>
  )
}

export default Cate
