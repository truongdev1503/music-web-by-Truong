import { createGenre } from "../../../untils/api.admin"
import CreateModal from "./createModal"

function GenreList() {
    // const [genre]
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const callListGenre = async () => {
            const data = await getGenres()
            console.log(data)
        }
        callCreatGenre()
    }
    return (
        <>
            <CreateModal />
            <form onSubmit={handleOnSubmit}>
                <div className="wrap">
                    <div className="wrap__title">
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" />
                    </div>
                    <div className="wrap__desc">
                        <label htmlFor="desc">Description</label>
                        <textarea name="desc" id="desc" ></textarea>
                    </div>
                </div>
                <button >Create</button>
            </form>
        </>
    )
}
export default GenreList