import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";


const CoinItem = ({ coin }) => {
  const [savedCoin, setSavedCoin] = useState(false)
  const {user} = UserAuth();

  const coinPath = doc(db, 'users', `${user?.email}`)
  const saveCoin = async () =>{
    if(user?.email){
      setSavedCoin(true)
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank:coin.market_cap_rank,
          symbol: coin.symbol
        })
      })
    }
    else{
      alert("Please sign in to save a coin to your watch list")
    }
  }

  return (
    <tr className="h-[80px] border-b border-b-secondary overflow-hidden hover:bg-secondary px-10">
      <td onClick={saveCoin}>
      <div className="flex justify-center">
      {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
      </div>
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
       <Link to={`/coin/${coin.id}`}>
       <div className="flex justify-center">
          <img
            className="w-6 mr-2 rounded-full"
            src={coin.image}
            alt={coin.id}
          />
          <p className="hidden font-bold sm:table-cell">{coin.name}</p>
        </div>
       </Link>
      </td> 
      <td><p className="flex items-center justify-center h-8 px-1 mr-2 font-bold rounded-md bg-secondary">{coin.symbol.toUpperCase()}</p></td>
      <td><p className="flex items-center justify-center h-8 px-1 mr-2 font-bold rounded-md bg-secondary">₹{coin.current_price.toLocaleString()}</p></td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="flex items-center justify-center h-8 px-1 mr-2 font-bold text-green-600 rounded-md bg-secondary">{coin.price_change_percentage_24h.toFixed(2)}%</p>
        ) : (
          <p className="flex items-center justify-center h-8 px-1 mr-2 font-bold text-red-600 rounded-md bg-secondary">{coin.price_change_percentage_24h.toFixed(2)}%</p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell"><p className="flex items-center justify-center h-8 px-1 mr-2 font-bold rounded-md bg-secondary">₹{coin.total_volume.toLocaleString()}</p></td>
      <td className="w-[180px] hidden sm:table-cell"><p className="flex items-center justify-center h-8 px-1 mr-2 font-bold rounded-md bg-secondary">₹{coin.market_cap.toLocaleString()}</p></td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
