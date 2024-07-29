import Button from "../Button/Button";

function BankAccount({title, amount, description}) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <Button className="transaction-button" title="View transactions"/>
        </section>
    )
}

export default BankAccount