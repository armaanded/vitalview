import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import vitalLogo from "./images/vitalview_logo.svg";
import introvideo from "./images/LogoStroke.mp4"

const IntroVideo = ({ onFinish }) => {
    const [videoDone, setVideoDone] = useState(false);
    const [playTransition, setPlayTransition] = useState(false);
    const videoRef = useRef(null);

    const handleEnded = () => {
        setPlayTransition(true);
        setTimeout(() => {
            setVideoDone(true);
            onFinish();
        }, 350); // Delay allows logo to scale down first
    };

    return (
        <>
            {!videoDone && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-screen bg-black z-50 flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: playTransition ? 0 : 1 }}
                    transition={{ duration: 1 }}
                >
                    {!playTransition ? (
                        <video
                            ref={videoRef}
                            src={introvideo}
                            autoPlay
                            muted
                            onEnded={handleEnded}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <motion.img
                            src={vitalLogo}
                            alt="VitalView"
                            className="w-32 h-32"
                            initial={{ scale: 4, opacity: 1 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 80, duration: 1 }}
                        />
                    )}
                </motion.div>
            )}
        </>
    );
};

export default IntroVideo;