import React, { useEffect, useState } from "react";
import Supply from "./Supply";
import axios from "axios";
import Navbar from "./Navbar";
import "./Allsupplies.css";
import { Link } from "@mui/material";
import Pagination from "./Pagination";

const Allsupplies = () => {
  const [supplies, setsupplies] = useState([]);
  const getSupplies = async () => {
    const { data } = await axios.get("http://localhost:3000/supplies");
    // console.log(data);
    setsupplies(data);
  };
  useEffect(() => {
    getSupplies();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
        

        <div className="flex flex-col justify-center items-center mb-5">
          <div>
            <h4 className="text-[30px] mt-5 text-center font-semibold">
              Garden supplies
            </h4>
          </div>

        </div>
        <div className="breadcrumb font-semibold ">
          <Link >Home</Link>&gt;
          <Link> Graden Supplies</Link>
        </div>
        
        <Pagination supplies={supplies} />
      
      </div>
    </div>
  );
};

export default Allsupplies;
