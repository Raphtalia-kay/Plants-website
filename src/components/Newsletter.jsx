import React from "react";

const Newsletter = () => {
  return (
    <div className="   flex bg-slate-100 mt-5 justify-between items-center py-10 px-28 ">
      {/* text  */}
      <div className=" uppercase font-semibold ">
        <h3>Newsletter</h3>
        <h3> to get in touch</h3>
      </div>
      {/* email  */}
      <div className=" ">
        <input type="email" placeholder="ENTER YOUR E-MAIL" className="bg-slate-100 text-center outline-none border-b-2 w-60 " />
      </div>
      {/* button */}
      <button className="btn px-3">Subscribe</button>
    </div>
  );
};

export default Newsletter;
