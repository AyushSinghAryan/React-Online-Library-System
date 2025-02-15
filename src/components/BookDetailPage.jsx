import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetailPage() {
    const params = useParams();
    const navigate = useNavigate();
    const books = useSelector((state) => state.books);

    const book = books.find(book => book.id == params.id);

    if (!book) {
        return <p className="text-white text-center mt-10">Book not found</p>;
    }

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gray-500 text-white p-6">
            {/* Back to Browse Button on the Left */}
            <button
                onClick={() => navigate("/browseBooks")}
                className="absolute left-4 top-6 md:left-8 md:top-8 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition-all"
            >
                ← Back to Browse
            </button>

            {/* Book Detail Container */}
            <div className="max-w-3xl w-full bg-gray-800/80 shadow-lg rounded-2xl overflow-hidden">
                <div className="p-6 flex flex-col md:flex-row gap-6">
                    <img
                        src={book?.imageLink || "https://images.unsplash.com/photo-1541963463532-d68292c34b19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"}
                        alt={book.title}
                        className="w-52 h-72 object-cover rounded-lg shadow-md mx-auto md:mx-0"
                    />
                    <div className="flex flex-col justify-between flex-1">
                        <div>
                            <h2 className="text-3xl font-bold text-neon-pink">{book.title}</h2>
                            <p className="text-lg text-gray-300">by {book.author}</p>
                            <p className="text-sm text-gray-400">Published: {book.year} | {book.language}</p>
                            <p className="mt-4 text-gray-200">{book.description}</p>
                            <p className="mt-4 text-gray-300">Category: <span className="font-semibold text-gray-400">{book.category}</span></p>
                            <p className="mt-2 text-gray-300">Pages: <span className="font-semibold">{book.pages}</span></p>
                            <p className="mt-2 text-gray-300">Country: <span className="font-semibold">{book.country}</span></p>
                            <p className="mt-2 text-gray-300">Rating: <span className="font-semibold">{book.rating} ⭐</span></p>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <span className="text-2xl font-bold text-green-400">${book.price.toFixed(2)}</span>
                            <a href={book.link} target="_blank" rel="noopener noreferrer">
                                <button className="bg-gray-500 hover:bg-gray-600 flex items-center gap-2 text-white px-4 py-2 rounded-lg">
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13V19A2 2 0 0 1 16 21H5A2 2 0 0 1 3 19V8A2 2 0 0 1 5 6H11" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetailPage;
