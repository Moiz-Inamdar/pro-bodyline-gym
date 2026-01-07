// const Services = () => {
//   return (
//     <section id="services">
//       <h2>Our Programs</h2>
//       <div className="service-list">
//         <div>Weight Training</div>
//         <div>Cardio Training</div>
//         <div>Personal Training</div>
//         <div>CrossFit</div>
//         <div>Fat Loss</div>
//         <div>Muscle Gain</div>
//       </div>
//     </section>
//   );
// };

// export default Services;





import { FaDumbbell, FaRunning, FaUserAlt, FaFire, FaWeight, FaHeartbeat } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h2>Our Programs</h2>
      <div className="service-list">
        <div>
          <FaDumbbell size={40} color="red" />
          <h4>Weight Training</h4>
          <p>Build strength and tone muscles with our guided weight sessions.</p>
        </div>
        <div>
          <FaRunning size={40} color="red" />
          <h4>Cardio Training</h4>
          <p>Improve endurance and stamina with high-intensity cardio workouts.</p>
        </div>
        <div>
          <FaUserAlt size={40} color="red" />
          <h4>Personal Training</h4>
          <p>Get customized workouts tailored to your fitness goals.</p>
        </div>
        <div>
          <FaFire size={40} color="red" />
          <h4>CrossFit</h4>
          <p>High-energy functional training for strength, speed, and agility.</p>
        </div>
        <div>
          <FaWeight size={40} color="red" />
          <h4>Fat Loss</h4>
          <p>Targeted programs to burn fat and achieve a leaner body.</p>
        </div>
        <div>
          <FaHeartbeat size={40} color="red" />
          <h4>Muscle Gain</h4>
          <p>Structured routines to maximize muscle growth and recovery.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
