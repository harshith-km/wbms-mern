// import { useState } from 'react'
// import './assets/style.css'
// import "./index.css"

// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Callback from "./pages/Callback";
// import Home from "./pages/Home";
// import Wallet from "./pages/Wallet";
// import Navbar from "./components/Navbar";


// function App(){

//   return (
//   <div className="body">
//     <Header />
//       <main>
//         <Navbar />
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />}/>
//             <Route path="/wallet" element={<Wallet />} />
//             <Route path="/callback-requests" element={<Callback />} />
//           </Routes>
//         </Router>
//       </main>
//       <Footer />
//   </div>) 
  
// }

// export default App;

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
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;