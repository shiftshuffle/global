import React from 'react';
import Calculator from '@/components/Calculator3';
const CalcWraper = () => {
    return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                <img src="/images/apartment.png" alt="Apartment" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 bg-[#071646]">
                <div className="p-10">
                    <Calculator />
                </div>
            </div>

        </div>
    );
};

export default CalcWraper;
