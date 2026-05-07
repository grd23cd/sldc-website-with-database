import type { ImageMetadata } from "astro";

import mart1_1 from "../assets/carousel/mart1-1.jpg";
import mart1_2 from "../assets/carousel/mart1-2.jpg";
import mart1_3 from "../assets/carousel/mart1-3.jpg";
import mart1_4 from "../assets/carousel/mart1-4.jpg";
import mart1_5 from "../assets/carousel/mart1-5.jpg";

import mart2_1 from "../assets/carousel/mart2-1.jpg";
import mart2_2 from "../assets/carousel/mart2-2.jpg";
import mart2_3 from "../assets/carousel/mart2-3.jpg";
import mart2_4 from "../assets/carousel/mart2-4.jpg";
import mart2_5 from "../assets/carousel/mart2-5.jpg";

import mart3_1 from "../assets/carousel/mart3-1.jpg";
import mart3_2 from "../assets/carousel/mart3-2.jpg";
import mart3_3 from "../assets/carousel/mart3-3.jpg";
import mart3_4 from "../assets/carousel/mart3-4.jpg";
import mart3_5 from "../assets/carousel/mart3-5.jpg";

import mart4_1 from "../assets/carousel/mart4-1.jpg";
import mart4_2 from "../assets/carousel/mart4-2.jpg";
import mart4_3 from "../assets/carousel/mart4-3.jpg";
import mart4_4 from "../assets/carousel/mart4-4.jpg";
import mart4_5 from "../assets/carousel/mart4-5.jpg";

import water_refilling_1 from "../assets/carousel/waterrefilling-1.jpg";
import water_refilling_2 from "../assets/carousel/waterrefilling-2.jpg";
import water_refilling_3 from "../assets/carousel/waterrefilling-3.jpg";
import water_refilling_4 from "../assets/carousel/waterrefilling-4.jpg";
import water_refilling_5 from "../assets/carousel/waterrefilling-5.jpg";

import appliances_1 from "../assets/carousel/appliances-1.jpg";
import appliances_2 from "../assets/carousel/appliances-2.jpg";
import appliances_3 from "../assets/carousel/appliances-3.jpg";
import appliances_4 from "../assets/carousel/appliances-4.jpg";
import appliances_5 from "../assets/carousel/appliances-5.jpg";

import palay_1 from "../assets/carousel/palay-1.jpg";
import palay_2 from "../assets/carousel/palay-2.jpg";
import palay_3 from "../assets/carousel/palay-3.jpg";

import rice_1 from "../assets/carousel/rice-1.jpg";
import rice_2 from "../assets/carousel/rice-2.jpg";
import rice_3 from "../assets/carousel/rice-3.jpg";

import drying_1 from "../assets/carousel/drying-1.jpg";
import drying_2 from "../assets/carousel/drying-2.jpg";
import drying_3 from "../assets/carousel/drying-3.jpg";

import hall_1 from "../assets/carousel/hall-1.jpg";
import hall_2 from "../assets/carousel/hall-2.jpg";
import hall_3 from "../assets/carousel/hall-3.jpg";

import van_1 from "../assets/carousel/van-1.jpg";
import van_2 from "../assets/carousel/van-2.jpg";
import van_3 from "../assets/carousel/van-3.jpg";

import atm_1 from "../assets/carousel/atm.jpg";

export type GallerySection = {
  title: string;
  images: ImageMetadata[];
};

export const gallerySections: GallerySection[] = [
  {
    title: "Mart 1",
    images: [mart1_1, mart1_2, mart1_3, mart1_4, mart1_5],
  },
  {
    title: "Mart 2",
    images: [mart2_1, mart2_2, mart2_3, mart2_4, mart2_5],
  },
  {
    title: "Mart 3",
    images: [mart3_1, mart3_2, mart3_3, mart3_4, mart3_5],
  },
  {
    title: "Mart 4",
    images: [mart4_1, mart4_2, mart4_3, mart4_4, mart4_5],
  },
  {
    title: "Water Refilling Station",
    images: [
      water_refilling_1,
      water_refilling_2,
      water_refilling_3,
      water_refilling_4,
      water_refilling_5,
    ],
  },
  {
    title: "Appliances and Gift Shop",
    images: [
      appliances_1,
      appliances_2,
      appliances_3,
      appliances_4,
      appliances_5,
    ],
  },
  {
    title: "Palay Warehousing",
    images: [palay_1, palay_2, palay_3],
  },
  {
    title: "Rice Milling",
    images: [rice_1, rice_2, rice_3],
  },
  {
    title: "Drying",
    images: [drying_1, drying_2, drying_3],
  },
  {
    title: "Function Hall/Chair Rental",
    images: [hall_1, hall_2, hall_3],
  },
  {
    title: "Van for Hire",
    images: [van_1, van_2, van_3],
  },
  {
    title: "ATM Services",
    images: [atm_1],
  },
];
