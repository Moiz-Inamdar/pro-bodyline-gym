

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

import { useState } from "react";
import previewVideo from "../assets/gym.mp4";
import fullVideo from "../assets/gym.mp4";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="hero-box">

      {!showVideo ? (
        /* SLIDE 1 */
        <div className="slide slide-one">
          <p className="hero-text">
    Train smarter. Build strength. Achieve real results.<br />
    Designed for serious fitness and real transformation
  </p>
          <button className="hero-btn" onClick={() => setShowVideo(true)}>
            View Gym Tour
          </button>
        </div>
      ) : (
        /* SLIDE 2 */
        <div className="slide slide-two">
          <video
            src={fullVideo}
            controls
            autoPlay
            className="full-video"
          />
<br />
          <button className="back-btn" onClick={() => setShowVideo(false)}>
            Back
          </button>
        </div>
      )}

    </section>
  );
};

export default Hero;
