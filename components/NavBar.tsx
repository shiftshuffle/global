
"use client"
import Link from 'next/link';
import { useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { FiMenu } from 'react-icons/fi';

import { FaFacebook, FaInstagram } from 'react-icons/fa';
export const MenuData = [
    { title: "Inicio", path: "/" },
    { title: "Contacto", path: "/contacto" },
    { title: "Registrar", path: "/registrar" },
    { title: "Informacion", path: "/informacion" }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Disclosure as="nav" className="bg-[#071646] shadow">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex">
                                    <div className="flex-shrink-0 flex items-center">
                                        <Link href="/">
                                            <div className="flex items-center">
                                                {/* <GiHouse className="text-2xl text-blue-500 mr-2" />
                                            <span className="font-bold text-xl text-gray-900">Real Estate Co.</span> */}
                                                <img src="images/Global.png" alt="Logo" className="h-10 mr-2" />
                                                {/* <span className="font-semibold text-xl tracking-tight">Real State Business</span> */}


                                                <span href="#" className="px-3 py-2 rounded-md text-gray-100 hover:text-blue-500">
                                                    <FaFacebook className="h-6 w-6" />
                                                </span>
                                                <span href="#" className="px-3 py-2 rounded-md text-gray-100 hover:text-blue-500">
                                                    <FaInstagram className="h-6 w-6" />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="-mr-2 flex items-center sm:hidden">
                                    <Disclosure.Button
                                        className="bg-slate-800 rounded-md p-2 inline-flex items-center justify-center text-gray-100 focus:outline-none"
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        <FiMenu className="h-6 w-6" />
                                    </Disclosure.Button>
                                </div>
                                <div className="hidden sm:block sm:ml-6">

                                    <div className="flex space-x-4">

                                        {MenuData.map((item) => (
                                            <Link href={item.path} key={item.title}>
                                                <h1 className="px-1 py-5 text-gray-100 font-medium hover:text-blue-500">
                                                    {item.title}
                                                </h1>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {MenuData.map((item) => (
                                    <Link href={item.path} key={item.title}>
                                        <span
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-blue-500 hover:bg-gray-50"
                                        >
                                            {item.title}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
};

export default Navbar;
