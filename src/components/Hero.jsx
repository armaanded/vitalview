import React from 'react';
import vital_logo from './images/vitalview_logo.svg';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative hero-bg h-screen w-screen flex text-center flex-col items-center justify-center fixed top-0 left-0">

            <div className="absolute z-50 text-center">
                <img
                    src={vital_logo}
                    alt="VitalView logo"
                    className="w-32 md:w-64 mb-4 animate-PopUp"
                />

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className="text-4xl font-bold tracking-wider text-white"
                >
                    VitalView
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.4, duration: 0.8 }}
                    className="text-xl text-white"
                >
                    Your personal health companion
                </motion.p>
            </div>

            <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 50, opacity: 0 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className="absolute top-1/3.5 left-1/3.5 z-40 h-[10rem] w-[10rem] hero-bg rounded-full transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>

            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute inset-0 z-30 bg-black"
            />
        </div>
    );
};

export default Hero;
