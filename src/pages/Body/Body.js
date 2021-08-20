import React from 'react'
import BodyBanner from '../BodyBanner/BodyBanner'
import BodyBanner2 from '../BodyBanner2/BodyBanner2'
import Category from '../Category/Category'
import FlashSale from '../FlashSale/FlashSale'
import Sale from '../Sale/Sale'
import TopSearch from '../TopSearch/TopSearch'
import ShopeeMall from './ShopeeMall/ShopeeMall'

export default function Body(props) {
    return (
        <div style={{ backgroundColor: '#f5f5f5' }}>
            <BodyBanner />
            <Sale />
            <Category />
            <FlashSale />
            <BodyBanner2 />
            <ShopeeMall />
            <TopSearch />
            <hr style={{border:'2px solid red', marginTop:'50px', marginBottom:'0'}} />
        </div>
    )
}
