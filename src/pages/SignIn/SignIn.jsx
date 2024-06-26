import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { Link } from 'react-router-dom'

function SignIn() {
    return (
            <div className="react-div">
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label for="username">Username</label><input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label for="password">Password</label><input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" /><label for="remember-me"
                            >Remember me</label>
                        </div>
                        <Link to="/User" className="sign-in-button">Sign In</Link>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default SignIn