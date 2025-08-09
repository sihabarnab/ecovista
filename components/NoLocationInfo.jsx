"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const NoLocationInfo = () => {
  return (
    <Card>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6"
      >
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-10 h-10 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21c-4-4.5-8-8-8-11a8 8 0 1 1 16 0c0 3-4 6.5-8 11z"
            />
            <line x1="9" y1="9" x2="15" y2="15" />
            <line x1="15" y1="9" x2="9" y2="15" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">
          No Location Information
        </h2>
        <p className="text-gray-400 max-w-md">
          We couldn&apos;t find any location details for your request. Please
          check your settings or try again later.
        </p>
      </motion.div>
    </Card>
  );
};

export default NoLocationInfo;
