import { Outlet } from "react-router-dom"
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
                        <a href="/home" className="defaultLayoutUserWrap__logo">
                            <img src={mylogo} alt="logo" /></a>
                    </div>
                    <div className="defaultLayoutUserWrap__items">
                        <div className="childItem">
                            <IoHome className="icon"/>
                            <span>Home</span>
                        </div>
                        <div className="childItem">
                            <RiPlayListFill className="icon" />
                            <span>Playlists</span>
                        </div>
                        <div className="childItem">
                            <FaHeartbeat className="icon" />
                            <span>Liked Songs</span>
                        </div>
                        <div className="childItem">
                            <MdPlaylistAddCheckCircle className="icon" />
                            <span>Top Hits</span>
                        </div>
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
                    <div className="defaultLayoutUserWrap__content">Content</div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default DefaultLayoutUser
