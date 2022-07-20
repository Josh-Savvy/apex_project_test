import { useEffect } from "react";
import "../public/static/css/globals.css";
import "nprogress/nprogress.css";
import Head from  "next/head";
import "../public/static/css/main.css";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   document
  //     .getElementsByTagName("html")[0]
  //     .setAttribute("class", "duration-100");
  //   if (window) {
  //     let localStorageTheme = localStorage.getItem("theme");
  //     if (!localStorageTheme) {
  //       localStorage.setItem("theme", "light");
  //     }
  //   }
    
  // }, []);

  // const setTheme = () => {
  //   if (window) {
  //     const bodyTagName = document.getElementsByTagName("html")[0];
  //     let localStorageTheme = localStorage.getItem("theme");

  //     if (localStorageTheme === "light") {
  //       bodyTagName.setAttribute("class", "light");
  //       document
  //         .getElementsByTagName("body")[0]
  //         .setAttribute("class", "bg-white");
  //     } else {
  //       bodyTagName.setAttribute("class", "dark");
  //       document
  //         .getElementsByTagName("body")[0]
  //         .setAttribute("class", "bg-zinc-900");
  //     }
  //   }
  // };

  const setAnimation = () => {
    const callback = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        } else {
          entry.target.classList.remove("animate-fadeIn");
        }
      });
    };

    const callback2 = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn2");
        } else {
          entry.target.classList.remove("animate-fadeIn2");
        }
      });
    };

    const observer = new IntersectionObserver(callback);
    const observer2 = new IntersectionObserver(callback2);

    const targets = document.querySelectorAll(".js-show-on-scroll");
    const targets2 = document.querySelectorAll(".js-show-on-scroll2");

    targets.forEach(function (target) {
      target.classList.add("opacity-0");
      observer.observe(target);
    });
    targets2.forEach(function (target) {
      target.classList.add("opacity-0");
      observer2.observe(target);
    });
  };

  useEffect(() => {
    setAnimation();
    // setTheme();
  }, []);




  return <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>
    <Component {...pageProps} />;
  </>
}

export default MyApp;
