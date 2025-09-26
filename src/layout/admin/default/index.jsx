import { Outlet } from "react-router-dom"

function DefaultLayout() {
    return (
        <>
            <h1> DefaultLayout ne</h1>
            <Outlet />
        </>
    )
}
export default DefaultLayout