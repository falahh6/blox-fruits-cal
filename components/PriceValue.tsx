"use client";

interface PriceValueProps {
  title: string;
  value: number | string;
}

const PriceValue = ({ title, value }: PriceValueProps) => {
  return (
    <div>
      <p className="text-gray-400 max-sm:text-xs">{title}:</p>
      <p
        className={`text-2xl max-sm:text-lg font-bold text-left ${
          title.includes("Difference")
            ? (value as number) >= 0
              ? "text-green-400"
              : "text-red-400"
            : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default PriceValue;
