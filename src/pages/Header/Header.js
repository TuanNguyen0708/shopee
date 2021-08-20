import React from 'react'

export default function Home(props) {
    return (
        <div style={{ backgroundColor: '#f7482e', width: '100%', position:'fixed',top:'0',zIndex:'20'}}>
            <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <a href="#" style={{ textDecoration: 'none', color: '#fff', paddingRight: '10px', borderRight: '1px solid #fff' }}>Kênh Người Bán</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#fff', padding: '0 10px', borderRight: '1px solid #fff' }}>Trở Thành Người Bán Shopee</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#fff', padding: '0 10px', borderRight: '1px solid #fff' }}>Tải Ứng Dụng</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#fff', padding: '0 10px', borderRight: '1px solid #fff' }}>Kết Nối</a>
                    <a href="https://www.facebook.com/ShopeeVN"><i style={{ padding: '0 10px', color: '#fff' }} class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/Shopee_VN/"><i style={{ padding: '0 10px', color: '#fff' }} class="fab fa-instagram"></i></a>
                </div>
                <div>
                    <a href="#"><i style={{ color: '#fff', paddingRight: '5px' }} class="far fa-bell"></i></a>
                    <a href="#" style={{ textDecoration: 'none', color: '#fff', paddingRight: '10px' }}>Thông Báo</a>
                    <a href="#"><i style={{ color: '#fff', paddingRight: '5px', paddingLeft: '10px' }} class="fa fa-question-circle"></i></a>
                    <a href="#" style={{ textDecoration: 'none', color: '#fff', paddingRight: '10px' }}>Hỗ Trợ</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#fff', padding: '0 10px', borderRight: '1px solid #fff' }}>Đăng Ký</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#fff', padding: '0 10px' }}>Đăng Nhập</a>
                </div>
            </div>
            <div>
                <div className='container' style={{marginTop:'20px',display:'flex'}}>
                    <div className='col-2' style={{padding:'0'}}>
                        <a href="home"><img src='./img/logo.png' width={150}/></a>
                    </div>
                    <div className='col-8' style={{backgroundColor:'#fff', padding:'0'}}>
                        <div role="search" style={{position:'relative', padding:'0'}}>
                            <input aria-label="10,000 Quà tặng" placeholder="10,000 Quà tặng" autoComplete="off" style={{width:'90%', height:'45px', border:'none', paddingLeft:'10px'}} />
                            <i style={{color:'#fff',padding:'12px 26px', margin:'4px 4px', backgroundColor:'#f7482e',position:'absolute'}} class="fas fa-search"></i>
                        </div>
                    </div>
                    <div className='col-2 text-center'>
                        <a href="#"><i style={{fontSize:'30px', margin:'8px 0',color:'#fff'}} class="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
                <div className='container' style={{display:'flex'}}>
                    <div className='col-2'></div>
                    <div className='col-8' style={{padding:'0', marginBottom:'10px', marginTop:'5px'}}>
                        <a href='#' style={{ textDecoration: 'none', color: '#fff', paddingRight: '15px'}}>Váy</a>
                        <a href='#' style={{ textDecoration: 'none', color: '#fff', paddingRight: '15px'}}>Áo Phông</a>
                        <a href='#' style={{ textDecoration: 'none', color: '#fff', paddingRight: '15px'}}>Quần</a>
                        <a href='#' style={{ textDecoration: 'none', color: '#fff', paddingRight: '15px'}}>Bông Tẩy Trang</a>
                        <a href='#' style={{ textDecoration: 'none', color: '#fff', paddingRight: '15px'}}>Balo</a>
                        <a href='#' style={{ textDecoration: 'none', color: '#fff', paddingRight: '15px'}}>Dép</a>
                        <a href='#' style={{ textDecoration: 'none', color: '#fff', paddingRight: '15px'}}>Khẩu Trang</a>
                        <a href='#' style={{ textDecoration: 'none', color: '#fff', paddingRight: '15px'}}>Bánh Tráng</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
