import { useState } from "react";
import IntroVideo from "./components/IntroVideo";
import Hero from "./components/Hero";

function App() {
    const [videoEnded, setVideoEnded] = useState(false);

    return (
        <>
        <div className="overflow-hidden">
            <IntroVideo onFinish={() => setVideoEnded(true)} />
            {videoEnded && <Hero />}
        </div>
        </>
    );
}

export default App;