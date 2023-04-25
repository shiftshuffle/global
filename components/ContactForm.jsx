import React from 'react';

const ContactForm = () => {
    return (
        <div className="flex flex-wrap">


            <div className="w-full md:w-1/2 bg-[#071646]">
                <div className="p-10">
                    <h2 className="text-2xl font-bold mb-4 text-gray-100">Contacto</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-100 font-bold mb-2" htmlFor="name">
                                Nombre
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-100 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="johndoe@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-100 font-bold mb-2" htmlFor="phone">
                                Numero Telefono
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone"
                                type="tel"
                                placeholder="(+52) 552378388"
                            />
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>



            <div className="w-full md:w-1/2">
                <img src="/images/apartment.png" alt="Apartment" className="w-full h-full object-cover" />
            </div>



        </div>
    );
};

export default ContactForm;
