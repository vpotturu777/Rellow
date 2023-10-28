import React from 'react';

const Table = () => {
    const testData = [
      {
        property: "Luxury Condo",
        location: "New York",
        investmentType: "Rental Property",
        amountInvested: 1500000,
      },
      {
        property: "Suburban House",
        location: "Los Angeles",
        investmentType: "Flip Property",
        amountInvested: 800000,
      },
    ];
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Real Estate Investments</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Property</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Investment Type</th>
            <th className="border p-2">Amount Invested</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((investment, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{investment.property}</td>
              <td className="border p-2">{investment.location}</td>
              <td className="border p-2">{investment.investmentType}</td>
              <td className="border p-2">
                ${investment.amountInvested.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
