// "use client"
// import { useState, useRef } from 'react';
// import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <div>


                <div className="bg-black w-full">
                    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                        <div>
                            <h1 className="w-full text-3xl text-gray-100 font-corgar">
                                Global X 30
                            </h1>

                            {/* <div className="flex justify-between md:w-[75%] my-6">
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
              <FaGithubSquare size={30} />
              <FaDribbbleSquare size={30} />
            </div> */}
                            <br></br>
                            <br></br>
                            <div className="font-assist">

                                <br></br>
                                <a href="https://shift27.netlify.app/home">
                                    © 2023 Website by Francisco Villalobos
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default Footer;
