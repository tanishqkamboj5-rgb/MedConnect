import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr. Tanishq Kamboj",
    speciality: "Cardiologist",
    rating: "4.9"
  },
  {
    name: "Dr. Shorya Singla",
    speciality: "Dermatologist",
    rating: "4.4"
  },
  {
    name: "Dr. Mohit Thakur",
    speciality: "Neurologist",
    rating: "4.2"
  },
  {
    name: "Dr. Gurarpan Singh",
    speciality: "Dentist",
    rating: "4.5"
  }
];


function DoctorCard({ name, speciality, rating }) {
  return (
    <div className="doctor-card">

      <div className="doctor-avatar">
        +
      </div>

      <h3>{name}</h3>

      <p>{speciality}</p>

      <div className="rating">
        ★ {rating}
      </div>

      <Link
        to="/appointment"
        className="doctor-btn"
      >
        Book Appointment
      </Link>

    </div>
  );
}


function Doctors() {
  return (
    <section className="page-section">

      <div className="section-heading">

        <p>OUR SPECIALISTS</p>

        <h1>
          Meet Our Doctors
        </h1>

        <span>
          Experienced professionals ready to care for you.
        </span>

      </div>


      <div className="doctors-container">

        {doctors.map((doctor) => (

          <DoctorCard
            key={doctor.name}
            name={doctor.name}
            speciality={doctor.speciality}
            rating={doctor.rating}
          />

        ))}

      </div>

    </section>
  );
}

export default Doctors;