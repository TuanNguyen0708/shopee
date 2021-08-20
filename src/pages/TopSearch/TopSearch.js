import React from 'react'

export default function TopSearch(props) {
    return (
        <div className='container' style={{ marginTop: '20px', backgroundColor: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
                <p style={{ color: 'rgb(238, 77, 46)', paddingLeft: '15px' }}>TÌM KIẾM HÀNG ĐẦU</p>
                <a href="#" style={{ color: 'rgb(238, 77, 46)', textDecoration: 'none', paddingRight: '15px' }}>Xem Tất Cả <i class="fas fa-angle-right"></i></a>
            </div>
            <div className='row' style={{borderTop:'1px solid #f5f5f5'}}>
                <div className='col-2' style={{ padding: '20px 10px' }}>
                    <div style={{ position: 'relative' }}>
                        <img src='./img/body/topsearch/top1.jpg' style={{ width: '100%' }} />
                        <img src='./img/body/topsearch/logotop.png' style={{ width: '15%', position: 'absolute', top: '0', left: '0' }} />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.26)', color: '#fff', textAlign: 'center', position: 'absolute', bottom: '0', width: '100%', zIndex: '10' }}>Bán 91K+/Tháng</div>
                    </div>
                    <div style={{ paddingTop:'20px' }}>Ốp Lưng Iphone</div>
                </div>

                <div className='col-2' style={{ padding: '20px 10px' }}>
                    <div style={{ position: 'relative' }}>
                        <img src='./img/body/topsearch/top2.jpg' style={{ width: '100%' }} />
                        <img src='./img/body/topsearch/logotop.png' style={{ width: '15%', position: 'absolute', top: '0', left: '0' }} />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.26)', color: '#fff', textAlign: 'center', position: 'absolute', bottom: '0', width: '100%', zIndex: '10' }}>Bán 91K+/Tháng</div>
                    </div>
                    <div style={{ paddingTop:'20px' }}>Bông Tẩy Trang 3 Lớp Cotton Pads</div>
                </div>

                <div className='col-2' style={{ padding: '20px 10px' }}>
                    <div style={{ position: 'relative' }}>
                        <img src='./img/body/topsearch/top3.jpg' style={{ width: '100%' }} />
                        <img src='./img/body/topsearch/logotop.png' style={{ width: '15%', position: 'absolute', top: '0', left: '0' }} />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.26)', color: '#fff', textAlign: 'center', position: 'absolute', bottom: '0', width: '100%', zIndex: '10' }}>Bán 91K+/Tháng</div>
                    </div>
                    <div style={{ paddingTop:'20px' }}>Dây Sạc Iphone</div>
                </div>

                <div className='col-2' style={{ padding: '20px 10px' }}>
                    <div style={{ position: 'relative' }}>
                        <img src='./img/body/topsearch/top4.jpg' style={{ width: '100%' }} />
                        <img src='./img/body/topsearch/logotop.png' style={{ width: '15%', position: 'absolute', top: '0', left: '0' }} />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.26)', color: '#fff', textAlign: 'center', position: 'absolute', bottom: '0', width: '100%', zIndex: '10' }}>Bán 91K+/Tháng</div>
                    </div>
                    <div style={{ paddingTop:'20px' }}>Dây Nhảy Tập Thể Dục</div>
                </div>

                <div className='col-2' style={{ padding: '20px 10px' }}>
                    <div style={{ position: 'relative' }}>
                        <img src='./img/body/topsearch/top5.jpg' style={{ width: '100%' }} />
                        <img src='./img/body/topsearch/logotop.png' style={{ width: '15%', position: 'absolute', top: '0', left: '0' }} />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.26)', color: '#fff', textAlign: 'center', position: 'absolute', bottom: '0', width: '100%', zIndex: '10' }}>Bán 91K+/Tháng</div>
                    </div>
                    <div style={{ paddingTop:'20px' }}>Bút Kẻ Mắt Chống Nước</div>
                </div>

                <div className='col-2' style={{ padding: '20px 10px' }}>
                    <div style={{ position: 'relative' }}>
                        <img src='./img/body/topsearch/top6.jpg' style={{ width: '100%' }} />
                        <img src='./img/body/topsearch/logotop.png' style={{ width: '15%', position: 'absolute', top: '0', left: '0' }} />
                        <div style={{ backgroundColor: 'rgba(0,0,0,.26)', color: '#fff', textAlign: 'center', position: 'absolute', bottom: '0', width: '100%', zIndex: '10' }}>Bán 91K+/Tháng</div>
                    </div>
                    <div style={{ paddingTop:'20px' }}>Tông Đơ Cắt Tóc</div>
                </div>
            </div>
        </div>
    )
}
