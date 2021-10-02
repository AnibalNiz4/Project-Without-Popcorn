import './nav.scss';
import Logo from './LogoNew.svg';
import { Route, Link } from 'wouter';
import NavResponsive from './NavResponsive';

export default function Nav() {
    
    const handleSubmit = e =>{
        e.preventDefault();
    }

    return(
        <div className='nav_Container'>
            <div className='groupNavOne'>
                <Link to='/'>
                    <div className='logo'>
                            <img src={Logo} />  
                    </div>              
                </Link>
                <ul className='first_ul'>
                    <Link to='/movies'><li>Movies</li></Link>
                    <Link to='/tv'><li>TV Shows</li></Link>
                    <li>My List</li>
                </ul>
            </div>
            <div className='groupNavTwo'>
                <form className='form_input' onSubmit={handleSubmit}>
                    <input className='input' type='text' placeholder='Search Movie or Tv Show...'/>
                </form>
                <ul className='second_ul'>
                    <Link to='/login'><li>Login</li></Link>
                    <li className='registerNav'>Register</li>
                </ul>
            </div>
            {
                <NavResponsive/>
            }
        </div>
    )
}