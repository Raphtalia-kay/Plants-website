import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Plant from './Plant';
import Navbar from './Navbar';


const Otherplants = () => {
    const [plants, setplants] = useState([]);
    const getplants = async () => {
      const { data } = await axios.get("http://localhost:3000/latest/plants");
      // console.log(data);
      setplants(data);
    };
    useEffect(() => {
      getplants();
    },[]);
  return (
    <div>
       <div>
       
      <div className="flex flex-col justify-center items-center mb-5">
      <div className=''>
          <h4 className="text-[30px] font-semibold">Latest Plants</h4>
        </div>
     
      </div>
      <div className="flex flex-wrap justify-center items-center mx-auto gap-5">
        {plants?.map((plant, index) => {
          return <Plant key={index} {...plant} />;
        })}
      </div>
    </div>
    </div>
  )
}
export default Otherplants
