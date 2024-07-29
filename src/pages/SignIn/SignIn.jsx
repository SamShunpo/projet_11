import { useDispatch, useSelector } from "react-redux"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { loginAction } from "../../redux/actions/auth.actions"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function SignIn() {
    const { errorMessage, loading, token } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        dispatch(loginAction({
            email: formData.get("username"),
            password: formData.get("password"),
        }));

    }

    useEffect(() => {
        if (token) {
            navigate("/User")
        }
    }, [token])


    return (
        <div className="react-div">
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={submit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                            >Remember me</label>
                        </div>
                        <button type="submit" className="sign-in-button">Sign In</button>
                    </form>
                    <p>{errorMessage}</p>
                    {
                        loading && <p>Loading ...</p>
                    }
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default SignIn