import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import cryptoBits from "../images/bits.png";
import { UserAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <nav className="top-0 flex items-center justify-between h-20 font-bold border-b rounded-nav border-b-secondary">
      <div className="flex items-center justify-between w-full h-20 font-bold md:px-20">
        <Link to="/" className="text-2xl">
          <div className="flex items-center justify-center">
            <img src={cryptoBits} width={40} height={40} alt="" />
            <h1 className="flex ">CryptoBits</h1>
          </div>
        </Link>
        <div className="w-[60%] flex justify-end">
          <div className="items-center justify-around w-[300px] hidden md:flex">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/crypto">
              <p>Crypto</p>
            </Link>
            <Link to="/nft">
              <p>NFT's</p>
            </Link>
          </div>

          {user?.email ? (
            <div className="flex items-center justify-center">
              <div className="hidden md:block ">
                <ThemeToggle />
              </div>
              <button onClick={handleSignOut}>Sign Out</button>
              <Link to="/account" className="p-4">
                <FaUserCircle className="text-3xl" />
              </Link>
            </div>
          ) : (
            <div className="items-center justify-center hidden md:flex">
              <div className="hidden md:block ">
                <ThemeToggle />
              </div>
              <Link to="/signin" className="p-4 hover:text-accent">
                Sign In
              </Link>
              <Link
                to="/signup"
                className="h-10 px-5 py-2 ml-2 shadow-lg bg-button text-btnText rounded-2xl hover:shadow-2xl"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
        <div
          onClick={handleNav}
          className="z-10 block cursor-pointer md:hidden "
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
              : "fixed left-[100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
          }
        >
          <ul className="w-full p-4">
            <li className="py-6 border-b">
              <Link onClick={handleNav} to="/">
                Home
              </Link>
            </li>
            <li className="py-6 border-b">
              <Link onClick={handleNav} to="/crypto">
                Crypto
              </Link>
            </li>
            <li className="py-6 border-b">
              <Link onClick={handleNav} to="/nft">
                NFT's
              </Link>
            </li>
            <li className="py-6">
              <ThemeToggle />
            </li>
          </ul>
          <div className="flex flex-col w-full p-4">
            <Link onClick={handleNav} to="/signin">
              <button className="w-full p-3 my-2 border shadow-xl bg-primary text-primary border-secondary rounded-2xl">
                Sign In
              </button>
            </Link>
            <Link onClick={handleNav} to="/signup">
              <button className="w-full p-3 my-2 shadow-xl bg-button text-btnText rounded-2xl">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
