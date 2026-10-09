

export function AutoCarousel({ images }) {
    const doubledImages = [...images, ...images];

    return (
        <div className="relative w-full overflow-hidden py-10">
            <div className="flex w-max slow-scroll gap-3">
                {doubledImages.map((image, index) => (
                    <div key={index}>
                        <img 
                            src={image.url} 
                            alt={`slide ${index}`} 
                            className="h-30 w-auto rounded-xl object-cover shadow-md grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                ))}
            </div>

            <div className="pointer-events-none absoulte inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent"></div>
            <div className="pointer-events-none absoulte inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent"></div>
        </div>
    );
}