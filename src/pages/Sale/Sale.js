import React from 'react'

export default function Sale(props) {
    return (
        <div className='container' style={{ padding: '0' }}>
            <div>
                <img src='./img/body/sale_body.jpg' style={{ width: '100%', height: '100px' }} />
            </div>
            <div className='container' style={{ backgroundImage: "url('./img/body/salebackground_body.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '48%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
                        <p style={{ color: 'rgb(238, 77, 46)', paddingLeft: '15px' }}>SẢN PHẨM BÁN CHẠY</p>
                        <a href="#" style={{ color: 'rgb(238, 77, 46)', textDecoration: 'none', paddingRight: '15px' }}>Xem Thêm <i class="fas fa-angle-right"></i></a>
                    </div>
                    <div className='row'>
                        <div className='col-4' style={{ padding: '0 2px' }}>
                            <div style={{ backgroundColor: '#fff', padding: '20px 5px', position: 'relative' }}>
                                <div style={{ backgroundImage: "url('./img/body/sale/sale_product1.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '162px' }}>

                                </div>
                                <div style={{ backgroundColor: 'rgba(255,212,36,.9)', width: '36px', height: '32px', position: 'absolute', top: '0', right: '0', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                    <p style={{ marginBottom: '0', fontSize: '11px', color: 'red', fontWeight: '500' }}>27%</p>
                                    <p style={{ marginBottom: '0', fontSize: '11px', color: '#fff' }}>GIẢM</p>
                                </div>
                                <div style={{ color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '15px' }}>
                                    ₫130.000
                                </div>
                            </div>
                        </div>
                        <div className='col-4' style={{ padding: '0 2px' }}>
                            <div style={{ backgroundColor: '#fff', padding: '20px 5px', position: 'relative' }}>
                                <div style={{ backgroundImage: "url('./img/body/sale/sale_product2.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '162px' }}>
                                </div>
                                <div style={{ backgroundColor: 'rgba(255,212,36,.9)', width: '36px', height: '32px', position: 'absolute', top: '0', right: '0', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                    <p style={{ marginBottom: '0', fontSize: '11px', color: 'red', fontWeight: '500' }}>34%</p>
                                    <p style={{ marginBottom: '0', fontSize: '11px', color: '#fff' }}>GIẢM</p>
                                </div>
                                <div style={{ color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '15px' }}>
                                    ₫109.000
                                </div>
                            </div>
                        </div>
                        <div className='col-4' style={{ padding: '0 2px' }}>
                            <div style={{ backgroundColor: '#fff', padding: '20px 5px', position: 'relative' }}>
                                <div style={{ backgroundImage: "url('./img/body/sale/sale_product3.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '162px' }}>

                                </div>
                                <div style={{ backgroundColor: 'rgba(255,212,36,.9)', width: '36px', height: '32px', position: 'absolute', top: '0', right: '0', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                    <p style={{ marginBottom: '0', fontSize: '11px', color: 'red', fontWeight: '500' }}>24%</p>
                                    <p style={{ marginBottom: '0', fontSize: '11px', color: '#fff' }}>GIẢM</p>
                                </div>
                                <div style={{ color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '15px' }}>
                                    ₫120.000
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div style={{ width: '48%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
                        <p style={{ color: 'rgb(238, 77, 46)', paddingLeft: '15px' }}>THƯƠNG HIỆU NỔI BẬT</p>
                        <a href="#" style={{ color: 'rgb(238, 77, 46)', textDecoration: 'none', paddingRight: '15px' }}>Xem Thêm <i class="fas fa-angle-right"></i></a>
                    </div>
                    <div className='row'>
                        <div className='col-4' style={{ padding: '0 2px' }}>
                            <div style={{ backgroundColor: '#fff', padding: '20px 5px', textAlign: 'center' }}>
                                <div style={{ backgroundImage: "url('./img/body/sale/sale_trademark1.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '162px', position: 'relative' }}>
                                    <div style={{backgroundColor:'#fff', width: '140px', height: '56px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: '-5%', left: '50%',transform:'translate(-50%)', boxShadow:'0 0 3px rgb(0 0 0 / 14%)', borderRadius:'32px' }}>
                                        <img src='./img/body/sale/sale_trademark1_uniliver.jpg' style={{ width: '46px', height: '46px' }} />
                                    </div>
                                </div>
                                <div style={{ color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '15px' }}>
                                    ƯU ĐÃI ĐẾN 34%
                                </div>
                            </div>
                        </div>
                        <div className='col-4' style={{ padding: '0 2px' }}>
                            <div style={{ backgroundColor: '#fff', padding: '20px 5px', textAlign: 'center' }}>
                                <div style={{ backgroundImage: "url('./img/body/sale/sale_trademark2.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '162px', position: 'relative' }}>
                                    <div style={{backgroundColor:'#fff', width: '140px', height: '56px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: '-5%', left: '50%',transform:'translate(-50%)', boxShadow:'0 0 3px rgb(0 0 0 / 14%)', borderRadius:'32px' }}>
                                        <img src='./img/body/sale/sale_trademark2_larocheposay.jpg' style={{ width: '46px', height: '46px' }} />
                                    </div>
                                </div>
                                <div style={{ color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '15px' }}>
                                    ƯU ĐÃI ĐẾN 35%
                                </div>
                            </div>
                        </div>
                        <div className='col-4' style={{ padding: '0 2px' }}>
                            <div style={{ backgroundColor: '#fff', padding: '20px 5px', textAlign: 'center' }}>
                                <div style={{ backgroundImage: "url('./img/body/sale/sale_trademark3.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '162px', position: 'relative' }}>
                                    <div style={{backgroundColor:'#fff', width: '140px', height: '56px', position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: '-5%', left: '50%',transform:'translate(-50%)', boxShadow:'0 0 3px rgb(0 0 0 / 14%)', borderRadius:'32px' }}>
                                        <img src='./img/body/sale/sale_trademark3_loreal.jpg' style={{ width: '46px', height: '46px' }} />
                                    </div>
                                </div>
                                <div style={{ color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '15px' }}>
                                    ƯU ĐÃI ĐẾN 50%
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div>
                <img src='./img/body/sale_footer.jpg' style={{width:'100%', height:'50px'}} />
            </div>
        </div>
    )
}
