const Navbar = () => {
    return (
        <div className="navbar d-flex justify-content-center">
            <div className="nav__container d-flex align-items-center justify-content-between">
                <span className="logo">zendbooking</span>
                <div className="nav__items">
                    <button className="nav__button">Register</button>
                    <button className="nav__button">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;