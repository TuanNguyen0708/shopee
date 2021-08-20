import React from 'react'

export default function FlashSale(props) {

    return (
        <div className='container' style={{ marginTop: '20px', padding: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <img src='./img/body/flashsale/flashsale.png' style={{ padding: '20px 20px' }} />
                    <div style={{ padding: '20px 0' }}>CountDown</div>
                </div>
                <div style={{ backgroundColor: '#fff' }} >
                    <a href="#" style={{ color: 'rgb(238, 77, 46)', textDecoration: 'none', paddingRight: '15px' }}>Xem Tất Cả <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
            <div className='row' style={{borderTop:'1px solid rgb(245 245 245)', margin:'0'}}>
                <div className='col-2' style={{padding:'0', backgroundColor:'#fff'}}>
                    <div className='container' style={{ backgroundImage: "url('./img/body/flashsale/img1.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '171px', padding:'0',position:'relative'}}>
                        <img src='./img/body/flashsale/background.png ' style={{width:'100%',height:'171px'}} />
                        <div style={{ backgroundColor: 'rgba(255,212,36,.9)', width: '36px', height: '32px', position: 'absolute', top: '0', right: '0', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: 'red', fontWeight: '500' }}>56%</p>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: '#fff' }}>GIẢM</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#fff' ,color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '5px', width:'100%',}}>
                        <p style={{margin:'0'}}>₫7.890.000</p>
                        <div style={{textAlign:'center', position:'relative'}}>
                            <div style={{textAlign:'center', color:'#fff',fontSize:'12px', position:'absolute', width:'100%',zIndex:'2'}}>ĐÃ BÁN 3</div>
                            <div style={{backgroundImage:"url('./img/body/flashsale/img7.png')",backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '80%', height: '16px',borderRadius:'8px', display:'inline-block' }}>
                            </div>
                            <div style={{position: 'absolute', top: '0',right:'0', width:'70%', height:'18px', backgroundColor:'#fff', opacity:'0.7'}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-2' style={{padding:'0', backgroundColor:'#fff'}}>
                    <div className='container' style={{ backgroundImage: "url('./img/body/flashsale/img2.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '171px', padding:'0',position:'relative'}}>
                        <img src='./img/body/flashsale/background.png ' style={{width:'100%',height:'171px'}} />
                        <div style={{ backgroundColor: 'rgba(255,212,36,.9)', width: '36px', height: '32px', position: 'absolute', top: '0', right: '0', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: 'red', fontWeight: '500' }}>56%</p>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: '#fff' }}>GIẢM</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#fff' ,color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '5px', width:'100%',}}>
                        <p style={{margin:'0'}}>₫6.390.000</p>
                        <div style={{textAlign:'center', position:'relative'}}>
                            <div style={{textAlign:'center', color:'#fff',fontSize:'12px', position:'absolute', width:'100%',zIndex:'2'}}>ĐÃ BÁN 3</div>
                            <div style={{backgroundImage:"url('./img/body/flashsale/img7.png')",backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '80%', height: '16px',borderRadius:'8px', display:'inline-block' }}>
                            </div>
                            <div style={{position: 'absolute', top: '0',right:'0', width:'70%', height:'18px', backgroundColor:'#fff', opacity:'0.7'}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-2' style={{padding:'0', backgroundColor:'#fff'}}>
                    <div className='container' style={{ backgroundImage: "url('./img/body/flashsale/img3.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '171px', padding:'0',position:'relative'}}>
                        <img src='./img/body/flashsale/background.png ' style={{width:'100%',height:'171px'}} />
                        <div style={{ backgroundColor: 'rgba(255,212,36,.9)', width: '36px', height: '32px', position: 'absolute', top: '0', right: '0', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: 'red', fontWeight: '500' }}>33%</p>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: '#fff' }}>GIẢM</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#fff' ,color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '5px', width:'100%',}}>
                        <p style={{margin:'0'}}>₫165.000</p>
                        <div style={{textAlign:'center', position:'relative'}}>
                            <div style={{textAlign:'center', color:'#fff',fontSize:'12px', position:'absolute', width:'100%',zIndex:'2'}}>ĐÃ BÁN 3</div>
                            <div style={{backgroundImage:"url('./img/body/flashsale/img7.png')",backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '80%', height: '16px',borderRadius:'8px', display:'inline-block' }}>
                            </div>
                            <div style={{position: 'absolute', top: '0',right:'0', width:'70%', height:'18px', backgroundColor:'#fff', opacity:'0.7'}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-2' style={{padding:'0', backgroundColor:'#fff'}}>
                    <div className='container' style={{ backgroundImage: "url('./img/body/flashsale/img4.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '171px', padding:'0',position:'relative'}}>
                        <img src='./img/body/flashsale/background.png ' style={{width:'100%',height:'171px'}} />
                        <div style={{ backgroundColor: 'rgba(255,212,36,.9)', width: '36px', height: '32px', position: 'absolute', top: '0', right: '0', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: 'red', fontWeight: '500' }}>26%</p>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: '#fff' }}>GIẢM</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#fff' ,color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '5px', width:'100%',}}>
                        <p style={{margin:'0'}}>₫95.000</p>
                        <div style={{textAlign:'center', position:'relative'}}>
                            <div style={{textAlign:'center', color:'#fff',fontSize:'12px', position:'absolute', width:'100%',zIndex:'2'}}>ĐÃ BÁN 3</div>
                            <div style={{backgroundImage:"url('./img/body/flashsale/img7.png')",backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '80%', height: '16px',borderRadius:'8px', display:'inline-block' }}>
                            </div>
                            <div style={{position: 'absolute', top: '0',right:'0', width:'70%', height:'18px', backgroundColor:'#fff', opacity:'0.7'}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-2' style={{padding:'0', backgroundColor:'#fff'}}>
                    <div className='container' style={{ backgroundImage: "url('./img/body/flashsale/img5.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '171px', padding:'0',position:'relative'}}>
                        <img src='./img/body/flashsale/background.png ' style={{width:'100%',height:'171px'}} />
                        <div style={{ backgroundColor: 'rgba(255,212,36,.9)', width: '36px', height: '32px', position: 'absolute', top: '0', right: '0', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: 'red', fontWeight: '500' }}>25%</p>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: '#fff' }}>GIẢM</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#fff' ,color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '5px', width:'100%',}}>
                        <p style={{margin:'0'}}>₫279.000</p>
                        <div style={{textAlign:'center', position:'relative'}}>
                            <div style={{textAlign:'center', color:'#fff',fontSize:'12px', position:'absolute', width:'100%',zIndex:'2'}}>ĐÃ BÁN 3</div>
                            <div style={{backgroundImage:"url('./img/body/flashsale/img7.png')",backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '80%', height: '16px',borderRadius:'8px', display:'inline-block' }}>
                            </div>
                            <div style={{position: 'absolute', top: '0',right:'0', width:'70%', height:'18px', backgroundColor:'#fff', opacity:'0.7'}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-2' style={{padding:'0', backgroundColor:'#fff'}}>
                    <div className='container' style={{ backgroundImage: "url('./img/body/flashsale/img6.png')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100%', height: '171px', padding:'0',position:'relative'}}>
                        <img src='./img/body/flashsale/background.png ' style={{width:'100%',height:'171px'}} />
                        <div style={{ backgroundColor: 'rgba(255,212,36,.9)', width: '36px', height: '32px', position: 'absolute', top: '0', right: '0', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: 'red', fontWeight: '500' }}>13%</p>
                            <p style={{ marginBottom: '0', fontSize: '11px', color: '#fff' }}>GIẢM</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#fff' ,color: 'rgb(238, 77, 46)', textAlign: 'center', paddingTop: '5px', width:'100%',}}>
                        <p style={{margin:'0'}}>₫171.000</p>
                        <div style={{textAlign:'center', position:'relative'}}>
                            <div style={{textAlign:'center', color:'#fff',fontSize:'12px', position:'absolute', width:'100%',zIndex:'2'}}>ĐÃ BÁN 3</div>
                            <div style={{backgroundImage:"url('./img/body/flashsale/img7.png')",backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '80%', height: '16px',borderRadius:'8px', display:'inline-block' }}>
                            </div>
                            <div style={{position: 'absolute', top: '0',right:'0', width:'70%', height:'18px', backgroundColor:'#fff', opacity:'0.7'}}>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
