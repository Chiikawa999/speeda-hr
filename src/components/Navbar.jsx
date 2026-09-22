import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">速必達 Speeda HR</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-navbar me-auto d-flex gap-3 list-unstyled mb-0">
                        <li><Link className="nav-link text-white" to="/">首頁</Link></li>
                        <li><Link className="nav-link text-white" to="/about">關於我們</Link></li>
                        <li><Link className="nav-link text-white" to="/services">營業項目</Link></li>
                        <li><Link className="nav-link text-white" to="/contact">聯絡我們</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;