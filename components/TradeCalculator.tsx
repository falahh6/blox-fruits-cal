"use client";

import { motion } from "framer-motion";
import TradePanel from "./TradePanel";

import { useAtom } from "jotai";
import { offerItemsAtom, requestItemsAtom } from "@/store/atom";
import ValueProvider from "./ValueProvider";
import PriceValue from "./PriceValue";

const TradeCalculator = () => {
  const [offerItems] = useAtom(offerItemsAtom);
  const [requestItems] = useAtom(requestItemsAtom);

  const calculateTotal = (items: typeof offerItems, key: "value" | "price") =>
    items.reduce((total, item) => total + item[key], 0);

  const offerTotalValue = calculateTotal(offerItems, "value");
  const requestTotalValue = calculateTotal(requestItems, "value");
  const offerTotalPrice = calculateTotal(offerItems, "price");
  const requestTotalPrice = calculateTotal(requestItems, "price");

  const valueDifference = offerTotalValue - requestTotalValue;
  const priceDifference = offerTotalPrice - requestTotalPrice;

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <TradePanel title="Offer (You)" section="offer" />
        <TradePanel title="Request (Them)" section="request" />
      </div>
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-bold mb-4 text-cyan-400">Trade Summary</h2>
        <div className="flex flex-row items-center justify-between text-center">
          <PriceValue title="Your Price" value={offerTotalPrice} />
          <PriceValue title="Their Price" value={requestTotalPrice} />
          <PriceValue title="Price Difference" value={priceDifference} />
        </div>
        <ValueProvider />
        <div className="flex flex-row items-center justify-between text-center">
          <PriceValue title="Your Value" value={offerTotalValue} />
          <PriceValue title="Their Value" value={requestTotalValue} />
          <PriceValue title="Value Difference" value={valueDifference} />
        </div>
      </motion.div>
    </div>
  );
};

export default TradeCalculator;
