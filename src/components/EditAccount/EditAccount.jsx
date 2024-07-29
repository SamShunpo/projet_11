
import { updateUser } from "../../redux/actions/user.actions"
import Button from "../Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { toggleEdit } from "../../redux/slices/user.slice"



function EditAccount() {
    const { firstName, lastName, userName } = useSelector(state => state.user)
    const { token } = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const submit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        dispatch(updateUser({
            userName: formData.get("username"),
            token
        }))

    }


    return (
        <section className="edit-bloc">
            <h1>Edit User Info</h1>
            <form onSubmit={submit} className="edit-form">
                <div>
                    <label htmlFor="username">User name:</label>
                    <input type="text" id="username" name="username" className="input-edit" defaultValue={userName} />
                </div>
                <div>
                    <label htmlFor="firstname">First name:</label>
                    <input type="text" id="firstname" name="firstname" className="input-edit" defaultValue={firstName} disabled />
                </div>
                <div>
                    <label htmlFor="lastname">Last name:</label>
                    <input type="text" id="lastname" name="lastname" className="input-edit" defaultValue={lastName} disabled />
                </div>
                <div className="edit-bloc-button">
                    <Button type="submit" className="sign-in-button" title="Save" />
                    <Button type="button" className="sign-in-button" title="Cancel" action={() => {
                        dispatch(toggleEdit())
                    }} />
                </div>

            </form>
        </section>
    )
}

export default EditAccount