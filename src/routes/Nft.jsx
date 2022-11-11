import React from 'react'
import BitCoin from '../Components/BitCoin'
import NftCarousel from '../Components/NftCarousel'
import NftDetails from '../Components/NftDetails'
import NftSearch from '../Components/NftSearch'

const Nft = ({coins}) => {
  return (
    <div>
      <NftCarousel/>
      <NftSearch />
      <NftDetails/>
    </div>
  )
}

export default Nft