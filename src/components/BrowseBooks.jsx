import { Link } from "react-router-dom";
// import { books } from "../utils/mockData";
import { useState } from "react";
import { useSelector } from "react-redux";

function BrowseBooks() {
    const books = useSelector((state) => state.books);
    const [searchText, setSearchText] = useState("");
    const [allBooks] = useState(books);  //  store original book list
    const [filteredBooks, setFilteredBooks] = useState(books); //  Initial books

    //  handle search functionality
    function handleSearch() {
        let searchedBooks = allBooks.filter(book =>
            book.title.toLowerCase().includes(searchText.toLowerCase()) ||
            book.author.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredBooks(searchedBooks);
    }

    return (
        <div className="container mx-auto p-4 overflow-auto">
            <div className="flex justify-center gap-2 mb-4">
                <input
                    type="text"
                    className="border p-2 rounded w-1/2"
                    placeholder="Search by title or author..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={handleSearch} className="bg-green-500 text-white px-4 py-2 rounded">Search</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book, index) => (
                        <div key={index} className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg p-4">
                            <img
                                src={book.imageLink || "https://via.placeholder.com/150"}
                                alt={book.title}
                                className="h-80 w-full object-fit rounded-md mb-4"
                            />
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-slate-800 text-xl font-semibold">{book.title}</p>
                                    <p className="text-gray-600">{book.author}</p>
                                </div>
                                <p className="text-green-500 text-xl font-semibold">
                                    ${book.price}
                                </p>
                            </div>
                            <Link to={`/book/detail/${book.id}`}>
                                <button className="rounded-md w-full mt-4 bg-green-500 py-2 px-4 text-sm text-white transition-all hover:bg-green-700">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No books found.</p>
                )}
            </div>
        </div>
    );
}

export default BrowseBooks;
