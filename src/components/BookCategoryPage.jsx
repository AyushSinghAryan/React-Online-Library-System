import { useLocation, useParams, Link } from "react-router-dom";

function BookCategoryPage() {
    const { category } = useParams();
    const location = useLocation();
    const books = location.state?.books || []; // Get books from navigation state

    console.log("Filtered Books: are", books);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Books in {category} Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books.length > 0 ? (
                    books.map((book, index) => (
                        <div key={index} className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg p-4">
                            <img
                                src={book.imageLink || "https://via.placeholder.com/150"} // Use book image if available
                                alt={book.title}
                                className="h-80 w-full object-fit rounded-md mb-4"
                            />
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-slate-800 text-xl font-semibold">{book.title}</p>
                                    <p className="text-gray-600">{book.author}</p>
                                </div>
                                <p class="text-green-500 text-xl font-semibold">
                                    ${book.price}
                                </p>
                            </div>
                            <Link to={`/book/detail/${book.id}`}>  <button className="rounded-md w-full mt-4 bg-green-500 py-2 px-4 text-sm text-white transition-all hover:bg-cyan-700">
                                View Details
                            </button> </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No books available in this category.</p>
                )}
            </div>
        </div>
    );
}

export default BookCategoryPage;
