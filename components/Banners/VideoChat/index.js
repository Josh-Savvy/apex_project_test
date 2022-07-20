import React from "react";

const VideoChatBanner = () => {
  return (
    <div className="mt-5 w-full bg-zinc-100 pt-12 md:pb-12 mb-10 pb-7 js-show-on-scroll">
      <div className="md:flex md:flex-cols-2 justify-center md:mx-20 mx-10">
        <div className="relative md:w-2/5">
          <img
            style={{ zIndex: -1 }}
            src="/static/images/woman-with-headset-video-call.png"
            className="h-full w-80 js-show-on-scroll"
            alt=""
          />
          <div className="absolute bottom-0 bg-black/70 pt-1 pb-1 w-full px-9 md:px-0 md:w-80">
            <div className="flex flex-cols-4 gap-7 md:gap-10 text-white md:px-12 w-full">
              <i className="fa fa-rotate-right mt-2"></i>
              <i className="fa fa-camera mt-2"></i>
              <span className="">
                <i className="fa fa-phone bg-red-500 p-1 px-3 rounded-lg"></i>
              </span>
              <i className="fa fa-thumbs-up mt-2"></i>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 js-show-on-scroll2">
          <div className="mt-10 md:mt-0">
            <h1 className="text-xl font-semibold">
              Meet your customers, with live video chat
            </h1>
            <p className="text-sm mt-5">
              Proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam enim.
            </p>
            <p className="text-sm mt-5 js-show-on-scroll">
              Get paychecks up to two days early. Get a $20 bonus when you
              receive qualifying direct deposits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoChatBanner;
