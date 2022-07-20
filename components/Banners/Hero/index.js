import Link from "next/link";
import React from "react";
import MessageCard from "../../SubComponents/MessageCard";

const HeroBanner = () => {
  return (
    <div className="md:flex md:mx-20 lg:mx-40 lg:ml-60 mt-20">
      <div className="grid grid-rows-3 mx-5 w-3/4">
        <h1 className="text-xl md:text-2xl w-full font-semibold mt-5">
          Start chatting with customers, anytime, anywhere with Apex
        </h1>
        <span className="md:w-4/5 text-sm md:mt-0 mt-4 text-gray-600">
          Great software that allows you to chat from any <br /> place at any
          time without any interruption.
        </span>
        <div className="w-1/2 md:-mt-10">
          <Link href="/">
            <button className="bg-orange-500 flex p-2 text-white text-sm rounded-md whitespace-nowrap">
              Start Chatting Now <i className="fa fa-arrow-right ml-1 mt-1"></i>
            </button>
          </Link>
        </div>
        <div className="hidden md:block grid grid-cols-4 -mt-24 text-sm md:text-md">
          <div className="flex w-22 h-10">
            <img className="" src="/static/images/Ellipse-3.png" alt="" />
            <img className="-ml-3" src="/static/images/Ellipse-4.png" alt="" />
            <img className="-ml-3" src="/static/images/Ellipse-5.png" alt="" />
          </div>
          <div className="grid grid-rows-2 h-10">
            <p className="font-semibold">2,291</p>
            <p
              className="text-gray-400 md:whitespace-nowrap"
              style={{ fontSize: "13px" }}
            >
              Happy Customers
            </p>
          </div>
          <div className="bg-gray-500 w-0.5 h-6 ml-10 mt-2"></div>
          <div className="grid grid-rows-2 h-10 -ml-10">
            <p className="font-semibold">4.8/5</p>
            <div className="text-sm flex">
              <div>
                <i className="fa fa-star text-yellow-400"></i>
                <i className="fa fa-star text-yellow-400"></i>
                <i className="fa fa-star text-yellow-400"></i>
                <i className="fa fa-star text-yellow-400"></i>
                <i className="fa fa-star text-gray-300"></i>
              </div>
              <p style={{ fontSize: "12px" }} className="ml-2">
                Rating
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden grid grid-rows-3 text-sm md:text-md -mt-14 mb-7">
          <div className="flex flex-cols-2 gap-6">
            <div className="flex h-10">
              <img className="" src="/static/images/Ellipse-3.png" alt="" />
              <img
                className="-ml-3"
                src="/static/images/Ellipse-4.png"
                alt=""
              />
              <img
                className="-ml-3"
                src="/static/images/Ellipse-5.png"
                alt=""
              />
            </div>
            <div className="grid grid-rows-2 h-10">
              <p className="font-semibold">2,291</p>
              <p
                className="text-gray-400 whitespace-nowrap"
                style={{ fontSize: "13px" }}
              >
                Happy Customers
              </p>
            </div>
          </div>
          <div className="bg-gray-500 h-0.5 w-6 ml-1 mt-2"></div>
          <div className="grid grid-rows-2 h-10 -mt-4">
            <p className="font-semibold">4.8/5</p>
            <div className="text-sm flex">
              <div>
                <i className="fa fa-star text-yellow-400"></i>
                <i className="fa fa-star text-yellow-400"></i>
                <i className="fa fa-star text-yellow-400"></i>
                <i className="fa fa-star text-yellow-400"></i>
                <i className="fa fa-star text-gray-300"></i>
              </div>
              <p style={{ fontSize: "12px" }} className="ml-2">
                Rating
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/3 relative hidden md:block">
        <div
          className="bg-no-repeat bg-contain bg-hero-image relative -top-3 ml-10"
          style={{ width: "25rem", height: "25rem", zIndex: "-1" }}
        >
          <MessageCard
            className="absolute -left-10 bottom-12 md:px-10 animate-bounce"
            imgSrc="/static/images/Ellipse-37.png"
            name="Ronalds Richards"
            textMsg="One of the best chatting apps I have ever used."
          />
          <MessageCard
            className="absolute left-40 bottom-32 animate-bounce"
            imgSrc="/static/images/jenny.png"
            name="Jenny Wilson"
            textMsg="I commented on Figma, I want to add some fancy icons. Do you have any icon set?"
          />
        </div>
      </div>

      <div className="relative md:hidden flex justify-center">
        <div
          className="bg-no-repeat bg-contain bg-hero-image relative -top-3 ml-4"
          style={{ width: "20rem", height: "20rem", zIndex: "-1" }}
        >
          <MessageCard
            className="absolute bottom-5 animate-bounce"
            imgSrc="/static/images/Ellipse-37.png"
            name="Ronalds Richards"
            textMsg="One of the best chatting apps I have ever used."
          />
          <MessageCard
            className="absolute left-28 bottom-20 animate-bounce"
            imgSrc="/static/images/jenny.png"
            name="Jenny Wilson"
            textMsg="I commented on Figma, I want to add some fancy icons. Do you have any icon set?"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
