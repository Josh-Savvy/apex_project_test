import React from "react";

const TestimonialBanner = () => {
  return (
    <div className="bg-orange-500 text-white p-3 pt-6 js-show-on-scroll pb-28">
      <h3 className="text-center text-xl text-3xl">
        Our blessed client <br /> said about us 😍
      </h3>
      <div className="md:flex flex-cols-2 gap-8 md:mx-40 mt-12 px-2">
        <div className="bg-white p-5 rounded-lg md:w-1/2 relative js-show-on-scroll">
          <h3 className="text-orange-500 text-xs font-bold text-center">
            "Incredible experience"
          </h3>
          <p className="text-zinc-600 text-xs mt-4 md:px-10 pb-2 js-show-on-scroll">
            We had an incredible experience working with Mixland and were
            impressed they made such a big difference in only three weeks. Our
            team is so grateful for the wonderful improvements they made and
            their ability to get familiar with the concept so quickly.
          </p>
          <span
            className="absolute -bottom-7 fa fa-caret-down text-white left-32"
            style={{ fontSize: "3rem" }}
          ></span>
          <div className="absolute -bottom-16 md:left-24 left-14">
            <div className="flex flex-cols-2 gap-5">
              <img src="/static/images/Ellipse-4.png" className="h-10" alt="" />
              <span className="text-sm">
                Wade Warren{" "}
                <p className="text-xs whitespace-nowrap">
                  CEO, ABC Corporation
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg md:w-1/2 relative js-show-on-scroll mt-20 md:mt-0">
          <h3 className="text-orange-500 text-xs font-bold text-center">
            "Incredible experience"
          </h3>
          <p className="text-zinc-600 text-xs mt-4 md:px-10 pb-2 js-show-on-scroll">
            We had an incredible experience working with Mixland and were
            impressed they made such a big difference in only three weeks. Our
            team is so grateful for the wonderful improvements they made and
            their ability to get familiar with the concept so quickly.
          </p>
          <span
            className="absolute -bottom-7 fa fa-caret-down text-white left-32"
            style={{ fontSize: "3rem" }}
          ></span>
          <div className="absolute -bottom-14 md:left-24 left-14">
            <div className="flex flex-cols-2 gap-5">
              <img src="/static/images/Ellipse-3.png" className="h-10" alt="" />
              <span className="text-sm">
                Esther Howard <p className="text-xs whitespace-nowrap">CEO, ABC Corporation</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBanner;
