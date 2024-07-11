import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-black">Mark Vincent Gonzales</h3>
        <p className="text-lg font-normal text-gray-900">
          freelancer
        </p>
        <p className="text-base text-gray-900 tracking-wide">
          As a dedicated freelancer, I've had the opportunity to work with a diverse range of clients, bringing their visions to life through video editing, logo design, and website development.
        </p>
        <p className="text-base text-gray-900 flex items-center gap-2">
          Phone: <span className="text-lightText">09319783748</span>
        </p>
        <p className="text-base text-gray-900 flex items-center gap-2">
          Email: <span className="text-lightText">arashikage95@gmail.com</span>
        </p>
      </div>

    </div>
  );
}

export default ContactLeft