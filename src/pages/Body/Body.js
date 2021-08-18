import React from 'react'
import BodyBanner from '../BodyBanner/BodyBanner'
import Category from '../Category/Category'
import Sale from '../Sale/Sale'

export default function Body(props) {
    return (
        <div style={{ backgroundColor: '#f5f5f5' }}>
            <BodyBanner />
            <Sale />
            <Category />
        </div>
    )
}
