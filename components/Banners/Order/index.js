import React from "react";

const DirectOrder = () => {
  return (
    <div className="md:flex flex-cols-2 w-full pb-8 bg-zinc-100 js-show-on-scroll lg:px-12">
      <div className="md:w-3/6">
        <div className="md:px-20 pt-4 md:ml-12">
          <img
            src="/static/images/Group-341.png"
            className="md:p-10 p-10 js-show-on-scroll"
            alt=""
          />
        </div>
      </div>
      <div className="md:w-4/5">
        <div className="md:m-24 md:px-0 px-7">
          <h3 className="md:text-3xl text-xl font-semibold js-show-on-scroll">
            Get direct orders from your customers
          </h3>
          <p className="text-sm mt-7">
            Create custom landing pages with Rareblocks that converts more
            visitors than any website. With lots of unique blocks easily build a
            page. There are many variations of passages of available.
          </p>
          <div className="flex flex-cols-2 gap-6 mt-5">
            <div className="flex flex-cols-2 md:w-3/6">
              <h3 className="md:text-2xl font-bold">43K+</h3>
              <p className="text-xs ml-2">
                Website's <br /> powering
              </p>
            </div>
            <div className="flex flex-cols-2 md:w-3/6">
              <h3 className="md:text-2xl font-bold">7M+</h3>
              <p className="text-xs ml-2 whitespace-nowrap">
                Chat's in <br /> Last 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectOrder;
