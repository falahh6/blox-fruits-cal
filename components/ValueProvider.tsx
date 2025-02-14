"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";

const ValueProvider = () => {
  return (
    <>
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
          <SelectItem value="bloxfruit" className="hover:cursor-pointer w-full">
            Blox Fruit
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default ValueProvider;
