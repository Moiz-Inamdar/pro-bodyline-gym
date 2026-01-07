

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
import gymVideo from "../assets/gym.mp4";
import { useEffect, useState } from "react";

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
      id="home"
      style={{ height: `${height}px` }}
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
        <h1>NSP Gym</h1>
        <a href="#about" className="hero-btn">
          Coming Soon
        </a>
      </div>
    </section>
  );
};

export default Hero;
