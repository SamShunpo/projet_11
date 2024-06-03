import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Button from "../../components/Button/Button"
import BankAccount from "../../components/BankAccount/BankAccount"

function User() {
    return (
        <div className="react-div">
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back <br/> Tony Jarvis!</h1>
                    <Button classname="edit-button" title="Edit Name"/>
                </div>
                <BankAccount title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
                <BankAccount title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
                <BankAccount title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
            </main>
            <Footer />
        </div>
    )
}

export default User