import icon1 from '../assets/photo/27624.png';
import icon2 from '../assets/photo/23337.png';

export default function SectionAbout() {
    return (
        <section className="about-custom-section py-5 position-relative overflow-hidden">
            {/* 裝飾用背景光暈 */}
            <div className="bg-glow-1"></div>
            <div className="bg-glow-2"></div>

            <div className="container py-md-4 position-relative z-1">

                {/* 區塊標題 */}
                <div className="text-center mb-5">
                    <span className="about-badge mb-2">ABOUT SPEEDA</span>
                    <h2 className="about-title fw-bold">公司簡介</h2>
                </div>

                {/* 1. 核心理念（品牌旗艦卡片） */}
                <div className="brand-statement-card mb-4">
                    <div className="statement-quote-mark">“</div>
                    <p className="statement-text">
                        招募優質人才，以專業、快速的效率紓緩企業人力短缺之壓力。員工幾乎都是從事相關行業多年，經驗老道，且年輕專業勤勞配合度高。不派濫芋充數的員工，落實專業派遣，服務多元，全年無休，使命必達。更秉持價格公道 ，絕不亂加價。(各行業人力派遣 各種工程承包 )專業人力派遣、臨時工調度。
                    </p>
                </div>

                {/* 2. 雙欄精緻網格 */}
                <div className="row g-4">
                    {/* 配合對象 */}
                    <div className="col-lg-6">
                        <div className="about-feature-box h-100">
                            <div className="feature-header">
                                <div className="feature-icon-circle">
                                    <img src={icon1} alt="配合機構與對象" className="feature-icon-img" />
                                </div>
                                <h3 className="feature-title">配合機構與對象</h3>
                            </div>
                            <p className="feature-body">
                                本公司跟民家、社區大樓、各大賣場、百貨公司、飯店、醫院、電視台、捷運公司、公家機關及工程公司都有配合過。可配合項目例如：建設公司、營造廠商、工廠出貨趕工、工程行、個人及公司行號。可長、短期配合北部粗工。
                            </p>
                        </div>
                    </div>

                    {/* 專營項目 */}
                    <div className="col-lg-6">
                        <div className="about-feature-box h-100">
                            <div className="feature-header">
                                <div className="feature-icon-circle">
                                    <img src={icon2} alt="專營項目" className="feature-icon-img" />
                                </div>
                                <h3 className="feature-title">「速必達人力派遣」專營</h3>
                            </div>
                            <p className="feature-body">
                                臨時工、清潔工、搬運工、重物搬運、配管拉線、百貨裝(卸)櫃、棚架搬運人力、包裝員、作業員、臨時QC品檢員、臨時代工、人力派遣，技師助手及各種臨時人力派遣，可隨時提供個人或公司行號人力所需。德佳竭心盡力幫您做挑選，歡迎吩咐，指導！
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}