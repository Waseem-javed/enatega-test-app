"use client";
import React from "react";
import { CountryNames } from "@/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header, Footer } from "@/components/shared";
import Accordian from "@/components/shared/accordian/Accordian";
import { CiLocationOn } from "react-icons/ci";
import { MdControlCamera } from "react-icons/md";

const Home = () => {
  return (
    <>
      {/* header */}
      <Header />

      {/* map render */}
      <div className="map relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
          className="w-full h-[600px]"
          loading="lazy"
        ></iframe>
      </div>

      {/* user input location  */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#90EA93] rounded-sm p-5 w-96 flex max-w-sm items-center space-x-2 relative">
          <CiLocationOn className="absolute size-6 ml-2 text-gray-400" />
          <Input
            type="text"
            className="w-full pl-8 focus:outline-none "
            placeholder="Search your location"
          />
          <Button variant={"secondary"} type="submit">
            Find Resturent
          </Button>
        </div>
      </div>

      {/* explore countries */}
      <section className="px-36 pt-16">
        <h1 className="ml-10 text-3xl text-bold">Explore Countires</h1>
        <div className="py-2 px-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {CountryNames.map((name, idx) => {
            return <Accordian key={idx} title={name} />;
          })}
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
