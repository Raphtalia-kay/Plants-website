import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingBagOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";
  import React, { useState } from "react";
  import { Link, useNavigate, useParams } from "react-router-dom";

const Supply = ({ name, images, description, price, id, tag }) => {
    const [hoverEffect, setHoverEffect] = useState(" opacity-0");
    const handleHoverEnter = () => {
      setHoverEffect(" opacity-80 bg-[rgba(0,0,0,0,2)]");
    };
    const handleHoverLeave = () => {
      setHoverEffect(" opacity-0 ");
    };
    const iconStyle =
      "bg-white text-[#8B4513] rounded-full h-[40px] w-[40px] flex justify-center items-center cursor-pointer shadow-lg hover:text-white hover:bg-[#8B4513] hover:scale-[1] ease-in duration-500 ";
    const nav = useNavigate();
    // console.log(name);
  
    // function
    // const goDetials = (e) =>{
    //   e.preventDefault();
    //   nav(`/latest/plants/plantdetail/${id}`)
    // }
    return (
      <div>
        {/* <Link to={`/plantdetail/${id}`}> */}
        <div
          className=" w-[200px] h-[200px] justify-center hover:border-2 hover:shadow-lg hover:rounded-md flex flex-col overflow-hidden ease-in duration-100 relative "
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
        >
          <div className="w-[100px]">
            <img src={images[0]} alt="" />
          </div>
          <h4 className="text-[12px] px-4 py-2 font-semibold">
            {name.substring(0, 30)}...
          </h4>
          <p className="text-[10px] px-4 py-2">${price}</p>
          <div className=""></div>
          {/* icon style */}
          <div
            className={
              `absolute flex gap-3 justify-center items-center w-[100%] h-[100%] ease-in duration-500` +
              hoverEffect
            }
          >
            <Link to="/addtocart"><div className={iconStyle}>
            <ShoppingCartOutlined />
            </div></Link>
            <div className={iconStyle}>
              <FavoriteBorderOutlined />
            </div>
            <Link
              to={`/supplies/${tag}`}
              state={{ name, images, description, price, tag }}
            >
              <div className={iconStyle}>
                <SearchOutlined />
              </div>
            </Link>
          </div>
        </div>
        {/* </Link> */}
      </div>
    );
  };

export default Supply
