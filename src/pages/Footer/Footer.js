import React from 'react'

export default function Footer(props) {
    return (
        <div style={{ backgroundColor: '#ece5e5' }}>
            <div className='container' style={{ paddingTop:'30px', backgroundColor: '#ece5e5' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '20%', display: 'flex', flexDirection: 'column', padding: '20px 10px' }}>
                        <p style={{ fontWeight: '600' }}>CHĂM SÓC KHÁCH HÀNG</p>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Shopee Blog</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Trung Tâm Trợ Giúp</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Shopee Mall</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Hướng Dẫn Mua Hàng</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Hướng Dẫn Bán Hàng</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Thanh Toán</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Shopee Xu</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Vận Chuyển</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Trả Hàng & Hoàn Tiền</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Chăm Sóc Khách Hàng</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Chính Sách Bảo Hành</a>
                    </div>

                    <div style={{ width: '20%', display: 'flex', flexDirection: 'column', padding: '20px 10px' }}>
                        <p style={{ fontWeight: '600' }}>VỀ SHOPEE</p>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Giới Thiệu Về Shopee Việt Nam</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Tuyển Dụng</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Điều Khoản Shopee</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Chính Sách Bảo Mật</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Chính Hãng</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Kênh Người Bán</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Flash Sales</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Chương Trình Tiếp Thị Liên Kết Shopee</a>
                        <a href="#" style={{ textDecoration: 'none', color: '#000' }}>Liên Hệ Với Truyền Thông</a>
                    </div>

                    <div style={{ width: '20%', display: 'flex', flexDirection: 'column', padding: '20px 10px' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <p style={{ fontWeight: '600' }}>VỀ SHOPEE</p>
                            <img src='./img/footer/thanhtoan.jpg' style={{ width: '100%' }} />
                        </div>
                        <div>
                            <p style={{ fontWeight: '600' }}>ĐƠN VỊ VẬN CHUYỂN</p>
                            <img src='./img/footer/GIAOHANG.jpg' style={{ width: '100%' }} />
                        </div>
                    </div>

                    <div style={{ width: '20%', display: 'flex', flexDirection: 'column', padding: '20px 10px' }}>
                        <p style={{ fontWeight: '600' }}>THEO DÕI CHÚNG TÔI TRÊN</p>
                        <a href="#" style={{ paddingBottom:'10px', color: '#000' }}><i class="fab fa-facebook"></i> FaceBook</a>
                        <a href="#" style={{ paddingBottom:'10px', color: '#000' }}><i class="fab fa-instagram-square"></i> Instagram</a>
                        <a href="#" style={{ paddingBottom:'10px', color: '#000' }}><i class="fab fa-linkedin"></i> Linkedin</a>
                    </div>

                    <div style={{ width: '20%', display: 'flex', flexDirection: 'column', padding: '20px 10px' }}>
                        <p style={{ fontWeight: '600' }}>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</p>
                        <div style={{display:'flex'}}>
                            <div style={{width:'50%'}}>
                                <img src='./img/footer/qrcode.png' style={{width:'100%'}} />
                            </div>
                            <div style={{width:'50%', paddingLeft:'10px'}}>
                                <img src='./img/footer/applestore.png' style={{width:'100%', paddingBottom:'20px'}} />
                                <img src='./img/footer/googleplay.png' style={{width:'100%', paddingBottom:'20px'}} />
                                <img src='./img/footer/appgallery.png' style={{width:'100%', paddingBottom:'20px'}} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div style={{padding:'20px 0'}}>
                    <div style={{textAlign:'center'}}>
                        <p><i class="far fa-copyright"></i> 2021 Shopee. Tất cả các quyền được bảo lưu.</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <p>Quốc gia & Khu vực: <a href="#" style={{ textDecoration: 'none', color: '#000',padding:'0 5px',borderRight:'1px solid #000' }}>Singapore</a></p>
                        <p><a href="#" style={{ textDecoration: 'none', color: '#000',padding:'0 5px',borderRight:'1px solid #000' }}>Indonesia</a></p>
                        <p><a href="#" style={{ textDecoration: 'none', color: '#000',padding:'0 5px',borderRight:'1px solid #000' }}>Đài Loan</a></p>
                        <p><a href="#" style={{ textDecoration: 'none', color: '#000',padding:'0 5px',borderRight:'1px solid #000' }}>Thái Lan</a></p>
                        <p><a href="#" style={{ textDecoration: 'none', color: '#000',padding:'0 5px',borderRight:'1px solid #000' }}>Malaysia</a></p>
                        <p><a href="#" style={{ textDecoration: 'none', color: '#000',padding:'0 5px',borderRight:'1px solid #000' }}>Việt Nam</a></p>
                        <p><a href="#" style={{ textDecoration: 'none', color: '#000',padding:'0 5px',borderRight:'1px solid #000' }}>Philippines</a></p>
                        <p><a href="#" style={{ textDecoration: 'none', color: '#000',padding:'0 5px',borderRight:'1px solid #000' }}>Brazil</a></p>
                        <p><a href="#" style={{ textDecoration: 'none', color: '#000',padding:'0 5px',borderRight:'1px solid #000' }}>México</a></p>
                        <p><a href="#" style={{ textDecoration: 'none', color: '#000',padding:'0 5px',borderRight:'1px solid #000' }}>Colombia</a></p>
                        <p><a href="#" style={{ textDecoration: 'none', color: '#000',padding:'0 5px',borderRight:'1px solid #000' }}>Chile</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
