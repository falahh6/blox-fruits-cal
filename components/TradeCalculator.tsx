"use client";

import { motion } from "framer-motion";
import TradePanel from "./TradePanel";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useAtom } from "jotai";
import { offerItemsAtom, requestItemsAtom } from "@/store/atom";

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
          <div>
            <p className="text-gray-400 max-sm:text-xs">Your Price:</p>
            <p className="text-2xl max-sm:text-lg font-bold text-left">
              {offerTotalPrice}
            </p>
          </div>
          <div>
            <p className="text-gray-400 max-sm:text-xs">Their Price:</p>
            <p className="text-2xl max-sm:text-lg font-bold  text-left">
              {requestTotalPrice}
            </p>
          </div>
          <div>
            <p className="text-gray-400 max-sm:text-xs">Price Difference:</p>
            <p
              className={`text-2xl max-sm:text-lg font-bold text-left ${
                priceDifference >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {priceDifference}
            </p>
          </div>
        </div>
        <div className="">
          <label
            htmlFor="valueProvider"
            className="block text-sm font-medium text-gray-400 mb-2"
          >
            Value Provider
          </label>
          <Select>
            <SelectTrigger className="bg-gray-700 text-white rounded-md py-2 px-6 max-sm:w-full w-fit  focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <SelectValue placeholder="Select a value provider" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white rounded-md py-2 px-4 w-full">
              <SelectItem
                value="gamersberg"
                className="hover:cursor-pointer w-full"
              >
                Gamersberg
              </SelectItem>
              <SelectItem
                value="fruityblox.com"
                className="hover:cursor-pointer w-full"
              >
                fruityblox.com
              </SelectItem>
              <SelectItem
                value="bloxfruit"
                className="hover:cursor-pointer w-full"
              >
                Blox Fruit
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row items-center justify-between text-center">
          <div>
            <p className="text-gray-400 max-sm:text-xs">Your Value:</p>
            <p className="text-2xl max-sm:text-lg font-bold text-left">
              {offerTotalValue}
            </p>
          </div>
          <div>
            <p className="text-gray-400 max-sm:text-xs">Their Value:</p>
            <p className="text-2xl max-sm:text-lg font-bold text-left">
              {requestTotalValue}
            </p>
          </div>
          <div className="">
            <p className="text-gray-400 max-sm:text-xs">Value Difference:</p>
            <p
              className={`text-2xl max-sm:text-lg font-bold text-left ${
                valueDifference >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {valueDifference}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TradeCalculator;
