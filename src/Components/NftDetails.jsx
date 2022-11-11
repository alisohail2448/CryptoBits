import React from 'react'
import nft1 from '../images/nft.jpg'

const NftDetails = () => {
  return (
    <div className='p-8 mt-24 mb-24 rounded-card text-primary'>
        <div className='flex justify-center'>
            <div className="px-8">
                <h2 className='text-2xl font-bold text-center'>NFT's</h2>
                <br />
                <p className='text-lg text-justify'>NFT means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies. In simple terms these cryptographic assets are based on blockchain technology. They cannot be exchanged or traded equivalently like other cryptographic assets.
<br /> <br />
Like Bitcoin or Ethereum. The term NFT clearly represents it can neither be replaced nor interchanged because it has unique properties. Physical currency and cryptocurrency are fungible, which means that they can be traded or exchanged for one another.</p>
            </div>
            <div>
                <img src={nft1} width={1200} alt="" className='rounded-md' />
            </div>
        </div>
    </div>
  )
}

export default NftDetails