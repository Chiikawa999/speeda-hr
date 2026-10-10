
import checkIcon from '../assets/photo/check-solid.png';
import circleDownIcon from '../assets/photo/circle-down-solid.png';
import aboutPhoto1 from '../assets/photo/josue-michel.jpg';

export default function About() {
    // 配合機構與對象
    const partners = [
        '民家 / 社區大樓', '各大賣場 / 百貨', '飯店 / 醫院',
        '電視台 / 捷運公司', '政府公家機關', '建設公司 / 營造',
        '工廠趕工', '工程行 / 公司'
    ];

    // 專營項目摘要
    const serviceHighlights = [
        '臨時工', '清潔工', '水塔清洗', '搬運工', '臨時 QC 品檢員',
        'Sorting 重工人員', '活動人員', '理貨員', '百貨裝(卸)櫃',
        '包裝員', '作業員', '臨時QC品檢員', '技師助手'
    ];

    // 品質把關機制資料
    const screeningSteps = [
        { num: '01', title: '經驗資格審查', desc: '優先選用多年經驗老道之技術人員。' },
        { num: '02', title: '職業道德與態度', desc: '勤勞且配合度高，嚴格規範到工時間與態度。' },
        { num: '03', title: '安全與現場意識', desc: '注重安全規範，配合各建案與廠房的要求。' },
        { num: '04', title: '機動靈活調度', desc: '若人員不合現場需求，速必達可提供其他人員，配合現場支援。' }
    ];

    // 服務流程資料
    const processSteps = [
        { step: 'STEP 1', title: '需求諮詢', desc: '確認工種、人數、地點與執行項目' },
        { step: 'STEP 2', title: '快速配對', desc: '配對合適的派工人員' },
        { step: 'STEP 3', title: '報價確認', desc: '諮詢報價，價格公道不亂加價' },
        { step: 'STEP 4', title: '準時派工', desc: '團隊按時前往現場，機動支援' },
        { step: 'STEP 5', title: '品質回饋', desc: '追蹤現場人員狀況，建立長期穩定合作' }
    ];

    return (
        <main className="jp-about-page py-5">
            <div className="container py-md-3">

                {/*  Header */}
                <div className="text-center mb-5">
                    <span className="jp-badge mb-2">ABOUT SPEEDA HR</span>
                    <h1 className="jp-title fw-bold text-dark display-5">關於我們</h1>
                    <p className="jp-subtitle text-muted fs-5 mt-2 max-w-700 mx-auto">
                        以專業快速的效率，成為企業與人才最安心的後盾。
                    </p>
                </div>

                {/*  雙欄區塊 */}
                <div className="jp-hero-card bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-5">
                    <div className="row align-items-center g-4 g-lg-5">

                        {/* 左側：疊加照片框 */}
                        <div className="col-lg-5">
                            <div className="jp-photo-stack position-relative">
                                {/* 主照片 */}
                                <div className="main-photo-frame shadow-sm rounded-4 overflow-hidden">
                                    <img
                                        src={aboutPhoto1}
                                        alt="速必達團隊派遣現場"
                                        className="img-fluid w-100 object-fit-cover"
                                        style={{ minHeight: '300px', maxHeight: '560px' }}
                                    />
                                </div>
                                {/* 副圖 */}
                                <div className="sub-photo-badge rounded-3 p-3 bg-white shadow border d-none d-sm-flex align-items-center gap-2">
                                    <div className="badge-icon-circle">
                                        <i className="bi bi-patch-check-fill text-danger fs-5"></i>
                                    </div>
                                    <div>
                                        <strong className="d-block text-dark fs-6 lh-1">100% 專業派遣</strong>
                                        <small className="text-muted fs-7">經驗老道 ‧ 絕不亂加價</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 右側：文案內文 */}
                        <div className="col-lg-7">
                            <span className="jp-pill-tag mb-3">落實專業派遣 ‧ 全年無休</span>
                            <h2 className="fs-3 fw-bold text-dark mb-3">
                                招募優質人才，快速紓緩企業人力缺口
                            </h2>
                            <p className="text-secondary lh-lg mb-4">
                                員工幾乎都是從事相關行業多年，經驗老道，且年輕專業勤勞配合度高。我們堅持「不派濫竽充數的員工」，落實專業派遣，服務多元，全年無休，使命必達。更秉持價格公道、絕不亂加價。（各行業人力派遣、各種工程承包）專業人力派遣、臨時工調度。
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                                <span className="jp-feature-chip"><i className="bi bi-check2-circle me-1 text-danger"></i> 多年老道經驗</span>
                                <span className="jp-feature-chip"><i className="bi bi-check2-circle me-1 text-danger"></i> 勤勞高配合度</span>
                                <span className="jp-feature-chip"><i className="bi bi-check2-circle me-1 text-danger"></i> 長短期皆可配合</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 3. 三大經營承諾 */}
                <div className="row g-4 mb-5">
                    <div className="col-12 col-md-4">
                        <div className="jp-promise-card p-4 rounded-4 bg-white border h-100 shadow-sm text-center">
                            <div className="promise-icon mx-auto mb-3">
                                <img src={checkIcon} alt="勾勾" className="promise-icon-img" />
                            </div>
                            <h3 className="fs-5 fw-bold text-dark mb-2">嚴選優質素質</h3>
                            <p className="text-muted small mb-0 lh-base">
                                成員皆通過前置篩選，勤勞且應對有禮，現場人員高配合度。
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="jp-promise-card p-4 rounded-4 bg-white border h-100 shadow-sm text-center">
                            <div className="promise-icon mx-auto mb-3">
                                <img src={checkIcon} alt="勾勾" className="promise-icon-img" />
                            </div>
                            <h3 className="fs-5 fw-bold text-dark mb-2">價格公道</h3>
                            <p className="text-muted small mb-0 lh-base">
                                收費完全公開透明，事先確認工作細項，不隨意追加費用。
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="jp-promise-card p-4 rounded-4 bg-white border h-100 shadow-sm text-center">
                            <div className="promise-icon mx-auto mb-3">
                                <img src={checkIcon} alt="勾勾" className="promise-icon-img" />
                            </div>
                            <h3 className="fs-5 fw-bold text-dark mb-2">全年無休使命必達</h3>
                            <p className="text-muted small mb-0 lh-base">
                                有效對接調度，無論是長短期工程或緊急人力缺口，隨時補齊人手。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 配合機構與專營項目 */}
                <div className="row g-4 mb-5">
                    {/* 左卡：配合對象 */}
                    <div className="col-lg-6">
                        <div className="bg-white rounded-4 p-4 p-md-5 h-100 shadow-sm border">
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <div className="jp-icon-box d-flex align-items-center justify-content-center">
                                    <img src={circleDownIcon} alt="圖示" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                </div>
                                <h3 className="fs-4 fw-bold text-dark mb-0">配合機構與對象</h3>
                            </div>
                            <p className="text-secondary lh-lg mb-4">
                                本公司跟民家、社區大樓、各大賣場、百貨公司、飯店、醫院、電視台、捷運公司、公家機關及工程公司都有配合過。可配合項目例如：建設公司、營造廠商、工廠出貨趕工、工程行、個人及公司行號。可長、短期配合北部粗工。
                            </p>
                            <div className="row g-2">
                                {partners.map((item, idx) => (
                                    <div key={idx} className="col-6">
                                        <div className="partner-chip p-2 rounded-2 border bg-light small text-dark fw-medium">
                                            ✓ {item}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 右卡：專營項目摘要 */}
                    <div className="col-lg-6">
                        <div className="bg-white rounded-4 p-4 p-md-5 h-100 shadow-sm border d-flex flex-column justify-content-between">
                            <div>
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="jp-icon-box accent d-flex align-items-center justify-content-center">
                                        <img src={circleDownIcon} alt="圖示" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                    </div>
                                    <h3 className="fs-4 fw-bold text-dark mb-0">「速必達」專營範疇</h3>
                                </div>
                                <p className="text-secondary lh-lg mb-4">
                                    提供多元派遣服務，包含清潔、搬運、作業員、理貨員、組裝員、包裝員、臨時 QC 品檢員、Sorting 重工人員、百貨進撤櫃人員、展場進撤場、活動人員、各行各業助手等，隨時滿足個人或公司行號所需。德佳竭心盡力幫您做挑選，歡迎吩咐、指導！
                                </p>
                                <div className="d-flex flex-wrap gap-2 mb-4">
                                    {serviceHighlights.map((tag, idx) => (
                                        <span key={idx} className="jp-service-chip">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-muted small mb-0 border-top pt-3">
                                註：想查看完整派工清單，歡迎至「服務項目」頁面了解。
                            </p>
                        </div>
                    </div>
                </div>

                {/* 嚴選人才 ‧ 四大品質把關 */}
                <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-5">
                    <div className="text-center mb-4">
                        <span className="jp-pill-tag mb-2">QUALITY GUARANTEE</span>
                        <h2 className="fs-3 fw-bold text-dark">嚴選人才 ‧ 四大品質把關</h2>
                        <p className="text-muted small">堅守高標準篩選機制，確保現場人員品質與高配合度。</p>
                    </div>

                    <div className="row g-4">
                        {screeningSteps.map((item, idx) => (
                            <div key={idx} className="col-12 col-sm-6 col-lg-3">
                                <div className="p-3.5 rounded-3 bg-light h-100 border-start border-3 border-danger p-3">
                                    <span className="fw-bold text-danger fs-5 d-block mb-1">{item.num}</span>
                                    <h3 className="fs-6 fw-bold text-dark mb-2">{item.title}</h3>
                                    <p className="text-secondary small mb-0 lh-base">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 專業派工 ‧ 五大標準流程 */}
                <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm border mb-5">
                    <div className="text-center mb-4">
                        <span className="jp-pill-tag mb-2">SERVICE FLOW</span>
                        <h2 className="fs-3 fw-bold text-dark">專業派工 ‧ 服務流程</h2>
                        <p className="text-muted small">簡化繁瑣流程，提供最快速、可靠的人力對接支援。</p>
                    </div>

                    <div className="row g-3 text-center">
                        {processSteps.map((p, idx) => (
                            <div key={idx} className="col-12 col-md">
                                <div className="p-3 rounded-3 bg-light h-100 d-flex flex-column justify-content-center border">
                                    <span className="badge bg-danger-subtle text-danger align-self-center px-2.5 py-1 rounded-pill small mb-2 fw-semibold">
                                        {p.step}
                                    </span>
                                    <h3 className="fs-6 fw-bold text-dark mb-1">{p.title}</h3>
                                    <p className="text-muted small mb-0 lh-sm">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}