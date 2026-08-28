import { useState } from "react";

function Appointment() {

  const [name, setName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const [booked, setBooked] = useState(false);


  function handleBooking(event) {

    event.preventDefault();

    if (name === "" || doctor === "" || date === "") {
      return;
    }

    setBooked(true);
  }


  return (
    <section className="appointment-section">

      <div className="appointment-box">

        <div className="section-heading">

          <p>BOOK YOUR VISIT</p>

          <h1>
            Book an Appointment
          </h1>

          <span>
            Choose your doctor and preferred date.
          </span>

        </div>


        {!booked ? (

          <form onSubmit={handleBooking}>

            <label>
              Your Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Enter your name"
            />


            <label>
              Select Doctor
            </label>

            <select
              value={doctor}
              onChange={(event) =>
                setDoctor(event.target.value)
              }
            >

              <option value="">
                Choose a doctor
              </option>

              <option value="Dr. Tanishq Kamboj">
                Dr. Tanishq Kamboj - Cardiologist
              </option>

              <option value="Dr. Shorya Singla">
                Dr. Shorya Singla - Dermatologist
              </option>

              <option value="Dr. Mohit Thakur">
                Dr. Mohit Thakur - Neurologist
              </option>

              <option value="Dr. Gurarpan Singh">
                Dr. Gurarpan Singh - Psychiatrist              
                </option>

            </select>


            <label>
              Appointment Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(event) =>
                setDate(event.target.value)
              }
            />


            <button
              type="submit"
              className="appointment-btn"
            >
              Book Appointment
            </button>

          </form>

        ) : (

          <div className="success-message">

            <div className="success-icon">
              ✓
            </div>

            <h2>
              Appointment Confirmed!
            </h2>

            <p>
              Your appointment with {doctor} has been
              requested successfully.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}

export default Appointment;