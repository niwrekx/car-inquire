"use client"

import React from 'react';
import Image from 'next/image';
import CustomButton from "./CustomButton";
    

const Hero = () => {
  const handleScroll =() => {};
  return (
    <div className="hero">
      {/*-----LEFT----*/}
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="hero__title">
          Find, book, or rent a car — quickly and easily.
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>
        <CustomButton 
          title ="Explore Cars"
          containerStyles ="bg-sky-500 text-white rounded-full mt-10"
          handleClick={handleScroll}
          
        />
      </div>
      {/*----RIGHT----*/}
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero3.png" alt="car-header-image" fill className="object-contain"/>
          </div>
            <div className="hero__image-overlay">
              <Image src="/hero-bg2.png" alt="" fill className="object-contain" />
            
            </div>
        </div>
    </div>

  )
}

export default Hero;