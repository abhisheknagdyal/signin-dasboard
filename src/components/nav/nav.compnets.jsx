

import dashboard from "./assests.main/dashboard.svg"
import transaction from "./assests.main/transaction.svg"
import schedule from "./assests.main/schedule.svg"
import user from "./assests.main/user.svg"
import setting from "./assests.main/setting.svg";

import "./nav.styles.css";


function Nav(){

    return(
        <div className="nav">
            <h1>Board.</h1>
            <div className='items'>
                <div className="nav-items">
                    <div className="nav-item">
                        <img src={dashboard} alt="" /> 
                        <p className="item-name dashboard">Dashboard</p> 
                    </div>
                    <div className="nav-item">
                        <img src={transaction} alt="" /> 
                        <p className="item-name">Transactions</p>
                    </div>
                    <div className="nav-item">
                        <img src={schedule} alt="" /> 
                        <p className="item-name">Schedules</p> 
                    </div>
                    <div className="nav-item">
                        <img src={user} alt="" /> 
                        <p className="item-name">Users</p> 
                    </div>
                    <div className="nav-item">
                        <img src={setting} alt="" /> 
                        <p className="item-name">Settings</p>
                    </div>
                    </div>
                <div className="other-items">
                <p className="other-item">Help</p>
                <p className="other-item">Contact Us</p>
            </div>
            </div>   
             
        </div>
    )
}

export default Nav;