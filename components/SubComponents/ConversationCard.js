import React from "react";

export const ConversationCard = ({
  imageClassName,
  chatBackground,
  text,
  imgSrc,
  fontColor,
  translationProps,
}) => {
  return (
    <div className={translationProps}>
      <div className="flex flex-cols-2 relative duration-300 js-show-on-scroll">
        {imgSrc && <img src={imgSrc} className={imageClassName} alt="" />}
        <div className="md:px-10 duration-300">
          <p
            className="md:px-2 p-1 rounded md:mt-5 mt-8 duration-300 text-xs"
            style={{
              color: fontColor,
              background: chatBackground,
            }}
          >
            {text}
          </p>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export const IncomingCallCard = () => {
  return (
    <>
      <div
        className="bg-white rounded-md pt-3 px-5 h-full pb-3 relative js-show-on-scroll2 animate-bounce"
        style={{ boxShadow: "0 4px 12px rgb(23 23 23 / 25%)" }}
      >
        <div className="flex justify-center">
          <img
            src="/static/images/Ellipse-5.png"
            className="w-10 h-10"
            alt=""
          />
        </div>
        <div>
          <p className="font-semibold" style={{ fontSize: "12px" }}>
            Alex Smith
          </p>
          <p className="text-zinc-300 mb-3" style={{ fontSize: "9px" }}>
            Project Manager
          </p>
        </div>
        <div className="flex flex-cols-2 gap-5 text-white text-sm fa-3x">
          <i className="fa fa-phone p-1 px-2 bg-green-400 rounded-full animate-bounce"></i>
          <i className="fa fa-close p-1 px-2 bg-red-500 rounded-full"></i>
        </div>
      </div>
    </>
  );
};

export const ProjectRateCard = () => {
  return (
    <>
      <div
        className="bg-teal-400 text-white rounded-md md:w-40 w-32 pt-3 px-5 h- pb-3 relative js-show-on-scroll2"
        style={{ boxShadow: "0 4px 12px rgb(23 23 23 / 25%)" }}
      >
        <p style={{ fontSize: "9px" }}>
          Will we have daily calls for every project?
        </p>
        <div>
          <span className="flex justify-between">
            <p style={{ fontSize: "9px" }}>Yes</p>
            <p style={{ fontSize: "9px" }}>65% </p>
          </span>
          <span className="">
            <div className="w-full bg-gray-300 rounded-full h-1 dark:bg-gray-700">
              <div
                className="bg-white h-1 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
          </span>
        </div>
        <div>
          <span className="flex justify-between">
            <p style={{ fontSize: "9px" }}>No</p>
            <p style={{ fontSize: "9px" }}>45% </p>
          </span>
          <span className="">
            <div className="w-full bg-gray-300 rounded-full h-1 dark:bg-gray-700">
              <div
                className="bg-white h-1 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};
