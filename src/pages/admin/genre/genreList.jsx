import { useEffect, useState } from "react"
import CreateModal from "./createModal"
import { callGenre } from "../../../untils/api.admin"
import "./genre.scss"
function Genres() {
    let [genres, setGenres] = useState([])
    const [isCreateModal, setCreateModal] = useState(false);
    const handleClickCreate = () => {
        setCreateModal(!isCreateModal);
    }
    useEffect(() => {
        const getGenres = async () => {
            try {
                const data = await callGenre()
                setGenres(data)            
            } catch (error) {
                alert(error)
            }
        }
        getGenres()
    }, [])
    return (
        <>
            <div className="wrap">
                <table >
                    <thead>
                        <tr className="headerTable">
                            <th>Title</th>
                            <th>Status</th>
                            <th>CreatedAt</th>
                            <th>UpdatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            genres.map(genre => (
                                <tr key={genre["_id"]}>
                                    <td>{genre.title}</td>
                                    <td>{genre.status}</td>
                                    <td>{genre.createdAt}</td>
                                    <td>{genre.updatedAt}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <button onClick={handleClickCreate}  >Create</button>
            {isCreateModal && <CreateModal modalData={{ genres, setGenres }} />}
        </>
    )
}
export default Genres