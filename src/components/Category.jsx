import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import Cate from './Cate';

const Category = () => {
    const [category,setCategory] = useState([]);
  const getCategory = async () => {
    const { data } = await axios.get("http://localhost:3000/categories");
    // console.log(data);
    setCategory(data);
  };

  useEffect(() => {
    getCategory();
  },[]);
    

  return (
    <>
    <div className='flex flex-1 justify-center items-center mx-auto gap-7 mb-10 '>
        {category?.categories?.map((cate,index) =>{
            return (
                <Cate key={index} {...cate}/>
            )
        })}
      
     
    </div>
    </>
  )
}

export default Category
