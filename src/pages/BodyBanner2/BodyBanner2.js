import React from 'react'

export default function BodyBanner2(props) {
    return (
        <div className='container' style={{marginTop:'20px'}}>
            <div className='row' style={{padding:'0'}}>
                <div className='col-4' style={{padding:'0'}}>
                    <a href="#"><img src='./img/body/banner/banner01.jpg' style={{width:'100%'}} /></a>
                </div>
                <div className='col-4' style={{padding:'0'}}>
                    <a href="#"><img src='./img/body/banner/banner02.jpg' style={{width:'100%'}} /></a>
                </div>
                <div className='col-4' style={{padding:'0'}}>
                    <a href="#"><img src='./img/body/banner/banner03.jpg' style={{width:'100%'}} /></a>
                </div>
            </div>
        </div>
    )
}
