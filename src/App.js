import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Coins from "./Components/Coins";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Account from "./routes/Account";
import CoinPage from "./routes/CoinPage";
import Crypto from "./routes/Crypto";
import Home from "./routes/Home";
import Nft from "./routes/Nft";
import NftPage from "./routes/NftPage";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        // console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <ThemeProvider>
     <AuthContextProvider>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/crypto" element={<Crypto coins={coins} />} />
        <Route path="/nft" element={<Nft coins={coins} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path='/coin/:coinId' element={<CoinPage/>}>
          <Route path=':coinId'/>
        </Route>
        <Route path='/nft/:nftId' element={<NftPage/>}>
          <Route path=':nftId'/>
        </Route>
      </Routes>
      <Footer/>
     </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
