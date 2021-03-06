import React from 'react'

export default function Slider(props) {
    return (
        <div >
            <div className='container' style={{ marginTop: '144px'}}>
                <div className='row'>
                    <div className='col-8' style={{padding:'0'}} >
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{paddingRight:'5px'}}>
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={4} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./img/slider/banner1.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/slider/banner2.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/slider/banner3.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/slider/banner4.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./img/slider/banner5.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className='col-4' style={{padding:'0'}}>
                        <img src='./img/slider/banner_right1.png' style={{width:'100%'}} />
                        <img src='./img/slider/banner_right2.png' style={{width:'100%'}} />
                    </div>
                </div>
                <div className='slider_icon' style={{display:'flex', justifyContent:'space-between',marginTop:'10px'}}>
                    <div>
                        <img src='./img/icon_slider/icon1.png' width={50} />
                        <p>Y??n T??m Mua H??ng</p>
                    </div>
                    <div>
                        <img src='./img/icon_slider/icon2.png' width={50} />
                        <p>Ho??n Xu 20% - ????n T??? 0??</p>
                    </div>
                    <div>
                        <img src='./img/icon_slider/icon3.gif' width={50} />
                        <p>N???p Th???, H??a ????n & E-Voucher</p>
                    </div>
                    <div>
                        <img src='./img/icon_slider/icon4.gif' width={50} />
                        <p>Shopee S??? G?? ????y</p>
                    </div>
                    <div>
                        <img src='./img/icon_slider/icon5.png' width={50} />
                        <p>FreeShip Extra 70k M???i Ng??y</p>
                    </div>
                    <div>
                        <img src='./img/icon_slider/icon6.png' width={50} />
                        <p>H??ng Hi???u -50%</p>
                    </div>
                    <div>
                        <img src='./img/icon_slider/icon7.png' width={50} />
                        <p>H??ng Qu???c T???</p>
                    </div>
                    <div>
                        <img src='./img/icon_slider/icon8.png' width={50} />
                        <p>Shopee Premium</p>
                    </div>
                    <div>
                        <img src='./img/icon_slider/icon9.png' width={50} />
                        <p>Tech Zone - Si??u Th??? ??i???n T???</p>
                    </div>
                    <div>
                        <img src='./img/icon_slider/icon10.png' width={50} />
                        <p>G?? C??ng R??? - T??? 1k</p>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}
