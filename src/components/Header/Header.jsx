import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/argentBankLogo.webp'
import { Link } from 'react-router-dom'
import {logout} from '../../redux/slices/auth.slice'

function Header() {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.auth)
    const { userName } = useSelector(state => state.user)

    return (
        <nav className='main-nav'>
            <Link to="/" className='main-nav-logo'><img src={logo} alt='logo ArgentBank' className='main-nav-logo-image' /></Link>
            <div className='login'>
                <div>
                    <Link to="/SignIn" className='main-nav-item'><i className="fa fa-user-circle"></i> {token ? userName : 'Sign In'} </Link>
                </div>
                <div className={token ? 'signout-visible' : 'signout-invisible'}>
                    <Link to="/" className='main-nav-item' onClick={()=>dispatch(logout())}><i className="fa fa-sign-out" ></i> Sign Out </Link>
                </div>
            </div>
        </nav >
    )
}

export default Header