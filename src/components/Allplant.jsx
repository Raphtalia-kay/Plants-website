import React, { useEffect, useState } from 'react'
import Plant from './Plant';
import axios from 'axios';
import Navbar from './Navbar';

const Allplant = () => {
    const [plants, setplants] = useState([]);
    const getplants = async () => {
      const { data } = await axios.get("http://localhost:3000/plants");
      // console.log(data);
      setplants(data);
    };
    useEffect(() => {
      getplants();
    },[]);
  return (
    <div>
       <div>
        <Navbar/>
      <div className="flex flex-col justify-center items-center mb-5">
        <div>
          <h4 className="text-[30px] font-semibold">Plants</h4>
        </div>
        

        
      </div>
      <div className="flex flex-wrap justify-center items-center w-5/6 mx-auto gap-5">
        {plants?.map((plant, index) => {
          return <Plant key={index} {...plant} />;
        })}
      </div>
    </div>
    </div>
  )
}

export default Allplant
