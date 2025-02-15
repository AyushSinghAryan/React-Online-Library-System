import CategoryTile from "./CategoryTile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
    const books = useSelector((state) => state.books);
    const navigate = useNavigate();

    const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Fantasy"];
    // handleCategoryClick use for filter books based on category 
    function handleCategoryClick(category) {
        const normalizedCategory = category.trim().toLowerCase();
        const filteredBooks = books.filter(
            (b) => b.category.toLowerCase() === normalizedCategory
        );
        navigate(`/book/category/${category}`, { state: { books: filteredBooks } });
    }

    return (
        <div className="home-container min-h-screen bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-gray-700 to-gray-900 text-white text-center py-16">
                <h1 className="text-5xl font-bold">Welcome to the Bookstore</h1>
                <p className="mt-2 text-lg">Discover your next great read.</p>
            </div>

            {/* Categories Section */}
            <div className="container mx-auto px-6 py-12">
                <h3 className="text-3xl font-semibold text-center mb-6">Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2">
                    {categories.map((category, index) => (
                        <CategoryTile
                            key={index}
                            category={category}
                            onClick={() => handleCategoryClick(category)}
                        />
                    ))}
                </div>
            </div>

            {/* Popular Books Section -  */}
            <div className="container mx-auto px-6 py-12 bg-grey-500">
                <h3 className="text-4xl font-bold text-center mb-8">Popular Books</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {books && books.length > 0 ? (
                        books.slice(4, 8).map((book, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                            >
                                <img
                                    src={book.imageLink || "https://via.placeholder.com/150"}
                                    alt={book.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h4 className="font-bold text-xl text-gray-800">{book.title}</h4>
                                    <p className="text-gray-600 mb-4">{book.author}</p>
                                    <p className="text-green-500 font-semibold text-lg">${book.price}</p>
                                    <Link to={`/book/detail/${book.id}`}>
                                        <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">
                            No Popular books available.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
