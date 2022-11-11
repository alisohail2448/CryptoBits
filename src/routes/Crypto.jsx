import React from 'react'
import BitCoin from '../Components/BitCoin'
import Carousel from '../Components/Carousel'
import CoinSearch from '../Components/CoinSearch'
import Trending from '../Components/Trending'

const Crypto = ({coins}) => {
  return (
    <div>
      <Carousel/>
      <CoinSearch coins={coins}/>
      <Trending />
      <BitCoin/>
    </div>
  )
}

export default Crypto