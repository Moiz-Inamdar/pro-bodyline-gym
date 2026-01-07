

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

import { MdPadding } from "react-icons/md";
import gymVideo from "../assets/gym.mp4";

const Hero = () => {
  return (
    <section className="hero" id="home">
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
        <h1></h1><br />
        <a href="#about" className="hero-btn" >
          Coming Soon...
        </a>
      </div>
    </section>
  );
};

export default Hero;
