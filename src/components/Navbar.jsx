import {
  ArrowDownward,
  ArrowDropDownRounded,
  FavoriteBorderRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar h-[60px] shadow-sm flex justify-between items-center px-10">
        {/* drop down */}
        <div className="dropdown">
          <h2 className="nav-btn">
            All products <ArrowDropDownRounded />
          </h2>
          <ul className="dropdown-content">
            <li>
              <NavLink to="/plants">Plants</NavLink>
            </li>
            <li>
              <NavLink to="/supplies">Garden supplies</NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <h2 className="nav-btn">
            About us <ArrowDropDownRounded />
          </h2>
          <ul className="dropdown-content">
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex">
          <Link to="/">
            <h1 className="text-2xl font-bold tracking-wider">Planting</h1>
          </Link>
        </div>

        {/* search div */}

        <div className=" flex gap-2   ">
          {/* <div className=" cursor-pointer text-[16px] ">En</div> */}
          <div className="flex items-center border-2 px-2 py-1 rounded-2xl  focus-within:border-[#071a52] transition-all bg-[#fafafa]">
            <BiSearchAlt2 className="text-xl " />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-[15px] bg-[#fafafa] border-[#071a52] px-3 "
            />
          </div>
        </div>

        {/* left */}
        <div className="flex gap-4 items-center ">
          <Link to="/login">
            <div className=" text-[23px]">
              <MdOutlinePeopleAlt />
            </div>
          </Link>

          <div className="text-[10px]">
            <FavoriteBorderRounded />
          </div>

          <Link to="/addtocart">
            <div className="  text-[14px] cursor-pointer ml-[10px]">
              <Badge badgeContent={4} color="success">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
