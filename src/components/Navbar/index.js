import { Link } from "react-router-dom";

const Navbar = () => {
    const style = {
        color: "inherit",
        textDecoration: "none"
    }


    return (
        <div className="navbar d-flex justify-content-center">
            <div className="nav__container d-flex align-items-center justify-content-between">
                <Link to="/" style={style}>
                    <span className="logo">zendbooking</span>
                </Link>

                <div className="nav__items">
                    <button className="nav__button">Register</button>
                    <button className="nav__button">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;