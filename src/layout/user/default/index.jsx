import { Outlet } from "react-router-dom"
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import ProfileMenu from "./profileMenu";
function DefaultLayoutUser() {
    const [isOpenProfileMenu, setOpenProfileMenu] = useState(false);
    const handleOpenProfileMenu = () => {

        setOpenProfileMenu(!isOpenProfileMenu)
    }
    return (
        <>
            <div className="defaultLayoutUserWrap">
                <div className="defaultLayoutUserWrap__sidebar">Sidebar</div>
                <div className="defaultLayoutUserWrap__contain">
                    <div className="defaultLayoutUserWrap__header">
                        <div className="defaultLayoutUserWrap__search">
                            <ImSearch />
                            <input type="text" placeholder=" What are you looking for? " />
                        </div>
                        <div className="avatar">
                            <button className = "avatarButton" onClick={handleOpenProfileMenu} >T </button>
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
