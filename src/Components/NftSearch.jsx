import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinItem from "./CoinItem";
import NftItem from "./NftItem";

const NftSearch = () => {
    const [nft, setNft] = useState([])
  const [searchText, setSearchText] = useState("");

  const url = "https://api.coingecko.com/api/v3/nfts/list?per_page=10&page=10";

  useEffect(() => {
    axios
    .get(url)
    .then((response) => {
      setNft(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [url])
  

  
  return (
    <div className="my-4 rounded-div">
      <div className="flex flex-col items-center justify-between pt-4 pb-6 text-center md:flex-row md:text-right">
        <h2 className="my-2 text-xl font-bold ">Search Nft's</h2>
        <div class="flex justify-center">
          <div class="xl:w-80">
            <div class="input-group relative flex items-center w-full ">
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-secondary bg-clip-padding border border-solid border-secondary rounded transition ease-in-out m-0 focus:text-gray-500 focus:bg-secondary focus:border-white focus:outline-none"
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search a coin"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                class="btn  px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md bg-button text-btnText active:shadow-lg transition duration-150 ease-in-out flex items-center"
                type="button"
                id="button-addon2"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  class="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className="w-full text-center border-b border-collapse border-b-secondary">
        <thead className="" >
          <tr className="h-10 border-b border-b-secondary">
            <th></th>
            <th>Name</th>
            <th className="px-4">Asset Platform Id</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
        {nft
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((nft) => (
              <NftItem nft={nft} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default NftSearch;
