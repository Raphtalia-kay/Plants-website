import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../api/authApi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] =
    useState("");

  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      

      const data = await register({
        name,
        email,
        password,
        password_confirmation,
      });
      console.log(data)
      if(data?.data?.success){
        navigate("/login");

      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={registerHandler}
          action=""
          className="border-2 rounded-lg shadow-[#F5F5DC] shadow-lg w-72 flex  p-10"
        >
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold text-[20px] text-center">
              Create my account
            </h2>
            <p className=" text-slate-500 text-[10px] text-center">
              Please fill in the information below:
            </p>
            <input
              type="text"
              className="border px-4 py-1 rounded-md text-[15px]"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <input
              type="password"
              className="border px-4 py-1 rounded-md text-[15px]"
              placeholder="Enter Confirm password"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <button type="submit" className="btn-bg w-full">
              Create my account
            </button>

            <p className="text-slate-500 text-[10px] text-center">
              Already have an account?{" "}
              <Link to="/login" className="underline text-blue-500">
                Login Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
