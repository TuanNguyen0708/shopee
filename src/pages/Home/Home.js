import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
export default function Home(props) {
    return (
        <div>
            <Header />
            <Slider />
            <Body />
            <Footer />
        </div>
    )
}
