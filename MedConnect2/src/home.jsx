import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO SECTION */}

      <section className="home-hero">

        <div className="home-content">

          <p className="hero-tag">
            SMARTER HEALTHCARE, BETTER CONNECTIONS
          </p>

          <h1>
            Your Health,
            <br />
            <span>Connected.</span>
          </h1>

          <p className="hero-description">
            Find trusted doctors, manage appointments and
            discover simple ways to take better care of your health.
          </p>

          <div className="hero-buttons">

            <Link
              to="/doctors"
              className="primary-btn"
            >
              Find a Doctor
            </Link>

            <Link
              to="/appointment"
              className="secondary-btn"
            >
              Book Appointment
            </Link>

          </div>

        </div>


        {/* RIGHT CARD */}

        <div className="home-card">

          <p>QUICK APPOINTMENT</p>

          <h2>
            Find the right care
          </h2>

          <div className="quick-option">

            <span>+</span>

            <div>
              <strong>Specialist Doctors</strong>
              <small>Experienced professionals</small>
            </div>

          </div>


          <div className="quick-option">

            <span>✓</span>

            <div>
              <strong>Easy Booking</strong>
              <small>Simple appointment process</small>
            </div>

          </div>


          <div className="quick-option">

            <span>♥</span>

            <div>
              <strong>Healthy Living</strong>
              <small>Simple nutrition guidance</small>
            </div>

          </div>

        </div>

      </section>


      {/* WHY MEDCONNECT */}

      <section className="why-section">

        <div className="section-heading">

          <p>WHY MEDCONNECT</p>

          <h2>
            Healthcare Made Simpler
          </h2>

          <span>
            Everything you need for a simple and connected
            healthcare experience.
          </span>

        </div>


        <div className="feature-container">

          <div className="feature-card">

            <div className="feature-icon">
              +
            </div>

            <h3>
              Find Doctors
            </h3>

            <p>
              Connect with doctors and specialists
              for your healthcare needs.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ✓
            </div>

            <h3>
              Easy Appointments
            </h3>

            <p>
              Book appointments through a simple
              and easy-to-use form.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ♥
            </div>

            <h3>
              Healthy Living
            </h3>

            <p>
              Discover simple nutrition and
              healthy lifestyle information.
            </p>

          </div>

        </div>

      </section>


      {/* ABOUT MEDCONNECT */}

      <section className="about-medconnect">

        <div className="about-heading">

          <p>
            ABOUT MEDCONNECT
          </p>

          <h2>
            Healthcare, Connected for You
          </h2>

          <span>
            MedConnect brings essential healthcare services
            together in one simple platform.
          </span>

        </div>


        <div className="about-cards">

          <div className="about-box">

            <div className="about-box-icon">
              +
            </div>

            <h3>
              Trusted Doctors
            </h3>

            <p>
              Find experienced doctors and specialists
              for your healthcare needs.
            </p>

          </div>


          <div className="about-box">

            <div className="about-box-icon">
              ✓
            </div>

            <h3>
              Easy Experience
            </h3>

            <p>
              Find doctors and manage appointments
              through a simple interface.
            </p>

          </div>


          <div className="about-box">

            <div className="about-box-icon">
              ♥
            </div>

            <h3>
              Patient Focused
            </h3>

            <p>
              Designed to make your healthcare journey
              simple and convenient.
            </p>

          </div>

        </div>

      </section>


      {/* BOTTOM MESSAGE */}

      <section className="home-message">

        <h2>
          Your health deserves better connections.
        </h2>

        <p>
          Find doctors, book appointments and take
          better care of yourself with MedConnect.
        </p>

        <Link
          to="/doctors"
          className="primary-btn"
        >
          Explore Doctors
        </Link>

      </section>

    </>
  );
}

export default Home;