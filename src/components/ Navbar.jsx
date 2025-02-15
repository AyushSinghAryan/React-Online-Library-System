import { Link } from "react-router-dom";

function NavBar() {
    // using Link from react-router-dom help in replacing component it will not refresh the whole page like anchor tag
    return (
        <>
            <nav className="navbar sticky top-0 bg-white shadow-md flex items-center justify-between px-6 md:px-8 py-2 z-50">
                <h1 className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active font-bold text-xl md:text-2xl">
                    <Link to="/">bookStore</Link>
                </h1>
                <div className="nav font-semibold text-base md:text-lg">
                    <ul className="flex items-center space-x-4 md:space-x-6">
                        <li className="p-2 md:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="p-2 md:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                            <Link to="/browseBooks">Browse Books</Link>
                        </li>
                        <li className="p-2 md:p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
                            <Link to="/addBooks">Add Book</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
