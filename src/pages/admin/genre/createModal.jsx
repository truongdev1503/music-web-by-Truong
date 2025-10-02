import { createGenre } from "../../../untils/api.admin";

const CreateModal = (props) => {
    const {setGenres} = props.modalData;
    const handelOnSubmit = (e) => {
        const infoGenre = {
            "title": e.target.title.value,
            "description": e.target.desc.value
        }
        e.preventDefault()
        const callCreateGenre = async () => {
            try {
                const data = await createGenre(infoGenre)
                setGenres(pre => [...pre,data])
                console.log("thành công")
            } catch (error) {
                console.log(error)
            }
        }
        callCreateGenre()
    }
    return (
        <>
            <form onSubmit={handelOnSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" />
                <br />
                <label htmlFor="desc">Description</label>
                <textarea name="desc" id="desc"></textarea>
                <button>Create</button>
            </form>
        </>
    )
}

export default CreateModal;