"use client";

import { atom } from "jotai";
import { Fruit } from "@/types/calculator";

export const offerItemsAtom = atom<Fruit[]>([]);
export const requestItemsAtom = atom<Fruit[]>([]);
