import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
    const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Fantasy"];

    const [book, setBook] = useState({
        title: "",
        author: "",
        category: "",
        pages: "",
        price: "",
        imageLink: "",
        year: "",
        description: "",
        rating: "",
    });

    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // handle input changes
    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    // validate form
    const validate = () => {
        let errors = {};
        if (!book.title) errors.title = "Title is required";
        if (!book.author) errors.author = "Author is required";
        if (!book.category) errors.category = "Category is required";
        if (!book.pages || isNaN(book.pages)) errors.pages = "Enter valid number of pages";
        if (!book.price || isNaN(book.price)) errors.price = "Enter valid price";
        if (!book.imageLink) errors.imageLink = "Image link is required";
        if (!book.year || isNaN(book.year)) errors.year = "Enter a valid year";
        if (!book.description) errors.description = "Description is required";
        if (!book.rating || isNaN(book.rating) || book.rating < 1 || book.rating > 5) {
            errors.rating = "Rating must be between 1 and 5";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        dispatch(addBook({ ...book, id: Date.now(), price: Number(book.price) })); // Add book with unique ID
        navigate("/browseBooks"); // Redirect to Browse Books page
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-700 text-white rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" />
                {errors.title && <p className="text-red-500">{errors.title}</p>}

                <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author" className="w-full p-2 border rounded" />
                {errors.author && <p className="text-red-500">{errors.author}</p>}

                <select name="category" value={book.category} onChange={handleChange} className="w-full p-2 border rounded">
                    <option value="">Select a category</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
                {errors.category && <p className="text-red-500">{errors.category}</p>}

                <input type="number" name="pages" value={book.pages} onChange={handleChange} placeholder="Pages" className="w-full p-2 border rounded" />
                {errors.pages && <p className="text-red-500">{errors.pages}</p>}

                <input type="number" name="price" value={book.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded" />
                {errors.price && <p className="text-red-500">{errors.price}</p>}

                <input type="text" name="imageLink" value={book.imageLink} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded" />
                {errors.imageLink && <p className="text-red-500">{errors.imageLink}</p>}

                <input type="number" name="year" value={book.year} onChange={handleChange} placeholder="Year" className="w-full p-2 border rounded" />
                {errors.year && <p className="text-red-500">{errors.year}</p>}

                <textarea name="description" value={book.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded"></textarea>
                {errors.description && <p className="text-red-500">{errors.description}</p>}

                <select name="rating" value={book.rating} onChange={handleChange} className="w-full p-2 border rounded bg-gray-700 text-white">
                    <option value="">Select Rating</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                </select>
                {errors.rating && <p className="text-red-500">{errors.rating}</p>}

                <button type="submit" className="bg-green-500 hover:bg-green-600 w-full p-2 rounded">
                    Add Book
                </button>
            </form>
        </div>
    );
}

export default AddBook;
