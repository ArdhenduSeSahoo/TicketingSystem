"use client";
import { useEffect, useState } from "react";
import ChartCard from "./componnent/ChartCard";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
export default function DashBoard() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  });
  return (
    <div>
      <div className="relative flex flex-col">
        {visible && (
          <AnimatePresence>
            {visible && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-custom-logo_background absolute z-50 flex h-screen w-screen flex-col items-center justify-center bg-opacity-70"
              >
                <div className="flex">
                  <Image
                    src={"/images/Esspl_animation.gif"}
                    alt="data not found"
                    height={250}
                    className="rounded-2xl"
                    width={650}
                  ></Image>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
        <div className="grid grid-flow-row grid-cols-1 gap-2 p-2 lg:grid-flow-col">
          <ChartCard />
          <ChartCard />
          <ChartCard />
        </div>
      </div>
    </div>
  );
}
