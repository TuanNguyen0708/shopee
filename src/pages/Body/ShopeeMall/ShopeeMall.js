import React from 'react'

export default function ShopeeMall(props) {
    return (
        <div className='container' style={{ padding: '0', marginTop: '20px', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f5f5f5' }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0', padding: '20px 0' }}>
                    <p style={{ color: 'rgb(238, 77, 46)', fontWeight: '600', padding: '0 20px', borderRight: '1px solid red' }}>SHOPEE MALL</p>
                    <p style={{ fontWeight: '600', padding: '0 20px' }}>7 Ngày Miễn Phí Trả Hàng</p>
                    <p style={{ fontWeight: '600', padding: '0 20px' }}>Hàng Chính Hãng 100%</p>
                    <p style={{ fontWeight: '600', padding: '0 20px' }}>Miễn Phí Vận Chuyển</p>
                </div>
                <div style={{ padding: '20px' }}>
                    <a href="#" style={{ color: 'rgb(238, 77, 46)', textDecoration: 'none' }}>Xem Tất Cả <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ padding: '10px 10px' }}>
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./img/body/shopeemall/shopeemall1.png" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="./img/body/shopeemall/shopeemall2.png" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="./img/body/shopeemall/shopeemall3.png" className="d-block w-100" />
                            </div>
                            <div className="carousel-item">
                                <img src="./img/body/shopeemall/shopeemall4.png" className="d-block w-100" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div style={{position:'relative'}}>
                        <div style={{ backgroundImage: "url('./img/body/shopeemall/mall5.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', width: '100%', height: '216px' }}>
                            <p style={{position:'absolute',textAlign:'center', width:'100%', bottom:'10px', color:'red'}}>Ưu Đãi Ngập Tràn</p>
                        </div>
                    </div>
                    <div style={{position:'relative'}}>
                        <div style={{ backgroundImage: "url('./img/body/shopeemall/mall6.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', width: '100%', height: '216px' }}>
                            <p style={{position:'absolute',textAlign:'center', width:'100%', bottom:'10px', color:'red'}}>Thay Lời Yêu Thương</p>
                        </div>
                    </div>
                </div>

                <div className='col-2'>
                    <div style={{position:'relative'}}>
                        <div style={{ backgroundImage: "url('./img/body/shopeemall/mall7.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', width: '100%', height: '216px' }}>
                            <p style={{position:'absolute',textAlign:'center', width:'100%', bottom:'10px', color:'red'}}>Mua Là Có Quà</p>
                        </div>
                    </div>
                    <div style={{position:'relative'}}>
                        <div style={{ backgroundImage: "url('./img/body/shopeemall/mall8.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', width: '100%', height: '216px' }}>
                            <p style={{position:'absolute',textAlign:'center', width:'100%', bottom:'10px', color:'red'}}>Săn Sale Cuồng Nhiệu</p>
                        </div>
                    </div>
                </div>

                <div className='col-2'>
                    <div style={{position:'relative'}}>
                        <div style={{ backgroundImage: "url('./img/body/shopeemall/mall9.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', width: '100%', height: '216px' }}>
                            <p style={{position:'absolute',textAlign:'center', width:'100%', bottom:'10px', color:'red'}}>Giảm Đến 50%</p>
                        </div>
                    </div>
                    <div style={{position:'relative'}}>
                        <div style={{ backgroundImage: "url('./img/body/shopeemall/mall10.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', width: '100%', height: '216px' }}>
                            <p style={{position:'absolute',textAlign:'center', width:'100%', bottom:'10px', color:'red'}}>Deal Hot Giá Hời</p>
                        </div>
                    </div>
                </div>

                <div className='col-2'>
                    <div style={{position:'relative'}}>
                        <div style={{ backgroundImage: "url('./img/body/shopeemall/mall11.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', width: '100%', height: '216px' }}>
                            <p style={{position:'absolute',textAlign:'center', width:'100%', bottom:'10px', color:'red'}}>Gia Dụng Thông Minh</p>
                        </div>
                    </div>
                    <div style={{position:'relative'}}>
                        <div style={{ backgroundImage: "url('./img/body/shopeemall/mall12.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', width: '100%', height: '216px' }}>
                            <p style={{position:'absolute',textAlign:'center', width:'100%', bottom:'10px', color:'red'}}>Giảm Đến 50%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
