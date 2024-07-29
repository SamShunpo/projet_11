import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
import BankAccount from "../../components/BankAccount/BankAccount"
import { useDispatch, useSelector } from "react-redux"
import EditAccount from "../../components/EditAccount/EditAccount"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUser } from "../../redux/actions/user.actions"
import { toggleEdit } from "../../redux/slices/user.slice"

function User() {
    const { firstName, lastName, isEditing} = useSelector(state => state.user)
    const {token} = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleEditClick = () => {
        dispatch(toggleEdit())
    }

    useEffect(() => {
        if (token) {
            dispatch(getUser({
                token: token,
            }))
        } else {
            navigate("/SignIn")
        }
    },[token])


    return (
        <div className="react-div">
            <Header />
            <main className="main bg-dark">
                <div>
                    {isEditing ? (<EditAccount/>
                    ) : (
                        <div className="header">
                            <h1>Welcome back <br /> {firstName} {lastName} !</h1>
                            <Button className="edit-button" title="Edit Name" action={handleEditClick}></Button>
                        </div>
                    )}
                </div>
                <BankAccount title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
                <BankAccount title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
                <BankAccount title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
            </main>
            <Footer />
        </div>
    )
}
export default User