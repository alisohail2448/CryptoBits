import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import nft1 from "../images/meta.jpg";
import img from "../images/block.jpg";
import img2 from "../images/web.jpg";
import main from "../images/main.png";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import cryptoBits from "../images/bits.png";

const Home = () => {
  const { user, logOut } = UserAuth();
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <section className="h-[100vh]">
        <div className="flex items-center justify-center ">
          <div className="w-[60%] h-[100vh] flex items-center justify-center flex-col ">
            <div className="h-[full]">
             <div className="flex items-center justify-center">
             <p className="mr-2 text-xl font-bold text-center">Welcome to </p>
              <img src={cryptoBits} width={40} height={40} alt="" />
                <h1 className="flex text-2xl font-bold">CryptoBits</h1>
             </div>
              <h1 className="text-[80px] font-bold  bitsMain text-center">
                Explore The Future of Metaverse
              </h1>
              <p className="mt-4 text-xl text-center">
                CryptoBits New Crypto and Nft Based Platform
              </p>
            </div>
            {user?.email ? (
              <div className="flex flex-col items-center justify-center mt-8">
                <button className="h-10 px-8 py-2 mx-2 font-bold shadow-lg bg-button text-btnText rounded-2xl hover:shadow-2xl">
                  Explore{'>'}
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center mt-6">
                <Link
                  to="/signin"
                  className="h-10 px-8 py-2 mx-2 font-bold border border-secondary rounded-2xl hover:text-accent bg-secondary"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="h-10 px-8 py-2 mx-2 font-bold shadow-lg bg-button text-btnText rounded-2xl hover:shadow-2xl"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          <div className="w-[40%] h-[100vh] flex items-center justify-center">
            <img src={main} className="w-[100%]" alt="" />
          </div>
        </div>
      </section>
      <section className="">
        <div className="p-8 px-40 mt-24 mb-24 text-primary">
          <div className="flex justify-center">
            <div className="px-8">
              <h2 className="text-[100px] textLinear font-bold">Metaverse</h2>
              <br />
              <p className="text-lg text-justify w-[90%]">
                The metaverse is a concept of a persistent, online, 3D universe
                that combines multiple different virtual spaces. You can think
                of it as a future iteration of the internet. The metaverse will
                allow users to work, meet, game, and socialize together in these
                3D spaces.
                <br />
                <br />
                The metaverse isn’t fully in existence, but some platforms
                contain metaverse-like elements. Video games currently provide
                the closest metaverse experience on offer. Developers have
                pushed the boundaries of what a game is through hosting in-game
                events and creating virtual economies.
              </p>
            </div>
            <div className="flex items-center justify-center mt-10">
              <img src={nft1} width={1200} alt="" />
            </div>
          </div>
        </div>
      </section>
  
      <section className="">
        <div className="p-8 px-40 mt-24 mb-24 text-primary">
          <div className="flex justify-center">
            <div className="flex justify-center items-center mt-40 w-[200%]">
              <img src={img2} width={1200} alt="" />
            </div>
            <div className="px-8">
              <h2 className="text-[100px] textLinear font-bold ml-14">Web 3.0</h2>
              <br />
              <p className="text-lg text-justify ml-14">
                Web 3.0 (Web3) is the third generation of the evolution of web
                technologies. The web, also known as the World Wide Web, is the
                foundational layer for how the internet is used, providing
                website and application services.
                <br /> <br />
                Web 3.0 is still evolving and being defined, and as such, there
                isn't a canonical, universally accepted definition. What is
                clear, though, is that Web 3.0 will have a strong emphasis on
                decentralized applications and make extensive use of
                blockchain-based technologies. Web 3.0 will also make use of
                machine learning and artificial intelligence (AI) to help
                empower more intelligent and adaptive applications.
                <br /> <br />
                Another aspect that is part of the emerging definition of Web
                3.0 is the notion of a semantic web. Among those that have
                advocated for the integration of semantic technology into the
                web is the creator of the web, Tim Berners-Lee.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="p-8 px-40 mt-24 mb-24 text-primary">
          <div className="flex justify-center">
            <div className="px-8">
              <h2 className="text-[100px] textLinear font-bold">Blockchain</h2>
              <br />
              <p className="text-lg text-justify w-[90%]">
                In a few words, a blockchain is a digital ever-growing list of
                data records. Such a list is comprised of many blocks of data,
                which are organized in chronological order and are linked and
                secured by cryptographic proofs.
                <br /> <br />
                The first prototype of a blockchain is dated back to the early
                1990s when computer scientist Stuart Haber and physicist W.
                Scott Stornetta applied cryptographic techniques in a chain of
                blocks as a way to secure digital documents from data tampering.
                The work of Haber and Stornetta certainly inspired the work of
                Dave Bayer, Hal Finney, and many other computer scientists and
                cryptography enthusiasts - which eventually lead to the creation
                of Bitcoin, as the first decentralized electronic cash system
                (or simply the first cryptocurrency). The Bitcoin whitepaper was
                published in 2008 under the pseudonym Satoshi Nakamoto.
                <br /> <br />
                Although the blockchain technology is older than Bitcoin, it is
                a core underlying component of most cryptocurrency networks,
                acting as a decentralized, distributed and public digital ledger
                that is responsible for keeping a permanent record (chain of
                blocks) of all previously confirmed transactions.
              </p>
            </div>
            <div className="flex justify-center items-center mt-10 w-[200%]">
              <img src={img} width={1800} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
