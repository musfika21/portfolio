const DottedBox = ({ rows = 4, cols = 5, position = "top-right", className = "" }) => {
    const totalDots = rows * cols;

    const positionClasses = {
        "top-right": "top-4 right-4 sm:top-8 sm:right-8 md:top-12 md:right-12",
        "top-left": "top-4 left-4 sm:top-8 sm:left-8 md:top-12 md:left-12",
        "bottom-right": "bottom-20 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12",
        "bottom-left": "bottom-20 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12"
    };

    return (
        <div
            className={`absolute ${positionClasses[position]} grid gap-1 sm:gap-2 ${className}`}
            style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
            {[...Array(totalDots)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-700 rounded-full"></div>
            ))}
        </div>
    );
};

export default DottedBox;