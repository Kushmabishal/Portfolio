import { Outlet, Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-5">
                            <img src="my logo.png" alt="my logo" width="130px" className="img-fluid" />
                        </div>
                        <div className="col-7 d-flex align-items-center justify-content-end">
                            <ul className="nav ">
                                <li className="nav-item px-2 py-1">
                                    <Link to="/" className="text-decoration-none text-warning-emphasis">Home</Link>
                                </li>
                                <li className="nav-item px-2 py-1">
                                    <Link to="/about" className="text-decoration-none text-warning-emphasis">About</Link>
                                </li>
                                <li className="nav-item px-2 py-1">
                                    <Link to="/projects" className="text-decoration-none text-warning-emphasis">Projects</Link>
                                </li>
                                <li className="nav-item px-2 py-1">
                                    <Link to="/skills" className="text-decoration-none text-warning-emphasis">Skills</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Header;