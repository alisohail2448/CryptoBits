import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div className="pt-8 mt-8 mb-4 rounded-card text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex w-full justify-evenly md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="py-2 text-sm">Help Center</li>
              <li className="py-2 text-sm">Contact Us</li>
              <li className="py-2 text-sm">API Status</li>
              <li className="py-2 text-sm">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="py-2 text-sm">About us</li>
              <li className="py-2 text-sm">Careers</li>
              <li className="py-2 text-sm">Invest</li>
              <li className="py-2 text-sm">Legal</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="flex justify-end w-full">
            <div className="w-full mid:w-[300px] py-4 relative">
              <div className="flex justify-center py-4 md:justify-end md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right">
                Sign up for Crypto news
              </p>
              <div className="py-4">
                <form>
                  <div class="flex justify-end">
                    <div class="xl:w-80">
                      <div class="input-group relative flex items-center w-full ">
                        <input
                          type="search"
                          class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-primary bg-clip-padding border border-solid border-secondary rounded transition ease-in-out m-0 focus:text-gray-500 focus:bg-secondary focus:border-white focus:outline-none"
                          placeholder="Enter your email"
                          aria-label="Search"
                          aria-describedby="button-addon2"
                        />
                        <button
                          class="flex justify-center btn  px-2 py-2 font-bold text-md w-32 rounded shadow-md bg-button text-btnText active:shadow-lg transition duration-150 ease-in-out  items-center"
                          type="button"
                          id="button-addon2"
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            <div className="flex justify-end">
            <div className="flex justify-between py-4 text-accent w-[65%] ">
                <AiOutlineInstagram />
                <FaTwitter />
                <FaFacebook />
                <FaLinkedin />
                <FaGithub />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center">Powered by Sohail Ali</p>
    </div>
  );
};

export default Footer;
