import logo from '../../assets/argentBankLogo.webp'
import { Link } from 'react-router-dom'

function Header() {
    return(
        <nav className='main-nav'>
            <Link to="/" className='main-nav-logo'><img src={logo} alt='logo ArgentBank' className='main-nav-logo-image'/></Link>
            <div>
            <Link to="/SignIn" className='main-nav-item'><i class="fa fa-user-circle"></i> Sign In </Link>
            </div>
        </nav>
    )
}

export default Header