import React from 'react';
import { MoleculeImageCarouselData } from "@/app/components/molecules/ImageCarousel/propTypes";
import AtomImage from "@/app/components/atoms/Image/AtomImage";

const MoleculeImageCarousel = ({ data }: { data: MoleculeImageCarouselData }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 === data.data.length ? 0 : prevIndex + 1));
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? data.data.length - 1 : prevIndex - 1));
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col gap-4 w-fit">
            <div className="flex flex-row items-center">
                {/*<div className={"fill-secondary cursor-pointer"} onClick={handlePrevious}>*/}
                {/*    <svg*/}
                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                {/*        height="20"*/}
                {/*        viewBox="0 96 960 960"*/}
                {/*        width="20"*/}
                {/*    >*/}
                {/*        <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />*/}
                {/*    </svg>*/}
                {/*</div>*/}
                {data.data.length > 0 && <AtomImage data={data.data[currentIndex]} key={currentIndex} className={"rounded-lg"}/>}
                {/*<div className={"fill-secondary cursor-pointer"} onClick={handleNext}>*/}
                {/*    <svg*/}
                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                {/*        height="20"*/}
                {/*        viewBox="0 96 960 960"*/}
                {/*        width="20"*/}
                {/*    >*/}
                {/*        <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />*/}
                {/*    </svg>*/}
                {/*</div>*/}
            </div>
            <div className="flex flex-row justify-center">
                {data.data.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${currentIndex === index ? "bg-secondary" : "bg-onSurface"}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default MoleculeImageCarousel;
