import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/authApi";

const Login = () => {
  const [email, setEmail] = useState("kaykaylay@gmail.com");
  const [password, setPassword] = useState("123456789");

  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const loginHandler = async(e) =>{
    e.preventDefault();
    try{
        const user = {email,password};
        const data = await login(user);
        console.log(data);

        if(data?.data?.token){
            navigate("/");
        }

    }catch(error){
        console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        action=""
        onSubmit={loginHandler}
        className="border-2 rounded-lg shadow-[#F5F5DC] shadow-lg w-72 flex  p-10"
      >
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold text-[20px] text-center">Login to my account</h2>
          <p className="text-slate-500 text-[10px] text-center">Enter your e-mail and password</p>
          <input
            type="email"
            className="border px-4 py-1 rounded-md text-[15px]"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="border px-4 py-1 rounded-md text-[15px]"
            placeholder=" Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <button type="submit" className="btn-bg w-full">
              Login
            </button>

            <div className="text-slate-500 text-[10px] text-center">
            <p>New Customer? <Link to="/register" className=" text-blue-500">Create your account</Link></p>
           <p>Lost Password? <Link to="/register" className=" text-blue-500" > Recover Password</Link></p>
            </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
