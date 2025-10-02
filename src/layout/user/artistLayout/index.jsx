import { Outlet } from "react-router-dom"
import mylogo from "../../../assets/logo.png"
import { LuAlbum } from "react-icons/lu";
import { MdLibraryMusic } from "react-icons/md";
function ArtistLayout() {
    return (
        <>
            <div className="sidebar">
                <a href="/studio" className="sidebar__logo">
                    <img src={mylogo} alt="My Image" />
                </a>
                <div className="sidebar__item">
                    <LuAlbum />
                    <span>Album</span>
                </div>
                <div className="sidebar__item">
                    <MdLibraryMusic />
                    <span>Song</span>
                </div>
            </div>
            <div className="wrap">
                <div className="wrap__header"></div>
                <div className="wrap__content"></div>
            </div>
            <Outlet />
        </>
    )
}
export default ArtistLayout