"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Fruit, sections } from "../types/calculator";
import { useAtom } from "jotai";
import { offerItemsAtom, requestItemsAtom } from "../store/atom";
import Image from "next/image";

const fruits: Fruit[] = [
  {
    id: 1,
    name: "Rocket",
    value: 5000,
    price: 5000,
    imageUrl:
      "https://www.gamersberg.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRocketFruit.1d5a2124.webp&w=256&q=75",
  },
  {
    id: 2,
    name: "Spin",
    value: 7500,
    price: 7500,
    imageUrl:
      "https://www.gamersberg.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSpinFruit.de54d693.webp&w=256&q=75",
  },
  {
    id: 3,
    name: "Blade",
    value: 50000,
    price: 30000,
    imageUrl:
      "https://www.gamersberg.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FChopFruit.595d93c6.webp&w=256&q=75",
  },
  {
    id: 4,
    name: "Spring",
    value: 60000,
    price: 60000,
    imageUrl:
      "https://www.gamersberg.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSpringFruit.cd7b528d.webp&w=256&q=75",
  },
  {
    id: 4,
    name: "Smoke",
    value: 100000,
    price: 100000,
    imageUrl:
      "https://www.gamersberg.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSmokeFruit.e1342b1e.webp&w=256&q=75",
  },
];

interface FruitSelectorProps {
  section: sections;
}

const FruitSelector = ({ section }: FruitSelectorProps) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const [items, setItems] = useAtom(
    section === "offer" ? offerItemsAtom : requestItemsAtom
  );

  const addItem = (fruit: Fruit) => {
    setItems([...items, fruit]);

    setIsSelectorOpen(false);
  };

  return (
    <Dialog
      open={isSelectorOpen}
      onOpenChange={(val) => setIsSelectorOpen(val)}
    >
      <DialogTrigger asChild>
        <motion.button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSelectorOpen(true)}
        >
          <Plus size={18} />
          <span>Add Item</span>
        </motion.button>
      </DialogTrigger>
      <DialogContent className="[&>button]:hidden bg-gradient-to-r from-purple-700 to-cyan-500 text-white shadow-2xl border-2 border-cyan-300 max-sm:w-[90vw]">
        <DialogHeader className="flex flex-row items-baseline justify-between">
          <DialogTitle className="text-yellow-300 text-xl font-extrabold drop-shadow-lg">
            Select a Fruit
          </DialogTitle>
          <button
            className="hover:text-gray-300 text-yellow-300 text-xl font-semibold"
            onClick={() => setIsSelectorOpen(false)}
          >
            X
          </button>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {fruits.map((fruit) => (
            <div
              key={fruit.name}
              className={`p-4 rounded-lg cursor-pointer flex flex-col items-center gap-2 transition-all duration-300 transform hover:scale-110 bg-gray-700`}
              onClick={() => addItem(fruit)}
            >
              <Image
                src={fruit.imageUrl}
                alt={fruit.name}
                width={80}
                height={80}
                className="object-cover rounded-lg mix-blend-screen"
              />
              <p className="text-center font-bold text-lg text-white drop-shadow">
                {fruit.name}
              </p>
              <p className="text-center text-sm text-gray-200">
                Value: {fruit.value}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FruitSelector;
