import Navbar from './navbar';
import Footer from './footer';
import Characters from './characters';
import Game from './game';
import React, { useEffect } from 'react';

const LandingPage = () => {
    useEffect(() => {
        const preventZoom = (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        };

        document.addEventListener('wheel', preventZoom, { passive: false });

        return () => {
            document.removeEventListener('wheel', preventZoom);
        };
    }, []);
    return (
        <div id="" style={{ userScalable: 'no' }} class="w-full flex-row h-max bg-white ">
            {/* Navbar */}
            <header id="header" class="absolute inset-x-0 top-0 z-50">
                <Navbar />
            </header>
            {/* Main Content */}
            <section id="landingPage" class="bg-white w-full">
                <div class="container flex h-max">
                    <div class="w-full relative top-0  m-auto">
                        <audio autoPlay={true} loop={true} preload={false} className="w-full">
                            <source
                                src="https://drive.google.com/uc?export=download&id=1FC52tF0JXBsSwCqPJc0Uf2Xvgb9OArOw"
                                type="audio/wav"
                            />
                        </audio>
                        <video
                            class="w-full h-full object-cover" autoPlay muted loop playsInline>
                            <source
                                src="https://drive.google.com/uc?export=download&id=1sNh1l6mDAAsG2F-BKBJwDOtqANr5ufAy"
                                type="video/mp4"
                            />
                        </video>
                        <div class="absolute top-0 mt-36 m-auto w-full h-full flex flex-col items-center justify-center">
                            <div class="absolute top-0 m-auto w-full h-full flex flex-col items-center justify-center">
                                <button class="flex items-center justify-center">
                                    <img class="animate-spin-slow grayscale absolute" src="https://drive.google.com/uc?export=view&id=1fiueiJ3QMjF_V8ySzW5qAF-XP7ARo6h7"></img>
                                    <img
                                        src="https://drive.google.com/uc?export=view&id=1Jjfa2F4vnZo0XMCtok-gpR-eFsAMvbwF"
                                        class="w-24 h-24 opacity-70"
                                        alt="Play Icon"
                                    />
                                </button>
                                <br></br>
                                <img
                                    src="https://drive.google.com/uc?export=view&id=18KtuitIcNHV0uJeNO-U54QUGBmLKqaYf"
                                    class="w-1/3 h-auto"
                                    alt="Nier Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gamepage" class="bg-white w-full h-max">
                <Game />
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default LandingPage;
