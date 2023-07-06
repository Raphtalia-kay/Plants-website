import axios from "axios";
import React, { useEffect, useState } from "react";
import Plant from "./Plant";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const getPlants = async () => {
    const { data } = await axios.get("http://localhost:3000/latest/plants");
    // console.log(data);
    setPlants(data);
  };
  useEffect(() => {
    getPlants();
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center mb-5">
        <div>
          <h4 className="text-[30px] font-semibold">Latest Products</h4>
        </div>

        {/* <div className="flex mt-2 gap-20  ">
          <p className=" hover:text-[#4CAF50] cursor-pointer">All Products</p>
          <p className="hover:text-[#4CAF50] cursor-pointer">Plants</p>
          <p className="hover:text-[#4CAF50] cursor-pointer">Garden Supplies</p>
        </div> */}
      </div>
      <div className="flex flex-wrap justify-center items-center w-5/6 mx-auto gap-5">
        {plants?.map((plant, index) => {
          return <Plant key={index} {...plant} />;
        })}
      </div>
    </div>
  );
};

export default Plants;
