import '../styles/navbar.css'
import logo from '../assets/logo.png'

type NavbarProps = {
    setCurrentPage: (page: number) => void;
};

export default function Navbar({ setCurrentPage }: NavbarProps) {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" onClick={() => setCurrentPage(0)}  className="navbar-logo" />
            <div className="navbar-links">
                <button onClick={() => setCurrentPage(1)}>About</button>
                <button onClick={() => setCurrentPage(2)}>Compositions</button>
                <button onClick={() => setCurrentPage(3)}>Tour Dates</button>
                <button onClick={() => setCurrentPage(4)}>Merch</button>
                <button onClick={() => setCurrentPage(5)}>Booking</button>
            </div>
        </nav>
    );
}
