"use client";

import { useState } from "react";
import "./globals.css";
import TradeCalculator from "../components/TradeCalculator";

export default function Home() {
  const [theme] = useState("dark");

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8">
          <h1 className="py-4 text-xl font-semibold">Blox Fruit Calculator</h1>
          <TradeCalculator />
        </main>
      </div>
    </div>
  );
}
