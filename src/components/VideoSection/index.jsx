import React, { useState } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoSection = () => {
  const [playerError, setPlayerError] = useState(false);

  return (
    <div className="container">
      <div className="headingContainer pt-12 ">
        <span
          className="lg:text-3xl text-lg font-bold text-white"
          style={{ fontFamily: "AllroundGothic" }}
        >
          Lost Sales and Wastage Cost Retailers Millions Annually.
        </span>
      </div>

      <div className="videoSectionContainer pb-20 -pt-10">
        <div className="videoSectionLeftSection ">
          <div
            style={{ fontFamily: "Comfortaa, sans-serif" }}
            className="lg:text-lg text-sm text-white "
          >
            <div className="flex item-start  items-center object-center">
              <div className="mr-4">
                <img
                  src="/images/uploads/I1_white.svg"
                  alt=""
                  loading="lazy"
                  className="object-center w-1/5 "
                />
              </div>
              <p
                style={{ fontFamily: "Roboto, sans-serif" }}
                className="w-4/5 lg:text-lg md:text-xs  text-sm text-[#ffffff]  "
              >
                <span
                  style={{ fontFamily: "AllroundGothic" }}
                  className=" lg:text-lg md:text-sm  text-sm text-white "
                >
                  <b>RETAIL IS PERVASIVE DETAIL:</b>
                </span>{" "}
                Every retailer, small to large, is awash with millions of
                inventory decisions, informed by time-consuming, manual analysis
                of vast swathes of data.
              </p>
            </div>

            <div className="flex item-start  items-center object-center  py-4">
              <div className="mr-4">
                <img
                  src="/images/uploads/I2_white.svg"
                  alt=""
                  loading="lazy"
                  className="object-center w-1/5"
                />
              </div>
              <p
                style={{ fontFamily: "roboto" }}
                className="w-4/5 lg:text-lg md:text-sm  text-sm text-[#ffffff] "
              >
                <span
                  style={{ fontFamily: "AllroundGothic" }}
                  className=" para lg:text-lg md:text-xs  text-sm text-white "
                >
                  <b>THE COMPLEXITY IS MIND BOGGLING:</b>
                </span>{" "}
                It defeats even the largest, most experienced teams - who
                inevitably resort to crude calculations and compromises.
              </p>
            </div>

            <div className="flex item-start  items-center object-center  py-4 -mt-8">
              <div className="mr-4">
                <img
                  src="/images/uploads/I3_white.svg"
                  alt=""
                  loading="lazy"
                  className="object-center w-1/5"
                />
              </div>
              <p
                style={{ fontFamily: "roboto" }}
                className="w-4/5 lg:text-lg md:text-sm  text-sm text-[#ffffff] "
              >
                <span
                  style={{ fontFamily: "AllroundGothic" }}
                  className="lg:text-lg md:text-xs  text-sm text-white "
                >
                  <b>IT’S EXPENSIVE:</b>
                </span>{" "}
                Stock imbalances (usually excesses) result, requiring markdowns
                and inter-store transfers.
              </p>
            </div>
          </div>
        </div>

        <div className="videoSectionRightSection">
          {!playerError ? (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=jf3uYtBFNk0"
              controls={true}
              onError={(e) => {
                console.error('ReactPlayer error:', e);
                setPlayerError(true);
              }}
            />
          ) : (
            <div className="text-white">
              <p>Video unavailable. You can <a href="https://www.youtube.com/watch?v=jf3uYtBFNk0" target="_blank" rel="noreferrer" className="underline">open it on YouTube</a>.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};  

export default VideoSection;
