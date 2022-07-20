import React from "react";

const FeaturesBanner = () => {
  return (
    <div className="text-center md:mt-20 mt-8 mb-5 js-show-on-scroll lg:mx-80 lg:px-10">
      <h1 className="font-semibold text-xl js-show-on-scroll">
        Features for a better experience
      </h1>
      <div className="md:flex md:flex-cols-3 grid text-center">
        <div className="">
          <div className="flex justify-center duration-300 bg-white py-1 rounded-lg">
            <img
              src="/static/images/videocamera.png"
              className="mt-2 ml-2 bg-orange-500 p-3 rounded-full js-show-on-scroll"
              alt=""
            />
          </div>
          <p className="text-sm js-show-on-scroll">Video messaging</p>
          <p className="text-zinc-500 mx-10 mt-2" style={{ fontSize: "11px" }}>
            This software is very easy for you to manage. You can use it as you
            wish.
          </p>
        </div>
        <div className="">
          <div className="flex justify-center duration-300 bg-white py-1 rounded-lg js-show-on-scroll">
            <img
              src="/static/images/Group-337.png"
              className="mt-2 ml-2 w-16"
              alt=""
            />
          </div>
          <p className="text-sm">Save your time</p>
          <p className="text-zinc-500 mx-10 mt-2" style={{ fontSize: "11px" }}>
            This software is very easy for you to manage. You can use it as you
            wish.
          </p>
        </div>
        <div className="js-show-on-scroll">
          <div className="flex justify-center duration-300 bg-white py-1 rounded-lg">
            <img
              src="/static/images/wifi-protected-symbol-svgrepo-com.svg"
              className="mt-2 ml-2 w-12"
              alt=""
            />
          </div>
          <p className="text-sm">Keep safe and private</p>
          <p className="text-zinc-500 mx-10 mt-2" style={{ fontSize: "11px" }}>
            This software is very easy for you to manage. You can use it as you
            wish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
