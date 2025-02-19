"use client";
import { useEffect, useState } from "react";
import ChartCardOne from "./componnent/ChartCardOne";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ChartCardTwo from "./componnent/ChartCardTwo";
import ChartCardThree from "./componnent/ChartCardThree";
import ChartCardFour from "./componnent/ChartCardFour";
export default function DashBoard() {
  const [visible, setVisible] = useState(false);
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
                className="absolute z-50 flex h-screen w-screen flex-col items-center justify-center bg-custom-logo_background bg-opacity-70"
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
        <div className="grid grid-cols-1">
          <div className="col-start-1 row-start-1 flex gap-2 rounded-lg px-2 pt-2">
            <div className="bg-linear-to-bl flex grow items-start justify-start overflow-auto rounded-lg from-violet-500 to-fuchsia-500 shadow-lg">
              <ChartCardOne />
            </div>
            <div className="bg-linear-to-bl flex grow items-start justify-start overflow-auto rounded-lg from-violet-500 to-fuchsia-500 shadow-lg">
              <ChartCardTwo />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="col-start-1 row-start-1 flex gap-2 rounded-lg px-2 pt-2">
            <div className="bg-linear-to-bl flex grow items-start justify-start overflow-auto rounded-lg from-violet-500 to-fuchsia-500 shadow-lg">
              <ChartCardThree />
            </div>
            <div className="bg-linear-to-bl flex grow items-start justify-start overflow-auto rounded-lg from-violet-500 to-fuchsia-500 shadow-lg">
              <ChartCardFour />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
