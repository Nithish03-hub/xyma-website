import React, { useState, useEffect } from "react";
import "./Sb.css";
import Icon from "../Icon";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import utmap from "../Assets/utmaps.png";
import isteel from "../Assets/isteel.png";
import ports from "../Assets/ports.png";
import ztar from "../Assets/Ztar.png";
import paint from "../Assets/paint.png";
import metal from "../Assets/metal.png";
import aicon from "../Assets/aluminumicon.png";
import refrigerant from "../Assets/refrigerant.png";
import luboil from "../Assets/luboil.png";
import semi from "../Assets/semi.png";
import ref from "../Assets/refineries.png";
import eor from "../Assets/eor.png";
import { RiPlayCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: image1,
      title: "Multi-point Temperature Measurements",
      text1: "Up to 1600° C",
      text: "“The Disruptive Ultrasonic Waveguide Technology”",
    },
    {
      src: image2,
      title: "Multi - Parameter Measurements",
      text1: "Viscosity, Density, Temperature",
      text: "“The Disruptive Ultrasonic Waveguide Technology”",
    },
    {
      src: image3,
      title: "Powered by AI",
      text1:
        "IIoT Enabled, Data Analytics, Anomaly Detection, Predictive Maintenance",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="relative">
      <div className="h-[10vh]">{/* navbar space */}</div>
      <section className="relative shadow-white shadow-2xl">
        {images.map((item, index) => (
          <div
            key={index}
            className={`${index === currentIndex ? "block" : "hidden"} w-full`}
          >
            <img
              className="w-full h-[60vh] sm:h-[90vh] object-cover object-right-top"
              src={item.src}
              alt={`Slide ${index + 1}`}
              //style={{ ...imageStyle }}
            />
            <div className="h-[45%] w-[90%] sm:h-[60%] sm:w-[30%] flex flex-col gap-4 absolute bottom-[25%] text-white p-[1%] px-[2%] rounded-md text-[2.5vw] font-medium sm:font-bold mx-[20px] sm:mx-[75px]">
              <div className="text-2xl sm:text-5xl text-center sm:text-left">
                {item.title}
              </div>
              <div
                className="text-2xl sm:text-3xl p-1 text-center sm:text-left font-bold"
                style={{
                  background:
                    "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  // display: "inline-block",
                  // width: "55%",
                }}
              >
                {item.text1}
              </div>
              <div className="text-sm font-light text-center sm:text-left">
                {item.text}
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-[65px] sm:left-[50px] flex sm:justify-start items-center gap-2 w-[90%] mx-[20px] sm:mx-[50px] justify-center">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-[30px] h-[3px] cursor-pointer ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              } rounded-full`}
            />
          ))}
        </div>
      </section>

      {/* bottom text */}
      <div className="w-full h-[10vh] text-center text-gray-300 font-semibold text-[40px] sm:text-[90px] 2xl:text-[120px] -mt-[20px] sm:-mt-[50px] 2xl:-mt-[65px] mb-[20px] sm:mb-[70px]">
        XYMA PRODUCTS
      </div>

      {/* product cards */}

      <div className="p-4 sm:p-8 sm:px-28">
        {/* utmaps */}
        <div className="sm:h-[70vh] sm:flex p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg mb-4">
          <div className="w-full sm:w-[45%] p-2">
            <div
              className="w-full h-full flex flex-col justify-center items-center rounded-lg relative"
              style={{
                background:
                  "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
              }}
            >
              <img
                className="w-[45%] h-[95%] object-cover object-top"
                src={utmap}
                alt="UTMapS"
              />
              <div
                className="h-[45%] sm:h-[20%] absolute bottom-0 w-full px-4 rounded-b-lg"
                style={{
                  background: "rgba(64, 64, 64, 0.5)",
                  backdropFilter: "blur(9px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-2xl font-semibold h-[45%]"
                  style={{
                    background:
                      "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    display: "inline-block",
                  }}
                >
                  μTMapS
                </div>
                <div className="h-[55%] text-white text-[12px]">
                  A single customizable waveguide can measure temperature at 10
                  points over 50 meters length.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[55%] p-2 sm:p-4">
            <div className="h-1/3">
              <div className="h-[65%] sm:flex">
                <div className="w-full sm:w-[80%] text-xl sm:text-3xl font-semibold">
                  Multi-Point Temperature Mapping Sensor
                </div>
                <div className="w-full sm:w-[20%] py-1">
                  <div className="flex rounded-full items-center justify-center gap-1 p-1 bg-[#01285C]">
                    <div className="text-[#FE9D1C]">
                      <RiPlayCircleFill size={20} />
                    </div>
                    <div className="text-sm mb-[2px] text-white">
                      Play Video
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[35%]">
                <div className="w-full sm:w-auto inline-block px-2 py-1 rounded-full text-sm font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center">
                  Temperature Range: 25° C to 1600° C
                </div>
              </div>
            </div>
            <div className="h-1/3 text-[#60646C] py-2 text-sm sm:py-0 sm:text-base">
              µTMapS & µSTMapS are IIoT-enabled temperature measurement and
              temperature profiling sensors that captures continuous
              measurements at multiple points with a single customizable
              waveguide with multiple configurations in contrast to contact
              based thermocouples/RTDs or contactless IR guns.
            </div>
            <div className="h-1/3 flex flex-col gap-1 text-sm sm:text-base">
              <div className="h-1/2 flex flex-col sm:flex-row gap-1">
                <div className="rounded-lg w-full sm:w-1/2 flex border border-[#D9D9E0] bg-white">
                  <div className="w-[20%] h-full p-2 flex items-center justify-center">
                    <img src={isteel} />
                  </div>
                  <div className="w-[80%] font-semibold flex items-center p-1 sm:p-2">
                    Steel Manufacturing
                  </div>
                </div>

                <div className="rounded-lg w-full sm:w-1/2 flex border border-[#D9D9E0] bg-white">
                  <div className="w-[20%] h-full p-2 flex items-center justify-center">
                    <img src={aicon} />
                  </div>
                  <div className="w-[80%] font-semibold flex items-center p-1 sm:p-2">
                    Aluminium Manufacturing
                  </div>
                </div>
              </div>
              <div className="h-1/2 flex flex-col sm:flex-row gap-1">
                <div className="rounded-lg w-full sm:w-1/2 flex border border-[#D9D9E0] bg-white">
                  <div className="w-[20%] h-full p-2 flex items-center justify-center">
                    <img src={semi} />
                  </div>
                  <div className="w-[80%] font-semibold flex items-center p-1 sm:p-2">
                    Semiconductor Manufacturing
                  </div>
                </div>

                <div className="rounded-lg w-full sm:w-1/2 flex border border-[#D9D9E0] bg-white">
                  <div className="w-[20%] h-full p-2 flex items-center justify-center">
                    <img src={ref} />
                  </div>
                  <div className="w-[80%] font-semibold flex items-center p-1 sm:p-2">
                    Refineries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ports */}
        <div className="sm:h-[70vh] sm:flex p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg mb-4">
          <div className="w-full sm:w-[45%] p-2">
            <div
              className="w-full h-full flex flex-col justify-center items-center rounded-lg relative"
              style={{
                background:
                  "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
              }}
            >
              <img
                className="w-[50%] h-[95%] object-cover object-top"
                src={ports}
                alt="PoRTS"
              />
              <div
                className="h-[45%] sm:h-[20%] absolute bottom-0 w-full px-4 rounded-b-lg"
                style={{
                  background: "rgba(64, 64, 64, 0.5)",
                  backdropFilter: "blur(9px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-2xl font-semibold h-[45%]"
                  style={{
                    background:
                      "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    display: "inline-block",
                  }}
                >
                  PoRTS
                </div>
                <div className="h-[55%] text-white text-[12px]">
                  A single customizable wavelength can measure viscosity,
                  density & Temperature continuously.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[55%] p-2 sm:p-4">
            <div className="h-[40%]">
              <div className="h-[55%] sm:flex">
                <div className="w-full sm:w-[80%] text-xl sm:text-3xl font-semibold pr-2">
                  Multi-Parameter Measurement Sensor
                </div>
                <div className="w-full sm:w-[20%] py-1">
                  <div className="flex rounded-full items-center justify-center gap-1 p-1 bg-[#01285C]">
                    <div className="text-[#FE9D1C]">
                      <RiPlayCircleFill size={20} />
                    </div>
                    <div className="text-sm mb-[2px] text-white">
                      Play Video
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[45%]">
                <div className="sm:flex gap-2 w-full">
                  <div className="w-full sm:w-auto inline-block px-2 py-1 rounded-full text-sm font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] mb-1 sm:mb-0 text-center">
                    Viscosity: 50 cP - 15000 cP
                  </div>
                  <div className="w-full sm:w-auto inline-block px-2 py-1 rounded-full text-sm font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center">
                    Density: 700 kg/m³ to 1200 kg/m³
                  </div>
                </div>
                <div className="w-full sm:w-auto inline-block px-2 py-1 rounded-full text-sm font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] mt-1 text-center">
                  Temperature: 20° C to 400° C
                </div>
              </div>
            </div>
            <div className="h-[30%] text-[#60646C] py-2 text-sm sm:py-0 sm:[12px]">
              PoRTS is an invasive/non-invasive based IIoT-enabled rheology and
              temperature measurement sensor that continuously captures multiple
              parameters such as viscosity, density and temperature with a
              single waveguide unlike discrete measurements with
              thermocouple/RTDs or discrete measurements with sampling from
              viscometer and density meter.
            </div>
            <div className="h-[30%] flex flex-col gap-1 text-sm sm:text-base">
              <div className="h-1/2 flex flex-col sm:flex-row gap-1">
                <div className="rounded-lg w-full sm:w-1/2 flex border border-[#D9D9E0] bg-white">
                  <div className="w-[20%] h-full p-2 flex items-center justify-center">
                    <img src={paint} />
                  </div>
                  <div className="w-[80%] font-semibold flex items-center p-1 sm:p-2">
                    Paint Manufacturing
                  </div>
                </div>

                <div className="rounded-lg w-full sm:w-1/2 flex border border-[#D9D9E0] bg-white">
                  <div className="w-[20%] h-full p-2 flex items-center justify-center">
                    <img src={luboil} />
                  </div>
                  <div className="w-[80%] font-semibold flex items-center p-1 sm:p-2">
                    Lubrication Oil
                  </div>
                </div>
              </div>
              <div className="h-1/2 flex flex-col sm:flex-row gap-1">
                <div className="rounded-lg w-full sm:w-1/2 flex border border-[#D9D9E0] bg-white">
                  <div className="w-[20%] h-full p-2 flex items-center justify-center">
                    <img src={eor} />
                  </div>
                  <div className="w-[80%] font-semibold flex items-center p-1 sm:p-2">
                    E.O.R.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ztar */}
        <div className="sm:h-[70vh] sm:flex p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg mb-4">
          <div className="w-full sm:w-[45%] p-2">
            <div
              className="w-full h-full flex flex-col justify-center items-center rounded-lg relative"
              style={{
                background:
                  "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
              }}
            >
              <img
                className="w-[45%] h-[85%] object-cover object-top"
                src={ztar}
                alt="ztar"
              />
              <div
                className="h-[45%] sm:h-[20%] absolute bottom-0 w-full px-4 rounded-b-lg"
                style={{
                  background: "rgba(64, 64, 64, 0.5)",
                  backdropFilter: "blur(9px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-2xl font-semibold h-[45%]"
                  style={{
                    background:
                      "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    display: "inline-block",
                  }}
                >
                  Ztar
                </div>
                <div className="h-[55%] text-white text-[12px]">
                  A single wavelength can measure viscosity, density &
                  Temperature continuously.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[55%] p-2 sm:p-4">
            <div className="h-[40%]">
              <div className="h-[75%] sm:flex">
                <div className="w-full sm:w-[80%] text-xl sm:text-3xl font-semibold">
                  Ultrasonic contact & <br /> non-contact based level
                  measurement sensor
                </div>
                <div className="w-full sm:w-[20%] py-1">
                  <div className="flex rounded-full items-center justify-center gap-1 p-1 bg-[#01285C]">
                    <div className="text-[#FE9D1C]">
                      <RiPlayCircleFill size={20} />
                    </div>
                    <div className="text-sm mb-[2px] text-white">
                      Play Video
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[25%]">
                <div className="w-full sm:w-auto inline-block px-2 py-1 rounded-full text-sm font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center">
                  Level: 0.03 m to 10 m
                </div>
              </div>
            </div>
            <div className="h-[25%] text-[#60646C] py-2 text-sm sm:py-0 sm:text-base flex items-center">
              Ztar is a contact/contactless IIoT-enabled level measurement
              sensor that captures continuous level across any hazardous
              environment with accuracy in contrast to radar-based level
              measurement sensors.
            </div>
            <div className="h-[35%] flex flex-col gap-1 text-sm sm:text-base">
              <div className="h-1/2 flex flex-col sm:flex-row gap-1">
                <div className="rounded-lg w-full sm:w-1/2 flex border border-[#D9D9E0] bg-white">
                  <div className="w-[20%] h-full p-2 flex items-center justify-center">
                    <img src={metal} />
                  </div>
                  <div className="w-[80%] font-semibold flex items-center p-1 sm:p-2">
                    Metal Manufacturing
                  </div>
                </div>

                <div className="rounded-lg w-full sm:w-1/2 flex border border-[#D9D9E0] bg-white">
                  <div className="w-[20%] h-full p-2 flex items-center justify-center">
                    <img src={refrigerant} />
                  </div>
                  <div className="w-[80%] font-semibold flex items-center p-1 sm:p-2">
                    Refrigerants
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
