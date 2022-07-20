import React from "react";
import ChatCard from "./ChatCard";

const ConversationBanner = () => {
  return (
    <div className="md:flex md:flex-cols-2 mx-4 mb-16 pb-2 lg:mx-28">
      <div className="md:w-3/6 hidden md:block">
        <div className="p-5 px-16">
          <h3 className="md:text-3xl text-xl font-bold js-show-on-scroll">
            Start selling directly inside conversations
          </h3>
          <p className="text-sm mt-7 js-show-on-scroll">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered all injected humour or randomised words
            which don't look even slightly believable.
          </p>
          <button className="bg-orange-500 p-2 rounded-lg text-sm text-white mt-4">
            Start Chatting Now
          </button>
        </div>
      </div>
      <div className="md:w-3/6 md:px-16 ">
        <ChatCard />
      </div>
      <div className="md:w-3/6 md:hidden">
        <div className="mt-6 mb-5 mr-5">
          <h3 className="md:text-3xl text-xl font-bold">
            Start selling directly inside conversations
          </h3>
          <p className="text-xs mt-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered all injected humour or randomised words
            which don't look even slightly believable.
          </p>
          <button className="bg-orange-500 p-3 rounded-lg text-sm text-white mt-4">
            Start Chatting Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversationBanner;
