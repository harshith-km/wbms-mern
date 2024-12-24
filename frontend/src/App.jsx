import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; 

import Footer from "./components/Footer";
import Header from "./components/Header";
import Callback from "./pages/Callback";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Navbar from "./components/Navbar";
import PreviousBills from './pages/PreviousBills';
import UsageAnalytics from './pages/UsageAnalytics';
import Settings from './pages/Settings';


function App() {
  return (
    <Router> 
      <div className="body">
        <Header />
        <main>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/callback-request" element={<Callback />} />
            <Route path="/previous-bills" element={<PreviousBills />} />
            <Route path="/usage-analytics" element={<UsageAnalytics />} />
            <Route path='/settings' element={<Settings />} /> 
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;