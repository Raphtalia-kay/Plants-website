import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Slider = () => {
  const [slidePhoto, setSlidePhoto] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const getSlidePhoto = async () => {
    const { data } = await axios.get("http://localhost:3000/plants");
    // console.log(data);

    const slicedData = data.slice(12, 15);
    // console.log(slicedData);
    setSlidePhoto(slicedData);
  };

  useEffect(() => {
    getSlidePhoto();
  }, []);

  const arrowStyle =
    "rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer";

  const nextSlide = () => {
    if (activeSlide === slidePhoto.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };
  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slidePhoto.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };
  return (
    <>
      <div className="">
        <div className="h-[540px] bg-white flex items-center justify-between">
          {/* left slide */}
          <div className={arrowStyle}>
            <ArrowLeftOutlined
              style={{ fontSize: "50px" }}
              onClick={prevSlide}
            />
          </div>

          {/* slide div */}
          {slidePhoto.map((slide, index) => {
            if (index === activeSlide) {
              return ( 
                <div className="flex w-[100%] h-[450px] justify-center items-center shadow-2xl rounded-lg border-[#071a52] overflow-hidden relative" key={index}>
                  <div className="flex items-center gap-5 justify-center h-[100%]">
                    {/* image */}
                    <div className="h-[100%] w-[400px] object-contain">
                      <img src={slide.images[0]} alt="" />
                    </div>
                    {/* text */}
                    <div className="flex flex-col flex-1 place-items-start justify-center">
                      <h2 className="text-[30px] font-semibold mt-4">{slide.name}</h2>
                      <p className="text-[15px]">{slide.description.substring(0,550)}...</p>
                      <button className="btn mt-3">Shop Now</button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          {/* right div */}
          <div className={arrowStyle}>
            <ArrowRightOutlined
              style={{ fontSize: "50px" }}
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;

// {/* <div className="">
//             {slidePhoto.map((slide, index) => {
//             //   if (index === activeSlide) {
//             //     return (
//                   <div className="flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#071a52] overflow-hidden">

//                    <div className="flex items-center justify-center h-[100%]">
//                      {/* image */}
//                      <div className="h-[100%] object-cover">
//                       <img src={slide.images[1]} alt="" />
//                     </div>
//                      {/* text */}
//                     <div className="flex flex-col flex-1 place-items-start justify-center -ml-11">

//                     </div>
//                    </div>
//                   </div>
//                 // );
//             //   }
//             })}
//           </div> */}
