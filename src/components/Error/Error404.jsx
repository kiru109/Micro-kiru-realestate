import React from 'react';
import { motion } from 'framer-motion';

const Error404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-red-200 text-white">
      <div className="text-center mb-8">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold"
        >
          404
        </motion.h1>
        <p className="text-xl">Page Not Found</p>
      </div>

      {/* <motion.img
        src="/path/to/ship-icon.png" // Replace with your ship icon path
        alt="PropTab Icon"
        className="w-32 h-32 absolute"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut',
        }}
        style={{ top: '30%', left: '10%' }}
      /> */}

      {/* <motion.img
        src="/path/to/anchor-icon.png" // Replace with your anchor icon path
        alt="Anchor Icon"
        className="w-24 h-24 absolute"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'linear',
        }}
        style={{ bottom: '20%', right: '15%' }}
      /> */}

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8"
      > */}
       <center> <a href="/" className="text-red-900 hover:underline">
          Back to Home
        </a></center>
      {/* </motion.div> */}
    </div>
  );
};

export default Error404;
