import React from 'react'
import nft1 from '../images/nft1.png'

const Meta = () => {
  return (
    <div className='p-8 mt-24 mb-24 rounded-card text-primary'>
        <div className='flex justify-center'>
            <div className="px-8">
                <h2 className='text-2xl font-bold text-center'>Metaverse</h2>
                <br />
                <p className='text-lg text-justify'>The metaverse is a concept of a persistent, online, 3D universe that combines multiple different virtual spaces. You can think of it as a future iteration of the internet. The metaverse will allow users to work, meet, game, and socialize together in these 3D spaces.
<br />
<br />

The metaverse isn’t fully in existence, but some platforms contain metaverse-like elements. Video games currently provide the closest metaverse experience on offer. Developers have pushed the boundaries of what a game is through hosting in-game events and creating virtual economies.</p>
            </div>
            <div>
                <img src={nft1} width={1200} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Meta