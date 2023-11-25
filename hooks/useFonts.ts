import React from "react";
import { Poppins, Montserrat, Libre_Baskerville } from "next/font/google";

const poppins = Montserrat({ subsets: ["latin"] });
const libre = Libre_Baskerville({ weight: ["400", "700"], subsets: ["latin"] });

const useFonts = () => {
  return { poppins, libre };
};

export default useFonts;
