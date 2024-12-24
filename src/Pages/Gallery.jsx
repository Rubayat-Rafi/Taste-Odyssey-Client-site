const Gallery = () => {
return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-338px)] flex flex-col justify-between">
        {/* heading banner */}
        <div className="h-[100px] md:h-[250px] bg-gallery-banner w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative">
            {/* overlay  */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* descriptions  */}
            <div className="text-center z-10">
                <h1 className="text-xl md:text-4xl font-semibold text-white">
                    Gallery | Taste Odyssey
                </h1>
                <p className="px-[10%] text-sm md:text-lg text-white/60 mt-1">
                    Welcome to the Taste Odyssey Gallery! Here you can view images of our delicious food.
                </p>
            </div>
        </div>
    </div>
);
};

export default Gallery;
