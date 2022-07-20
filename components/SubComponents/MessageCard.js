import React from "react";

const MessageCard = ({ className, imgSrc, textMsg, name }) => {
  return (
    <div className={className}>
      <div className="flex duration-300 bg-white py-1 rounded-lg w-3/4 opacity-80 js-show-on-scroll">
        <img src={imgSrc} className="h-7 w-1/5 mt-2 ml-2" alt="" />
        <div className="flex flex-col ml-3">
          <p style={{ fontSize: "9px" }} className="text-sm font-semibold">{name}</p>
          <p style={{ fontSize: "7px" }} className="text-zinc-400">{textMsg}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
