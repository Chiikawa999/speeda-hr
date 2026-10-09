import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/photo/person-running.png';
import logoImg2 from '../assets/photo/angles-right-solid2.png';

function Navbar() {
    return (
        <header className="w-100">
            {/* 上方：深藍色 Logo 區塊 */}
            <div className="header-top py-3">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <Link to="/" className="d-flex align-items-center text-decoration-none text-white gap-3">
                            {/* 左側文字 */}
                            <div className="d-flex flex-column text-start">
                                <span className="logo-title">速必達人力</span>
                                <span className="logo-subtitle mt-1">Speeda HR</span>
                            </div>

                            {/* 右側圖示 */}
                            <div className="d-flex align-items-center ms-1">
                                <img src={logoImg} alt="跑步圖示" className="logo-icon-person" />
                                <img src={logoImg2} alt="箭頭圖示" className="logo-icon-arrow" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 下方：白色導覽選單 (使用 ms-auto 靠右對齊) */}
            <nav className="navbar navbar-expand navbar-custom py-2.5">
                <div className="container">
                    <ul className="navbar-nav ms-auto d-flex align-items-center gap-4 list-unstyled mb-0">
                        <li className="nav-item">
                            <NavLink className="nav-link custom-link" to="/about">
                                關於我們
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link custom-link" to="/services">
                                服務項目
                            </NavLink>
                        </li>
                        {/* 將「聯絡我們」做成主要按鈕焦點 */}
                        <li className="nav-item ms-2">
                            <NavLink className="btn btn-cta px-4 py-2" to="/contact">
                                聯絡我們
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;