"use client";

import { formatAmount } from "../lib/utils";
import { offerItemsAtom, requestItemsAtom } from "../store/atom";
import { Fruit, sections } from "../types/calculator";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Image from "next/image";

interface TradeItemProps {
  item: Fruit;
  section: sections;
}

const TradeItem = ({ item, section }: TradeItemProps) => {
  const [items, setItems] = useAtom(
    section === "offer" ? offerItemsAtom : requestItemsAtom
  );

  const removeItem = () => {
    const index = items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    }
  };

  return (
    <motion.div
      className="bg-gray-700 rounded-lg p-4 flex items-center justify-between"
      whileHover={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)" }}
    >
      <div className="flex flex-row gap-4">
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={48}
          height={48}
          className="object-cover rounded-lg mix-blend-screen"
        />
        <div>
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-xs text-gray-300">
            Value: <span className="font-semibold ">{item.value}</span>
          </p>
          <p className="text-xs text-gray-300">
            Price:{" "}
            <span className="font-semibold">{formatAmount(item.price)}</span>
          </p>
        </div>
      </div>

      <motion.button
        className="text-red-400 hover:text-red-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          removeItem();
        }}
      >
        Remove
      </motion.button>
    </motion.div>
  );
};

export default TradeItem;
