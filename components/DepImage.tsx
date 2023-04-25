"use client"
import "yet-another-react-lightbox/styles.css";

import SimpleImageSlider from "react-simple-image-slider";


const DepImage = () => {
    const images = [
        { url: "images/a/1.jpg" },
        { url: "images/a/2.jpg" },
        { url: "images/a/3.jpg" },
        { url: "images/a/4.jpg" },
        { url: "images/a/5.jpg" },
        { url: "images/a/6.jpg" },
        { url: "images/a/7.jpg" },
    ];
    return (
        <>
            <div className="flex flex-wrap my-10">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl text-white text-center font-bold">MODELO A</h1>

                    <div>
                        <ul className="text-xl text-white list-disc mx-20 my-10">
                            <li>Sala/Comedor</li>
                            <li>Terraza</li>
                            <li>Cocina</li>
                        </ul>

                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="p-0">
                        <br></br>
                        <SimpleImageSlider
                            width={500}
                            height={250}
                            images={images}
                            showNavs={true}
                            style={{ margin: '0 auto' }}
                            slideDuration={0.5}
                        />
                    </div>
                </div>

            </div>



        </>
    )


}
export default DepImage;
