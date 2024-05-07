import React, { useState } from 'react'

const CreateAuctionPage = () => {
  return (
    <div className="auctionPage">
      <div className="upperBoxes">
        <div className='leftBoxUpp'></div>
        <div className='rightBoxUpp'></div>
      </div>
      <div className="lowerBoxes">
      <div className='leftBoxDown'>
       <div className='label-left'>
        <label>
          <div className='label1-1'></div>
        </label>
        <label>
          <div className='label1-2'></div>
        </label>
        <label>
          <div className='label1-3'></div>
        </label>
        <label>
          <div className='label1-4'></div>
        </label>
       </div>
       <div className='label-right'>
       <label>
          <div className='label2-1'></div>
        </label>
        <label>
          <div className='label2-2'></div>
        </label>
        <label>
          <div className='label2-3'></div>
        </label>
        <label>
          <div className='label2-3'></div>
        </label>
       </div>
      </div>
      <div className='rightBoxDown'></div>
      </div>
      </div>
  )
}

export default CreateAuctionPage
