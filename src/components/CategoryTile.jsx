function CategoryTile({ category, onClick }) {
    return (
        <div className="flex justify-center cursor-pointer" onClick={onClick}>
            <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center bg-white shadow-lg rounded-xl text-xl font-semibold text-gray-800 transition-all duration-300 hover:scale-105">

                <img
                    src="https://img.freepik.com/free-photo/pack-colorful-cardboard-sheets-with-copy-space_23-2148320371.jpg?ga=GA1.1.1525301397.1738992432&semt=ais_hybrid"
                    alt={category}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                />

                <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50 rounded-xl"></div>

                <span className="relative z-10 text-amber-800">{category}</span>
            </div>
        </div>
    );
}

export default CategoryTile;
