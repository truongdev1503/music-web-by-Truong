import { Outlet } from "react-router-dom"
import mylogo from "../../../assets/logo.png"
import { LuAlbum } from "react-icons/lu";
import { MdLibraryMusic } from "react-icons/md";
import "./artistLayout.scss"

function ArtistLayout() {
    return (
        <>
            <div className="studioWrap">
                <div className="studioWrap__sidebar">
                    <a href="/studio" className="studioWrap__logo">
                        <img src={mylogo} alt="My Image" />
                    </a>
                    <div className="studioWrap__item active">
                        <LuAlbum className="icon"/>
                        <span>Album</span>
                    </div>
                    <div className="studioWrap__item">
                        <MdLibraryMusic className="icon"/>
                        <span>Song</span>
                    </div>
                </div>
                <div className="studioWrap__contain">
                    <div className="studioWrap__header">Header</div>
                    <div className="studioWrap__body">Body</div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default ArtistLayout