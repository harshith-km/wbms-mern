import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div className="profile">
        <div className="icon_and_info">
          <div className="avatar"></div>
          <div className="name_and_email">
            <span className="user_name"><img src="./img/name.png" alt="" />John Doe</span>
            <span className="user_email"><img src="./img/mail.png" alt="" />johndoe@gmail.com</span>
          </div>
        </div>
        <span className="user_address"><img src="./img/home-address.png" alt="" />#314, Nidhi nilaya, ashok Nagara, Tumkur, 5622233</span>
      </div>
      <div className="navigation">
        <Link
          to="/"
          className={`dashboardLink ${location.pathname === "/" ? "active" : ""}`}
        >
          <img src="dashboard.png" alt="dashboard icon" />
          Dashboard
        </Link>
        <Link
          to="/previous-bills"
          className={`previousBillsLink ${location.pathname === "/previous-bills" ? "active" : ""}`}
        >
          <img src="bills.png" alt="Previous bills icon" />
          Previous Bills
        </Link>
        <Link
          to="/usage-analytics"
          className={`usageAnalyticsLink ${location.pathname === "/usage-analytics" ? "active" : ""}`}
        >
          <img src="analytics.png" alt="usage analytics icon" />
          Usage Analytics
        </Link>
        <Link to="/wallet" className={`walletLink ${location.pathname === "/wallet" ? "active" : ""}`}>
          <img src="wallet.png" alt="wallet icon" />
          Wallet
        </Link>
        <Link to="/callback-request" className={`callbackLink ${location.pathname === "/callback-request" ? "active" : ""}`}>
          <img src="callbackrequest.png" alt="support icon" />
          Call back request
        </Link>
      </div>
      <div className="setting_and_logout">
        <Link
          to="/settings"
          className={`settingsLink ${location.pathname === "/settings" ? "active" : ""}`}
        >
          <img src="settings.png" alt="settings icon" />
          Settings
        </Link>

        <Link to="/logout" className="" >
          <img src="logout.png" alt="" />
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;