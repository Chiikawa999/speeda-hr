
import phoneImg2 from '../assets/photo/angles-right-solid2.png';
import mailImg2 from '../assets/photo/check-solid.png';

export default function Contact() {
    return (
        <main className="py-5 jp-vibrant-contact-page min-vh-100 d-flex align-items-center">
            <div className="container" style={{ maxWidth: '720px' }}>

                {/* 頁面標題 */}
                <div className="text-center mb-4">
                    <span className="badge bg-warning text-dark border border-2 border-dark px-3 py-2 rounded-pill fw-black fs-7 mb-2 shadow-sm">
                        ⚡ QUICK CONTACT
                    </span>
                    <h1 className="fw-black text-dark display-5 mb-1">聯絡我們</h1>
                    <p className="text-secondary fw-bold fs-6">
                        急件派遣 ‧ 專人對接 ‧ 價格公開透明
                    </p>
                </div>

                {/* 名片 */}
                <div className="jp-pop-card bg-white rounded-4 border border-3 border-dark p-4 p-md-5 position-relative shadow-pop">

                    {/* 頂部品牌區 */}
                    <div className="d-flex justify-content-between align-items-center pb-4 mb-4 border-bottom border-3 border-dark">
                        <div>
                            <span className="badge bg-danger text-white fw-black px-2.5 py-1 fs-7 mb-1.5 d-inline-block border border-2 border-dark" style={{ letterSpacing: '1px' }}>
                                SPEEDA HR
                            </span>
                            <h2 className="fw-black text-dark fs-2 mb-0">速必達人力派遣</h2>
                        </div>

                        <span className="badge bg-warning text-dark border border-2 border-dark px-3 py-2 rounded-pill fw-black small flex-shrink-0 shadow-sm">
                            ⚡ 機動支援
                        </span>
                    </div>

                    {/* 下半部：窗口卡片與鮮艷按鈕 */}
                    <div className="row g-4 align-items-stretch">

                        {/* 左側：專案對接窗口 */}
                        <div className="col-md-5">
                            <div className="p-4 bg-warning-subtle rounded-3 border border-2 border-dark h-100 d-flex flex-column align-items-center justify-content-center text-center">
                                <span className="d-block text-dark fw-bold small mb-1">專案調度窗口</span>
                                <h3 className="fw-black text-dark display-6 mb-2">蕭小姐</h3>
                                <span className="badge bg-white text-danger border border-2 border-danger rounded-pill px-3 py-1.5 small fw-black">
                                    親切熱心 ‧ 迅速調度
                                </span>
                            </div>
                        </div>

                        {/* 右側：鮮艷按鈕 (電話 + Email) */}
                        <div className="col-md-7">
                            <div className="d-flex flex-column gap-3">

                                {/* 1. 紅框（電話按鈕） */}
                                <a href="tel:0908365080" className="pop-contact-btn phone text-decoration-none p-3 rounded-3 border border-2 border-dark d-flex align-items-center gap-3">
                                    <div className="pop-icon-box bg-danger text-white border border-2 border-dark">
                                        {phoneImg2 ? (
                                            <img src={phoneImg2} alt="電話" className="icon-img" />
                                        ) : (
                                            <i className="bi bi-telephone-fill fs-4"></i>
                                        )}
                                    </div>
                                    <div>
                                        <span className="text-danger fw-black small d-block mb-0.5">TEL / 服務專線 (點擊撥打)</span>
                                        <strong className="text-dark fs-4 fw-black">0908-365-080</strong>
                                    </div>
                                </a>

                                {/* 2. 綠框（E-Mail 按鈕） */}
                                <a href="mailto:opps524@gmail.com" className="pop-contact-btn mail text-decoration-none p-3 rounded-3 border border-2 border-dark d-flex align-items-center gap-3">
                                    <div className="pop-icon-box bg-success text-white border border-2 border-dark">
                                        {mailImg2 ? (
                                            <img src={mailImg2} alt="Email" className="icon-img" />
                                        ) : (
                                            <i className="bi bi-envelope-paper-heart-fill fs-4"></i>
                                        )}
                                    </div>
                                    <div>
                                        <span className="text-success fw-black small d-block mb-0.5">E-MAIL / 電子郵件</span>
                                        <strong className="text-dark fs-6 text-break fw-black">opps524@gmail.com</strong>
                                    </div>
                                </a>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </main>
    );
}