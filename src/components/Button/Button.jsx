function Button({className, title, action, type}) {
    return (
        <button type={type} className={className} onClick={action}>{title}</button>
    )
}

export default Button