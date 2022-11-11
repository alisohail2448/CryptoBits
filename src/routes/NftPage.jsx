import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";

const NftPage = () => {
  const [nft, setNft] = useState({});
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/nfts/${params.nftId}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setNft(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div className="py-8 my-12 rounded-div">
        <div className="flex py-8">
          <img className="w-40 mr-8" src={nft.image?.small} alt="/" />
          <div className=" w-[840px]">
            <p className="text-3xl font-bold text-center">{nft?.name}</p>
            <div className="flex justify-around mt-8">
              <div className="flex flex-col justify-start text-[18px]">
                <p>Asset Id : {nft.asset_platform_id?.toUpperCase()}</p>
                <p className="mt-2" > Native Currency :  {" "}
                   {nft.native_currency?.toUpperCase()} {" "}
                  ({nft.market_cap?.native_currency})
                </p>
              </div>
              <div className="flex flex-col justify-start text-[18px]" >
                <p>Total Supply - {nft.total_supply}</p>
                <p className="mt-2">
                  Floor Price 24h -{" "}
                  {nft.floor_price_in_usd_24h_percentage_change}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 rounded-card">
          <p className="text-xl font-bold">About {nft.name}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                nft.description ? nft.description : ""
              ),
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default NftPage;
