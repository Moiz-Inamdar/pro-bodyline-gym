import { FaDumbbell, FaRunning, FaUserCheck, FaClock } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h2>About Us</h2>
     

      <div className="about-features">
        <div>
          <FaUserCheck size={40} color="red" />
          <h4>Certified Trainers</h4>
          <p>Expert trainers to guide your fitness journey safely and effectively.</p>
        </div>
        <div>
          <FaDumbbell size={40} color="red" />
          <h4>Modern Equipment</h4>
          <p>State-of-the-art machines for cardio, strength, and functional training.</p>
        </div>
        <div>
          <FaRunning size={40} color="red" />
          <h4>Personalized Programs</h4>
          <p>Custom workout plans tailored to your goals and lifestyle.</p>
        </div>
        <div>
          <FaClock size={40} color="red" />
          <h4>Flexible Timings</h4>
          <p>Gym open 24/7 to fit your schedule.</p>
        </div>
        
      </div>
      <br /><br />
       <p>
        PRO BODYLINE GYM is a premium fitness center focused on strength,
        endurance, and complete body transformation with certified trainers.
      </p>
    </section>
  );
};

export default About;
