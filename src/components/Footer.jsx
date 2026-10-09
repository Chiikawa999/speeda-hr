import { Link } from 'react-router-dom';
import logoImg from '../assets/photo/person-running.png';
import logoImg2 from '../assets/photo/angles-right-solid2.png';
import phoneIcon from '../assets/photo/phone-volume-solid.png';
import emailIcon from '../assets/photo/emqil.png';

function Footer() {
    return (
        <footer className="footer-dark py-5 w-100">
            <div className="container">
                <div className="row align-items-center g-4">

                    {/* 左側：品牌識別 (上下疊加) */}
                    <div className="col-lg-5 text-center text-lg-start border-end-lg border-white-15 pe-lg-5">
                        <Link to="/" className="d-inline-flex flex-column align-items-center align-items-lg-start text-decoration-none text-white">
                            <span className="brand-title">速必達人力</span>
                            <span className="brand-subtitle">Speeda HR</span>
                            <div className="d-flex align-items-center mt-2">
                                <img src={logoImg} alt="跑步圖示" className="logo-icon-person" />
                                <img src={logoImg2} alt="箭頭圖示" className="logo-icon-arrow" />
                            </div>
                        </Link>
                    </div>

                    {/* 右側：聯絡資訊與按鈕化設計 */}
                    <div className="col-lg-7 ps-lg-5">
                        <div className="row g-3">
                            {/* 電話卡片 */}
                            <div className="col-sm-6">
                                <a href="tel:0908365080" className="contact-card d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none">
                                    <div className="icon-box">
                                        <img src={phoneIcon} alt="電話" className="contact-icon" />
                                    </div>
                                    <div className="min-w-0 flex-grow-1">
                                        <div className="contact-label">來電洽詢</div>
                                        <div className="contact-value">0908365080</div>
                                    </div>
                                </a>
                            </div>

                            {/* 信箱卡片 (加強響應式與自動斷行) */}
                            <div className="col-sm-6">
                                <a href="mailto:opps524@gmail.com" className="contact-card d-flex align-items-center gap-3 p-3 rounded-3 text-decoration-none">
                                    <div className="icon-box">
                                        <img src={emailIcon} alt="信箱" className="contact-icon" />
                                    </div>
                                    <div className="min-w-0 flex-grow-1">
                                        <div className="contact-label">官方信箱</div>
                                        <div className="contact-value text-break">opps524@gmail.com</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* 聯絡人與歡迎訊息 */}
                        <div className="d-flex justify-content-between align-items-center mt-4 text-white-50 fs-6 pt-3 border-top border-white-15">
                            <span>聯絡人：<strong className="text-white">蕭小姐</strong></span>
                            <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">歡迎來電洽詢</span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;