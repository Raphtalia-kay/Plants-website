import React, { useEffect, useState } from "react";
import Supply from "./Supply";
import axios from "axios";

const Supplies = () => {
  const [supplies, setsupplies] = useState([]);
  const getSupplies = async () => {
    const { data } = await axios.get("http://localhost:3000/latest/supplies");
    // console.log(data);
    setsupplies(data);
  };
  useEffect(() => {
    getSupplies();
  }, []);
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center mb-5">
          <div>
            <h4 className="text-[30px] font-semibold">Latest Supplies</h4>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center w-5/6 mx-auto gap-5">
          {supplies?.map((supply, index) => {
            return <Supply key={index} {...supply} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Supplies;
