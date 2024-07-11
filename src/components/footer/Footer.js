import React from 'react'
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="mt-10 ">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">

        </div>
      </div>

    </div>
  );
}

export default Footer