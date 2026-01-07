

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

import { useEffect, useState } from "react";
import gymVideo from "../assets/gym.mp4";

const Hero = () => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="hero"
      style={{ height: `${height}px`, position: "relative", overflow: "hidden" }}
    >
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={gymVideo} type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1></h1>
        <a href="#about" className="hero-btn">
          Coming Soon
        </a>
      </div>
    </section>
  );
};

export default Hero;
