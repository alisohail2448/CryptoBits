import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams();
  
  const url =
    `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="py-8 my-12 rounded-div">
      <div className="flex py-8">
        <img className="w-20 mr-8" src={coin.image?.large} alt="/" />
        <div>
          <p className="text-3xl font-bold">{coin?.name} price</p>
          <p>{coin.symbol?.toUpperCase()} / INR</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="flex justify-between">
            {coin.market_data?.current_price ? (
              <p className="text-3xl font-bold">
                ₹{coin.market_data.current_price.inr.toLocaleString()}
              </p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>₹{coin.market_data.market_cap.inr.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <div>
                <p className="text-sm text-gray-500">Volume (24h)</p>
                {coin.market_data?.market_cap ? (
                  <p>₹{coin.market_data.total_volume.inr.toLocaleString()}</p>
                ) : null}
              </div>
            </div>

          </div>
            <div className="flex justify-between py-4">
              <div>
                <p className="text-sm text-gray-500">24 High</p>
                {coin.market_data?.high_24h ? (
                  <p>₹{coin.market_data.high_24h.inr.toLocaleString()}</p>
                ) : null}
              </div>
              <div>
                <p className="text-sm text-gray-500">24 Low</p>
                {coin.market_data?.low_24h ? (
                  <p>₹{coin.market_data.low_24h.inr.toLocaleString()}</p>
                ) : null}
              </div>
            </div>
        </div>

        <div>
          <p className="text-xl font-bold">Market Stats</p>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className="text-sm text-gray-500">Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Price Change (24h)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_24h.toFixed(2)}</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (7d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (14d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_14d.toFixed(2)}</p>
              ) : null}
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <px className="text-sm text-gray-500">Price Change (30d)</px>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_30d.toFixed(2)}</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (60d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_60d.toFixed(2)}</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (1y)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}</p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-around p-8 text-accent">
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
      </div>
      <div className="py-4 rounded-card">
        <p className="text-xl font-bold">About {coin.name}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin.description ? coin.description.en : ""
            ),
          }}
        ></p>
      </div>
    </div>
  );
};

export default CoinPage;
