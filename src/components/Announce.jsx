import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Announce = () => {
  const [AnnounceStyle, setAnnounceStyle] = useState(
    "all flex  px-30  justify-center items-center text-white text-[12px] "
  );
  const handleClose = () => {
    setAnnounceStyle(AnnounceStyle + " hidden");
  };
  return (
    <div className="bg-primary  max-w-full text-xs p-3">
      <div className={AnnounceStyle}>
        <div className="first">
          <h4>
            start a free trial and enjoy 3 months of Plantie for $1/month on
            select plans.
            <Link to="/register">
              <span
                className="text-[12px] underline font-bold 
                 sm:bg-blue-500 md:bg-red-500 lg:bg-yellow-500"
              >
                Sign up now
              </span>
            </Link>
          </h4>
        </div>
        <div className="second">
          <RxCross2
            onClick={handleClose}
            className="cursor-pointer text-left text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Announce;
