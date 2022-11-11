import React from 'react'
import nft1 from '../images/nft3.png'

const BitCoin = () => {
  return (
    <div className='p-8 mt-8 mb-24 rounded-card text-primary'>
        <div className='flex justify-center'>
            <div className="px-8 w-[200%]">
                <h2 className='text-2xl font-bold text-center'>Digital Currency</h2>
                <br />
                <p className='text-lg text-justify'> Cryptocurrencies are digital tokens. They are a type of digital currency that allows people to make payments directly to each other through an online system. Cryptocurrencies have no legislated or intrinsic value; they are simply worth what people are willing to pay for them in the market. This is in contrast to national currencies, which get part of their value from being legislated as legal tender. There are a number of cryptocurrencies – the most well-known of these are Bitcoin and Ether.
                <br />
                <br />

Activity in cryptocurrency markets has increased significantly. The fascination with these currencies appears to have been more speculative (buying cryptocurrencies to make a profit) than related to their use as a new and unique system for making payments. Related to this, there has also been a high degree of volatility in the prices of many cryptocurrencies. For example, the price of Bitcoin increased from about US$30,000 in mid 2021 to almost US$70,000 toward the end of 2021 before falling to around US$35,000 in early 2022. . </p>
            </div>
            <div className='flex items-center justify-center'>
                <img src={nft1} width={1500} alt="" />
            </div>
        </div>
    </div>
  )
}

export default BitCoin