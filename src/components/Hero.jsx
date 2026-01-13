

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

const Hero = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={gymVideo} type="video/mp4" />
      </video>

      <div className="hero-content">
        <a href="#about" className="hero-btn">
          Coming Soon
        </a>
      </div>
    </section>
  );
};

export default Hero;
