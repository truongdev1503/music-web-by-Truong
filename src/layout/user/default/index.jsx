import { Outlet } from "react-router-dom"
import { Link, NavLink } from "react-router";
import { ImSearch } from "react-icons/im";
import { IoHome } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { useState } from "react";
import ProfileMenu from "./profileMenu";
import "./defaultLayoutUser.scss"
import mylogo from "../../../assets/logo.png"
function DefaultLayoutUser() {
    const [isOpenProfileMenu, setOpenProfileMenu] = useState(false);
    const handleOpenProfileMenu = () => {

        setOpenProfileMenu(!isOpenProfileMenu)
    }
    return (
        <>
            <div className="defaultLayoutUserWrap">
                <div className="defaultLayoutUserWrap__sidebar">
                    <div className="defaultLayoutUserWrap__logo">
                        <Link to="/home" className="defaultLayoutUserWrap__logo">
                            <img src={mylogo} alt="logo" /></Link>
                    </div>
                    <div className="defaultLayoutUserWrap__items">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                isActive ? "childItem active" : "childItem"
                            }
                        >
                            <IoHome className="icon" />
                            <span>Home</span>
                        </NavLink>
                        <NavLink
                            to="/play-list"
                            className={({ isActive }) =>
                                isActive ? "childItem active" : "childItem"
                            }
                        >
                            <RiPlayListFill className="icon" />
                            <span>Playlist</span>
                        </NavLink>
                        <NavLink
                            to="liked-songs"
                            className={({ isActive }) =>
                                isActive ? "childItem active" : "childItem"
                            }
                        >
                            <FaHeartbeat className="icon" />
                            <span>Liked Songs</span>
                        </NavLink>
                        <NavLink
                            to="/top-hits"
                            className={({ isActive }) =>
                                isActive ? "childItem active" : "childItem"
                            }
                        >
                             <MdPlaylistAddCheckCircle className="icon" />
                            <span>Top Hits</span>
                        </NavLink>
                        
                            
                       
                           
                      
                    </div>
                </div>
                <div className="defaultLayoutUserWrap__contain">
                    <div className="defaultLayoutUserWrap__header">
                        <div className="defaultLayoutUserWrap__search">
                            <ImSearch />
                            <input type="text" placeholder=" What are you looking for? " />
                        </div>
                        <div className="avatar">
                            <button className="avatarButton" onClick={handleOpenProfileMenu} >T </button>
                            {isOpenProfileMenu && <ProfileMenu />}
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>

        </>
    )
}
export default DefaultLayoutUser
