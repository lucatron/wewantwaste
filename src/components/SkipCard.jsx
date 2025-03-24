import React from "react";
import skipImage from "../assets/skip.jpg";

export default function SkipCard({ skip, isSelected, onSelect }) {
    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
    const warnings = [];

    if (!skip.allowed_on_road) warnings.push("Private Property Only");
    if (!skip.allows_heavy_waste) warnings.push("Not Suitable for Heavy Waste");

    return (
        <div
            className={`relative rounded-2xl border transition-all duration-300 p-4 
        ${isSelected
                    ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-100"
                    : "border-gray-200 bg-white"
                } 
        hover:shadow-xl hover:-translate-y-1 transform`}
        >
            {/* Size Badge */}
            <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {skip.size} Yards
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden mb-4">
                <img
                    src={skipImage}
                    alt={`Skip ${skip.size} yards`}
                    className="w-full h-40 object-cover"
                />
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 mb-1">
                {skip.size} Yard Skip
            </h2>
            <p className="text-sm text-gray-500 mb-2">
                {skip.hire_period_days}-day hire period
            </p>

            {/* Price */}
            <div className="text-xl font-bold text-blue-600 mb-3">
                £{totalPrice.toFixed(2)}{" "}
                <span className="text-sm font-medium text-gray-400">inc VAT</span>
            </div>

            {/* Warnings */}
            {warnings.length > 0 && (
                <ul className="mb-4 text-xs text-red-500 space-y-1">
                    {warnings.map((w, i) => (
                        <li key={i}>⚠️ {w}</li>
                    ))}
                </ul>
            )}

            {/* Button */}
            <button
                onClick={() => onSelect(skip.id)}
                className={`w-full py-2 rounded-xl text-sm font-semibold transition-all ${isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
            >
                {isSelected ? "✓ Selected" : "Select This Skip"}
            </button>
        </div>
    );
}
