import React from "react";
import Box1 from "../assets/box1.png";
import Box2 from "../assets/box2.png";
import { LiaUsersCogSolid } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Home() {
  return (
    <>
      <div className="w-full  bg-home relative bottom-8 p-4 md:p-8">
        <div className="head pt-16 md:pt-20">
          <h1 className="font-semibold text-center text-3xl md:text-5xl tracking-wide leading-8 md:leading-10">
            Elevate Your <span className="span-head">QA With</span> Automation
            Testing
          </h1>
          <p className="leading-7 md:leading-10 pt-3 head-text text-center mx-auto max-w-2xl">
            MeetAhsan is a training institute in Lahore, Pakistan that offers a
            wide range of courses on selenium and other automation frameworks.
            They have a team of experienced trainers who can help you learn the
            skills you need to succeed in your automation testing career.
          </p>
        </div>

        {/* Boxes */}
        <div className="flex flex-wrap justify-center md:justify-evenly pt-4 gap-4">
          <div className="w-full md:w-64 h-24 bg-white tracking-wide shadow-md">
            <div className="p-3 flex items-center">
              <img src={Box1} alt="Box1" />
              <span className="pl-4 md:pl-6 font-semibold box-text mt-3">
                AGILE SCRUM
              </span>
            </div>
          </div>
          <div className="w-full md:w-64 h-24 bg-white tracking-wide shadow-md">
            <div className="p-3 flex items-center">
              <img src={Box2} alt="Box2" />
              <span className="pl-4 md:pl-6 font-semibold box-text mt-3">
                SELENIUM
              </span>
            </div>
          </div>
          <div className="w-full md:w-64 h-24 bg-white tracking-wide shadow-md">
            <div className="p-3 flex items-center">
              <img src={Box1} alt="Box1" />
              <span className="pl-4 md:pl-6 font-semibold box-text mt-3">
                AGILE SCRUM
              </span>
            </div>
          </div>
          <div className="w-full md:w-64 h-24 bg-white tracking-wide shadow-md">
            <div className="p-3 flex items-center">
              <img src={Box2} alt="Box2" />
              <span className="pl-4 md:pl-6 font-semibold box-text mt-3">
                SELENIUM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section*/}

      <div className="w-full h-auto mb-4">
        <div>
          <div className="user-icon p-4 sm:p-10 flex flex-col sm:flex-row mb-4 sm:mb-10 gap-2">
            <LiaUsersCogSolid size={25} className="mt-1 ms-2" />
            <div>
              <h1 className="text-xl sm:text-2xl font-medium">
                Connect, Share, and Engage with Us
              </h1>
              <p className="user-text mt-3">
                Join our vibrant community to connect, share insights, and
                engage with exclusive content.
              </p>
              <div className="parent-box flex flex-col sm:flex-row sm:justify-between gap-2 mt-4 sm:mt-0">
                <div className="media-box w-full sm:w-36 h-14 border-2 flex items-center justify-start ps-2">
                  <div className="bg-red-600 rounded-full p-2 flex items-center justify-center">
                    <FaYoutube />
                  </div>
                  <p className="mt-3 ms-2">
                    <a
                      href="https://www.youtube.com/"
                      className="no-underline text-red-600 font-semibold"
                    >
                      YouTube
                    </a>
                  </p>
                </div>
                <div className="media-box w-full sm:w-36 h-14 border-2 flex items-center justify-start ps-2">
                  <div className="bg-green-600 rounded-full p-2 flex items-center justify-center">
                    <FaWhatsapp />
                  </div>
                  <p className="text-black mt-3 ms-2">
                    <a
                      href="https://www.whatsapp.com/"
                      className="no-underline text-green-600 font-semibold"
                    >
                      WhatsApp
                    </a>
                  </p>
                </div>
                <div className="media-box w-full sm:w-36 h-14 border-2 flex items-center justify-start ps-2">
                  <div className="bg-blue-600 rounded-full p-2 flex items-center justify-center">
                    <FaFacebook />
                  </div>
                  <p className="text-black mt-3 ms-2">
                    <a
                      href="https://www.facebook.com/"
                      className="no-underline text-blue-600 font-semibold"
                    >
                      Facebook
                    </a>
                  </p>
                </div>
                <div className="media-box w-full sm:w-36 h-14 border-2 flex items-center justify-start ps-2">
                  <div className="bg-blue-800 rounded-full p-2 flex items-center justify-center">
                    <CiLinkedin size={20} />
                  </div>
                  <p className="text-black mt-3 ms-2">
                    <a
                      href="https://www.linkedin.com/"
                      className="no-underline text-blue-800 font-semibold"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
