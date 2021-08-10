import React , { useRef }from "react";
import { useDetectOutsideClick } from "../services/useDetectOutsideClick";
import { ReactComponent as PROFILE_BLANK_SOLID } from "../assets/icons/profile_blank_solid.svg";
import { ReactComponent as LOGOUT } from "../assets/icons/logout.svg";
import { ReactComponent as LOGO } from "../assets/icons/logo.svg";
//import { ReactComponent as SETTING } from "../assets/icons/setting.svg";

function TEST(){
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    const handleLogOut = () => {
        localStorage.clear();
        window.open("/NotSignedIn/SignIn","_self");
    }

    const handleProfile = () => {
        window.open("/Profile","_self");
    }

    const handleHome = () => {
      window.open("/Home","_self");
    }
    return (
        <div className="bg-purple-500 flex justify-between px-2 py-2">
          <div className="">
            <button onClick={handleHome} className="">
                <LOGO/>
              </button>
          </div>
          <div className="">
            <div className="menu-container">
              <button onClick={onClick} className="menu-trigger">
                {/* <PROFILE_BLANK_SOLID/> */}
                <LOGO/>
              </button>
              <nav
                ref={dropdownRef}
                className={`menu ${isActive ? "active" : "inactive"}`}
              >
                <ul>
                  <button onClick={handleProfile} className="profile-trigger space-x-16 text-black">
                      <span className="px-2">Profile</span>
                      {/* <PROFILE_BLANK_SOLID/> */}
                      <LOGO/>
                  </button>
                  {/* <button onClick={onClick} className="button-trigger space-x-20 text-black">
                      <span>Setting</span>
                      <SETTING/>
            
                  </button> */}
                  <button onClick={handleLogOut} className="button-trigger space-x-20 text-black">
                      <span>Logout</span>
                      <LOGOUT/>
            
                  </button>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    );
    
}
export default TEST;
