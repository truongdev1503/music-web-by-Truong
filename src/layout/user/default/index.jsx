import { Outlet } from "react-router-dom"
import { ImSearch } from "react-icons/im";
import "./style.scss"
import { useState } from "react";
import ProfileMenu from "./profileMenu";
function DefaultLayoutUser() {
    const [isOpenProfileMenu, setOpenProfileMenu] = useState(false);
    const handleOpenProfileMenu = () => {

        setOpenProfileMenu(!isOpenProfileMenu)
    }
    return (
        <>

            <div className="wrap">
                <div className="wrap__sidebar">Sidebar</div>
                <div className="wrap__contain">
                    <div className="wrap__header">
                        <div className="wrap__search">
                            <ImSearch />
                            <input type="text" placeholder="Tìm kiếm bài hát, ca sĩ " />
                        </div>
                        <div className="avatar">
                            <button className = "avatarButton" onClick={handleOpenProfileMenu} >T </button>
                            {isOpenProfileMenu && <ProfileMenu />}
                        </div>
                    </div>
                    {/* <div className="wrap__content">Content</div> */}
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default DefaultLayoutUser
