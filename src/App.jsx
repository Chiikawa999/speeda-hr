import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import './App.css';
import './assets/all.scss';

// 分頁標題
const titleMap = {
  '/': '速必達人力派遣 | 首頁',
  '/about': '速必達人力派遣 | 關於我們',
  '/services': '速必達人力派遣 | 服務項目',
  '/contact': '速必達人力派遣 | 聯絡我們',
  '/privacy': '速必達人力派遣 | 隱私權政策'
};

// 監聽路由：自動更換標題 + 捲動回頁面最頂部
function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    // 1. 更新分頁標題
    document.title = titleMap[location.pathname] || '速必達人力派遣';

    // ⭐ 2. 切換頁面時自動回到最頂端
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      {/* 放入頁面控制器 (監聽路由變化：置頂與更換標題) */}
      <TitleUpdater />

      {/* 導覽列 */}
      <Navbar />

      <Routes>
        {/* Home 首頁 */}
        <Route path="/" element={<Home />} />

        {/* 其他頁面路由 */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* 防錯重定向 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* 頁尾 */}
      <Footer />
    </Router>
  );
}

export default App;