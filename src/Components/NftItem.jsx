import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const NftItem = ({ nft }) => {

  const [savedNft, setSavedNft] = useState(false)
  const {user} = UserAuth();

  const nftPath = doc(db, 'users', `${user?.email}`)
  const saveNft = async () =>{
    if(user?.email){
      setSavedNft(true)
      await updateDoc(nftPath, {
        watchList: arrayUnion({
          id: nft.id,
          name: nft.name,
        })
      })
    }
    else{
      alert("Please sign in to save a coin to your watch list")
    }
  }

  return (
    <tr className="h-[80px] border-b border-b-secondary overflow-hidden hover:bg-secondary px-10">
      <td onClick={saveNft}>
      <div className="flex justify-center">
      {savedNft ? <AiFillStar /> : <AiOutlineStar />}
      </div>
      </td>
      <td>
       <Link to={`/nft/${nft.id}`}>
       <div className="flex justify-center">
          <p className="hidden font-bold sm:table-cell">{nft.name}</p>
        </div>
       </Link>
      </td> 
      <td className=""><p className="flex items-center justify-center h-8 px-1 mr-2 font-bold rounded-md bg-secondary">{nft.asset_platform_id}</p></td>
      <td ><p className="flex items-center justify-center h-8 px-1 mr-2 font-bold rounded-md bg-secondary">{nft.symbol}</p></td>
      
    </tr>
  );
};

export default NftItem;
