import React, { useState } from 'react'
import InfoLabel from '../components/InfoLabel'
import './pageCss/createAuctionPage.css'

const CreateAuctionPage = () => {
  return (
    <div className="auctionPage">
      <div className="upperBoxes">
        <div className='leftBoxUpp'></div>
        <div className='rightBoxUpp'></div>
      </div>
      <div className="lowerBoxes">
      <div className='leftBoxDown'>
       <InfoLabel />
      </div>
      <div className='rightBoxDown'></div>
      </div>
      </div>
  )
}

export default CreateAuctionPage
