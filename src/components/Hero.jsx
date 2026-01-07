

// const Hero = () => {
//   return (
//     <section className="hero" id="home">
//       <video className="hero-video" autoPlay loop muted>
//         <source src={gymVideo} type="video/mp4" />
//       </video>

//       <div className="hero-content">
//         <h1></h1>
//         <p> <a href="#about" className="hero-btn">Coming soon...</a></p>
        
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { useRef, useEffect } from "react";
import gymVideo from "../assets/gym.mp4";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(err => {
        console.log("Autoplay prevented:", err);
      });
    }
  }, []);

  return (
    <section className="hero" id="home">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        
        playsInline
        preload="auto"
      >
        <source src={gymVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <a href="#about" className="hero-btn">
          Coming Soon...
        </a>
      </div>
    </section>
  );
};

export default Hero;
