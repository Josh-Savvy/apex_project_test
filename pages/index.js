import React from "react";
import Layout from "../components/Layout";
import HeroBanner from "../components/Banners/Hero";
import FeaturesBanner from "../components/Banners/Features";
import VideoChatBanner from "../components/Banners/VideoChat";
import ConversationBanner from "../components/Banners/Conversation";
import DirectOrderBanner from "../components/Banners/Order";
import TestimonialBanner from "../components/Banners/Testimonial";

const Home = () => {
  return (
    <Layout>
      <div className="">
        <HeroBanner />
        <FeaturesBanner />
        <VideoChatBanner />
        <ConversationBanner />
        <DirectOrderBanner />
        <TestimonialBanner />
      </div>
    </Layout>
  );
};

export default Home;
