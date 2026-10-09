
import boxesImg from '../assets/photo/g0.jpg';

import phoneIcon from '../assets/photo/phone-volume-solid.png';

import mailIcon from '../assets/photo/emqil.png';

export default function Services() {
    const serviceCategories = [
        {
            num: '01',
            categoryName: '營造工程與專業技術',
            categoryEn: 'CONSTRUCTION & TECHNICAL',
            items: [
                { title: '油漆師傅', desc: '室內外油漆、牆面批土塗裝與補漆維護。', tags: ['1人 (8H)', '專業技術'] },
                { title: '水電師傅', desc: '室內裝修水電配管、燈具開關安裝與線路檢修。', tags: ['1人 (8H)', '限裝修工程'] },
                { title: '泥作師傅', desc: '磚牆砌造、牆面打底打磨、粉刷抹壁與修補。', tags: ['1人 (8H)', '資深工匠'] },
                { title: '室內裝修打石', desc: '牆面地面拆除打石、磚牆剔除，含專業作業機具。', tags: ['1人 (8H)', '含專業機具'] }, { title: '拆除工', desc: '室內裝修拆除、廢棄物搬運與現場清運整理。', tags: ['1人 (8H)', '經驗老道'] },
            ]
        },
        {
            num: '02',
            categoryName: '搬運物流與體力支援',
            categoryEn: 'LOGISTICS & HANDLING',
            items: [
                { title: '臨時司機搬運工', desc: '貨物載運、搬運支援與機動派遣，具備搬運經驗。', tags: ['1人 (8H)', '限定 3.5 噸（含）以下車輛'] },
                { title: '進料工', desc: '建材物料進場搬運、搬重物支援，體力充沛配合度高。', tags: ['1人 (8H)', '可支援泥作專業小工'] },
                { title: '專業搬運工', desc: '家具搬遷、廠房設備搬運、展場撤場物料重物搬移。', tags: ['1人 (8H)', '高配合度'] }
            ]
        },
        {
            num: '03',
            categoryName: '環境清潔與綠美化',
            categoryEn: 'CLEANING & LANDSCAPING',
            items: [
                { title: '粗工 ‧ 臨時工 ‧ 清潔工', desc: '工地雜務整理、建案交屋前清潔、現場廢棄物清理與一般臨時支援。', tags: ['1人 (8H)', '機動調度'] },
                { title: '專業割草師傅', desc: '庭院雜草清除、綠地花草修剪、園藝維護，含專業割草機具。', tags: ['1人 (8H)', '含割草機具'] },
                { title: '洗碗清潔工', desc: '餐飲駐點、大樓餐廚清潔、大型活動後餐具洗碗整理。', tags: ['1人 (8H)', '細心勤勞'] }
            ]
        },
        {
            num: '04',
            categoryName: '活動地推與機動特勤',
            categoryEn: 'MARKETING & SPECIAL TASK',
            items: [
                { title: '定點派發 DM ‧ 舉牌', desc: '建案宣傳、店家開幕派報發傳單、路口引導看板舉牌與地推宣傳。', tags: ['1人 (8H)', '精神飽滿'] },
                { title: '代排隊機動工', desc: '熱門商品排隊、活動特賣代排、機動現場佔位與臨時任務交辦。', tags: ['專人調度', '歡迎電洽諮詢'] }, { title: '作業員', desc: '工廠流水線包裝、產品加工組裝、物料分類與急單趕工支援。', tags: ['1人 (8H)', '細心高配合度'] },
            ]
        }
    ];

    return (
        <main className="jp-list-services-page py-5">
            <div className="container py-md-3">

                {/* 1. 頂部 Hero Banner */}
                <div className="jp-hero-section position-relative overflow-hidden bg-white rounded-4 p-4 p-md-5 border shadow-sm mb-5">
                    <div
                        className="hero-bg-img"
                        style={{ backgroundImage: `url(${boxesImg})` }}
                    ></div>
                    <div className="hero-bg-overlay"></div>

                    <div className="row position-relative z-1 align-items-center">
                        <div className="col-lg-8 col-xl-7">
                            <span className="jp-badge mb-2">SERVICE MENU</span>
                            <h1 className="fw-bold text-dark display-5 mb-3">全方位派遣服務項目</h1>
                            <p className="text-secondary fs-5 lh-lg mb-4">
                                速必達嚴選經驗老道師傅與年輕勤勞團隊，提供營造、搬運、清潔及地推等多元人力支援，隨時為您精準對接！
                            </p>
                            <div className="d-flex flex-wrap gap-2">
                                <span className="jp-tag-pill"><i className="bi bi-shield-check text-danger me-1"></i> 經驗老道嚴選</span>
                                <span className="jp-tag-pill"><i className="bi bi-shield-check text-danger me-1"></i> 價格公道</span>
                                <span className="jp-tag-pill"><i className="bi bi-shield-check text-danger me-1"></i> 機動派工</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. 條列式服務清單 */}
                <div className="services-list-wrapper mb-5">
                    {serviceCategories.map((group, gIdx) => (
                        <div key={gIdx} className="category-section mb-5">

                            <div className="category-header d-flex align-items-center gap-3 pb-3 mb-2 border-bottom border-2 border-dark">
                                <span className="category-num fs-4 fw-bold text-danger">{group.num}</span>
                                <div>
                                    <h2 className="fs-3 fw-bold text-dark mb-0">{group.categoryName}</h2>
                                    <small className="text-muted tracking-wider fw-semibold">{group.categoryEn}</small>
                                </div>
                            </div>

                            <div className="list-group list-group-flush border-bottom">
                                {group.items.map((item, iIdx) => (
                                    <div key={iIdx} className="service-row-item d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-2 border-bottom">
                                        <div className="item-main-info me-md-4">
                                            <div className="d-flex align-items-center gap-2 mb-1">
                                                <i className="bi bi-chevron-right text-danger small"></i>
                                                <h3 className="fs-5 fw-bold text-dark mb-0">{item.title}</h3>
                                            </div>
                                            <p className="text-secondary small mb-0 ps-3 ms-1">{item.desc}</p>
                                        </div>

                                        <div className="item-tags-info d-flex flex-wrap align-items-center gap-2 flex-shrink-0 ms-md-auto ps-3 ps-md-0">
                                            {item.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="jp-list-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>


                <div className="jp-contact-card bg-white rounded-4 p-4 p-md-5 border shadow-sm">
                    <div className="row align-items-center g-4">

                        {/* 左側標題文案（黑字高對比） */}
                        <div className="col-lg-5">
                            <span className="contact-badge mb-2">NEED STAFFING?</span>
                            <h2 className="contact-title display-6 fw-bold mb-3">立即預約派工</h2>
                            <p className="contact-desc fs-6 lh-base mb-0">
                                告知我們您的人力需求與時間，速必達竭心盡力為您挑選最適合的專業團隊！
                            </p>
                        </div>

                        {/* 右側三大聯絡按鈕 */}
                        <div className="col-lg-7">
                            <div className="d-flex flex-column gap-3">

                                {/* 電話 */}
                                <a href="tel:0908365080" className="contact-item-link">
                                    <div className="icon-box phone-icon-bg">

                                        {<img src={phoneIcon} alt="電話" />}
                                        <i className="bi bi-telephone-fill fs-5"></i>
                                    </div>
                                    <div>
                                        <span className="contact-label">服務專線（蕭小姐）</span>
                                        <strong className="contact-value">0908-365-080</strong>
                                    </div>
                                </a>



                                {/* E-Mail */}
                                <a href="mailto:opps524@gmail.com" className="contact-item-link">
                                    <div className="icon-box mail-icon-bg">
                                        {<img src={mailIcon} alt="Email" />}
                                        <i className="bi bi-envelope-fill fs-5"></i>
                                    </div>
                                    <div>
                                        <span className="contact-label">電子郵件 E-Mail</span>
                                        <strong className="contact-value">opps524@gmail.com</strong>
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