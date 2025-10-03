import "./profileMenu.scss"
import { CgProfile } from "react-icons/cg";
import { CiMusicNote1 } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { MdNotificationsActive,MdSupportAgent  } from "react-icons/md";


function ProfileMenu() {

    const handleOpenStudio = () =>{
        window.open("/studio", "_blank") //"rel = noopener noreferrer"
    }
    return (
        <>
            <div className="profileModal">
                <div className="profileModal__header">My Account</div>
                <div className="profileModal__body">
                    <div className="profileModal__item">
                        <CgProfile className="profileModal__icon" />
                        <span>Profile</span>
                    </div>
                    <div className="profileModal__item">
                        <CiMusicNote1 className="profileModal__icon" />
                        <span onClick={handleOpenStudio}>Artist Studio</span>
                    </div>
                    <div className="profileModal__item">
                        <MdNotificationsActive className="profileModal__icon" />
                        <span>Notification</span>
                    </div>
                    <div className="profileModal__item">
                        <MdSupportAgent className="profileModal__icon" />
                        <span>Support</span>
                    </div>
                </div>
                <div className="profileModal__footer">
                    <IoIosLogOut className="profileModal__icon" />
                    <span>Log out</span>
                </div>
            </div>
        </>
    )
}
export default ProfileMenu