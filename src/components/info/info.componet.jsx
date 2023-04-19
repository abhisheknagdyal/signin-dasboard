import "./info.styles.css";
import bell from "./assests.info/bell.svg";
import display from "./assests.info/image1.png";
import megGlass from "./assests.info/search.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/utils";
import { useNavigate } from "react-router";

function Info(){
    const navigate = useNavigate();

    const signOutHandle=()=>[
        signOut(auth).then(()=>{
            navigate('/');
        })
    ]

    return(
        <div className="info-container">
            <div>
            <h2 className="title">Dashboard</h2>
            </div>

            <div className="info-items">
                {/* sherch bar */}
                <div className="res-search-bell">
                <div className="search info-item">
                    <input className="search-input" placeholder="Search..." type="text"/>
                    <div className="meg-container">
                        <img className="meg-glass" src={megGlass} alt=""/>
                    </div> 
                </div>
                {/* notification */}
                <div className="bell info-item">
                    <img src={bell} alt="" />
                </div>
                </div>
                {/* display image */}
                <div>
                    <img className="display-image info-item" src={display} alt="" onClick={signOutHandle}/>
                </div>
            </div> 
        </div>
    )
}

export default Info;