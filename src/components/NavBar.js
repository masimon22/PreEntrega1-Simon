import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <h1 className='logo'>Attrezzo</h1>
            <ul className='links'>
                <li><a href='#'>Velas</a></li>
                <li><a href='#'>Ceramica</a></li>
                <li><a href='#'>Deco</a></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;