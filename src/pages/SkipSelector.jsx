import React, { useState } from "react";
import { skipData } from "../data/skipData";
import SkipCard from "../components/SkipCard";

export default function SkipSelector() {
    const [selectedSkipId, setSelectedSkipId] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-2">
                        Choose Your Skip Size
                    </h1>
                    <p className="text-gray-500 text-base max-w-md mx-auto">
                        Select the skip size that best suits your needs. All prices include a 14-day hire period and VAT.
                    </p>
                </div>

                {/* Grid of Skip Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skipData.map((skip) => (
                        <SkipCard
                            key={skip.id}
                            skip={skip}
                            isSelected={selectedSkipId === skip.id}
                            onSelect={setSelectedSkipId}
                        />
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-14 flex justify-between items-center max-w-2xl mx-auto">
                    <button className="text-sm text-gray-600 hover:text-gray-800 transition">
                        ← Back
                    </button>
                    <button
                        disabled={!selectedSkipId}
                        className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-md ${selectedSkipId
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-300 text-gray-100 cursor-not-allowed"
                            }`}
                    >
                        Continue →
                    </button>
                </div>
            </div>
        </div>
    );
}
