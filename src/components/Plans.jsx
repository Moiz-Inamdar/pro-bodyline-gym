const Plans = () => {
  return (
    <section id="plans">
      <h2>Membership Plans</h2>
      <div className="plan-cards">

        <div className="plan-card">
          <h3>Monthly</h3>
          <p className="price">₹1500</p>
          <ul>
            <li>Unlimited Gym Access</li>
            <li>1 Personal Training Session</li>
            <li>Access to Group Classes</li>
          </ul>
          <a href="#contact" className="plan-btn">Join Now</a>
        </div>

        <div className="plan-card">
          <h3>Quarterly</h3>
          <p className="price">₹4000</p>
          <ul>
            <li>Unlimited Gym Access</li>
            <li>3 Personal Training Sessions</li>
            <li>Access to Group Classes</li>
            <li>Nutrition Plan</li>
          </ul>
          <a href="#contact" className="plan-btn">Join Now</a>
        </div>

        <div className="plan-card">
          <h3>Yearly</h3>
          <p className="price">₹15000</p>
          <ul>
            <li>Unlimited Gym Access</li>
            <li>12 Personal Training Sessions</li>
            <li>Access to Group Classes</li>
            <li>Nutrition & Workout Plan</li>
            <li>Priority Support</li>
          </ul>
          <a href="#contact" className="plan-btn">Join Now</a>
        </div>

      </div>
    </section>
  );
};

export default Plans;
