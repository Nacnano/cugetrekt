import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/MyDocuments">My Documents</Link>
                </li>
                <li>
                    <Link to="/MyInfo">My Info</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
