import { Link } from 'react-router-dom';
import eventImg from '../assets/photo/20411.png';
import laborImg from '../assets/photo/25520.png';
import operatorImg from '../assets/photo/26472_color.png';
import cleanerImg from '../assets/photo/23884_color.png';
import demolitionImg from '../assets/photo/3150.png';
import tempImg from '../assets/photo/3110_color.png';

// 服務卡片資料設定
const serviceList = [
    {
        id: 'event',
        title: '活動展場人員',
        description: '專業展場活動人力支援，打造完美的活動現場！',
        imgUrl: eventImg,
        link: '/services'
    },
    {
        id: 'labor',
        title: '粗工',
        description: '建築工地雜務處理、拆除後現場清理、重物/設備搬運、進撤場物料搬運、粗裝修工程輔助。',
        imgUrl: laborImg,
        link: '/services'
    },
    {
        id: 'operator',
        title: '作業員',
        description: '廠產線組裝與加工、商品包裝/貼標/分裝、倉儲理貨/檢貨/盤點、物流出貨支援。',
        imgUrl: operatorImg,
        link: '/services'
    },
    {
        id: 'cleaner',
        title: '清潔員',
        description: '大撤場大掃除、辦公大樓/廠區駐點清潔、新建案交屋前清潔。',
        imgUrl: cleanerImg,
        link: '/services'
    },
    {
        id: 'demolition',
        title: '拆除工',
        description: '牆面打石拆除、室內舊裝修拆除、廢棄物搬運清運輔助，施工經驗豐富配合度高。',
        imgUrl: demolitionImg,
        link: '/services'
    },
    {
        id: 'temp',
        title: '臨時工',
        description: '長短期機動支援、臨時人力缺口應急、各種現場臨時任務交辦，隨時高效調度。',
        imgUrl: tempImg,
        link: '/services'
    }
];

export default function SectionServices() {
    return (
        <section className="service-highlight-section py-5">
            <div className="container py-md-4">
                {/* 標題區塊 */}
                <div className="text-center mb-5">
                    <h2 className="section-title fw-bold">
                        <span className="highlight-text">
                            順應企業需求，<br className="d-sm-none" />彈性運用人力
                        </span>
                    </h2>
                    <p className="text-muted mt-3 fs-5">多元專業陣容，即時滿足您的各類人力調度</p>
                </div>

                {/* 卡片網格 */}
                <div className="row g-4 g-lg-5 pt-3">
                    {serviceList.map((item) => (
                        <div key={item.id} className="col-12 col-md-6">
                            <div className="service-card h-100 shadow-sm border-0 position-relative bg-white">

                                {/* ⭐ 公仔插畫（加上動態 ID Class 便於個別定位微調） */}
                                <div className={`character-wrapper character-${item.id}`}>
                                    <img
                                        src={item.imgUrl}
                                        alt={item.title}
                                        className="img-fluid character-img"
                                    />
                                </div>

                                {/* 內容文字 */}
                                <div className="card-content d-flex flex-column h-100">
                                    <h3 className="card-title fw-bold mb-3">{item.title}</h3>
                                    <p className="card-desc text-secondary lh-base mb-4 flex-grow-1">
                                        {item.description}
                                    </p>

                                    <div className="d-flex justify-content-end align-items-center">
                                        <Link to={item.link} className="btn-more d-flex align-items-center gap-1 text-decoration-none">
                                            <span>了解詳情</span>
                                            <i className="bi bi-arrow-right-short fs-4"></i>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}