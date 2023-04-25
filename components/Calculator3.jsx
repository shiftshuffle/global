
"use client"
import { useState } from 'react';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Calculator3 = () => {
    const [principal, setPrincipal] = useState(100000);
    const [interestRate, setInterestRate] = useState(5);
    const [loanTerm, setLoanTerm] = useState(30);

    const monthlyInterestRate = interestRate / 1200;
    const numberOfPayments = loanTerm * 12;
    const mortgage =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = mortgage * numberOfPayments;

    const paymentData = [];
    let balance = principal;

    // for (let i = 0; i < numberOfPayments; i++) {
    //     const interest = balance * monthlyInterestRate;
    //     const principalPaid = mortgage - interest;
    //     balance = balance - principalPaid;
    //     paymentData.push({ payment: mortgage, interest, principalPaid, balance });
    // }

    return (
        <div className="flex flex-col items-center justify-center text-gray-100">
            <h1 className="text-4xl font-bold mb-4">Calculadora Interes</h1>
            {/* <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border rounded-lg p-4"> */}
            <div className="w-full  border rounded-lg p-4">
                <div className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="principal">Monto Inicial ($)</label>
                        <Slider
                            min={50000}
                            max={1000000}
                            step={5000}
                            value={principal}
                            onChange={setPrincipal}
                        />
                        <span className="text-xs text-gray-500">{`$${principal.toLocaleString()}`}</span>
                    </div>
                    <div>
                        <label htmlFor="interestRate">Tasa Interes (%)</label>
                        <Slider
                            min={0.5}
                            max={10}
                            step={0.1}
                            value={interestRate}
                            onChange={setInterestRate}
                        />
                        <span className="text-xs text-gray-500">{`${interestRate}%`}</span>
                    </div>
                    <div>
                        <label htmlFor="loanTerm">Tiempo</label>
                        <Slider
                            min={10}
                            max={50}
                            step={1}
                            value={loanTerm}
                            onChange={setLoanTerm}
                        />
                        <span className="text-xs text-gray-500">{`${loanTerm} years`}</span>
                    </div>
                    <div className="text-right">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Calcular
                        </button>
                    </div>
                </div>
                <div className="mt-4">
                    {/* <table className="w-full text-center">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2">Payment</th>
                                <th className="border px-4 py-2">Interest</th>
                                <th className="border px-4 py-2">Principal</th>
                                <th className="border px-4 py-2">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentData.map((data, index) => {
                                const { payment, interest, principalPaid, balance } = data;
                                return (
                                    <tr key={index}>
                                        <td className="border px-4 py-2">{`$${payment.toFixed(
                                        )}`}</td>
                                        <td className="border px-4 py-2">{`$${interest.toFixed(
                                            2
                                        )}`}</td>
                                        <td className="border px-4 py-2">{`$${principalPaid.toFixed(
                                            2
                                        )}`}</td>
                                        <td className="border px-4 py-2">{`$${balance.toFixed(
                                            2
                                        )}`}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table> */}

                </div>
            </div>
        </div>
    );
};

export default Calculator3;
