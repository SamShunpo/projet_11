import Button from "../Button/Button";

function BankAccount({title, amount, description}) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 class="account-title">{title}</h3>
                <p class="account-amount">{amount}</p>
                <p class="account-amount-description">{description}</p>
            </div>
            <Button classname="transaction-button" title="View transactions"/>
        </section>
    )
}

export default BankAccount