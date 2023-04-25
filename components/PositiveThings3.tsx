import { FaSwimmingPool, FaDumbbell, FaUtensils, FaCoffee, FaLeaf, FaGlobe, FaBuilding, FaSun, FaTree } from 'react-icons/fa';




const amenities = [
    { icon: <FaSwimmingPool />, label: 'Swimming Pool' },
    { icon: <FaDumbbell />, label: 'Gym' },
    { icon: <FaUtensils />, label: 'Restaurant' },
    { icon: <FaCoffee />, label: 'Cafe' },
    { icon: <FaTree />, label: 'Ecological' },
    { icon: <FaBuilding />, label: 'Roof Garden' }
];


const PositiveThings3 = () => {
    return (
        <section
        // className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center py-16 px-4"
        // style={{
        //     backgroundImage: "url('/images/apartment.png')",
        //     backdropFilter: "blur(1110px)",
        // }}
        >
            <div className="max-w-4xl w-full mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Amenidades
                </h2>
                {/*
                <div className="bg-gray-100 py-10">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">Amenities</h2>
                        <div className="grid grid-cols-4 gap-4">
                            {amenities.map(({ icon, label }) => (
                                <div key={label} className="flex flex-col items-center">
                                    <div className="bg-white rounded-full p-4 mb-2">{icon}</div>
                                    <p className="text-center font-medium">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                {/*

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-lg font-medium mb-4">Amenities</h2>
                    <ul className="grid grid-cols-2 gap-4">
                        <li className="flex items-center space-x-2">
                            <FaSwimmingPool className="text-gray-500" />
                            <span>Swimming pool</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaDumbbell className="text-gray-500" />
                            <span>Gym</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaUtensils className="text-gray-500" />
                            <span>Restaurant</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaCoffee className="text-gray-500" />
                            <span>Cafe</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaTree className="text-gray-500" />
                            <span>Ecological</span>
                        </li>

                <li className="flex items-center space-x-2">
                    <FaBath className="text-gray-500" />
                    <span>Balcony</span>
                </li>
                <li className="flex items-center space-x-2">
                    <FaRegBuilding className="text-gray-500" />
                    <span>Rooftop terrace</span>
                </li>
            </ul>
        </div> */}
                < div className="grid grid-cols-3 gap-4" >
                    <div className="flex items-center justify-center p-4 rounded-full bg-white shadow-md">
                        <FaSwimmingPool size={36} color="#6B7280" />
                    </div>
                    <div className="flex items-center justify-center p-4 rounded-full bg-white shadow-md">
                        <FaDumbbell size={36} color="#6B7280" />
                    </div>
                    <div className="flex items-center justify-center p-4 rounded-full bg-white shadow-md">
                        <FaUtensils size={36} color="#6B7280" />
                    </div>
                    <div className="flex items-center justify-center p-4 rounded-full bg-white shadow-md">
                        <FaCoffee size={36} color="#6B7280" />
                    </div>
                    <div className="flex items-center justify-center p-4 rounded-full bg-white shadow-md">
                        <FaLeaf size={36} color="#6B7280" />
                    </div>

                    <div className="flex items-center justify-center p-4 rounded-full bg-white shadow-md">
                        <FaGlobe size={36} color="#6B7280" />
                    </div>
                    <div className="flex items-center justify-center p-4 rounded-full bg-white shadow-md">
                        <FaBuilding size={36} color="#6B7280" />
                    </div>
                    <div className="flex items-center justify-center p-4 rounded-full bg-white shadow-md">
                        <FaSun size={36} color="#6B7280" />
                    </div>
                </div >
            </div >
        </section >
    );
};

export default PositiveThings3;
