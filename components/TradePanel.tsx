"use client";

import { motion } from "framer-motion";
import TradeItem from "./TradeItem";
import { sections } from "@/types/calculator";
import FruitSelector from "./FruitSelector";
import { useAtom } from "jotai";
import { offerItemsAtom, requestItemsAtom } from "@/store/atom";

interface TradePanelProps {
  title: string;
  section: sections;
}

const TradePanel = ({ title, section }: TradePanelProps) => {
  const [items] = useAtom(
    section === "offer" ? offerItemsAtom : requestItemsAtom
  );

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-lg font-bold mb-4 text-cyan-400">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <TradeItem key={item.id} item={item} section={section} />
        ))}
        <FruitSelector section={section} />
      </div>
    </motion.div>
  );
};

export default TradePanel;
