const nutritionTips = [
  {
    icon: "🥗",
    title: "Balanced Diet",
    text: "Include a variety of vegetables, fruits, whole grains and protein-rich foods in your daily meals."
  },
  {
    icon: "💧",
    title: "Stay Hydrated",
    text: "Drink water regularly throughout the day and make hydration a part of your daily routine."
  },
  {
    icon: "🍎",
    title: "Choose Fresh Foods",
    text: "Prefer fresh and nutritious food options and include different food groups in your meals."
  },
  {
    icon: "🥛",
    title: "Healthy Portions",
    text: "Pay attention to portion sizes and try to maintain a balanced amount of different foods."
  }
];


function NutritionCard({ icon, title, text }) {
  return (
    <div className="nutrition-card">

      <div className="nutrition-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}


function Nutrition() {
  return (
    <section className="nutrition-page">

      {/* INTRO */}

      <div className="nutrition-intro">

        <p className="section-tag">
          HEALTHY LIVING
        </p>

        <h1>
          Eat Better.
          <br />
          <span>Live Better.</span>
        </h1>

        <p className="nutrition-description">
          Good nutrition is an important part of a healthy
          lifestyle. Discover simple habits that can help
          you make better everyday food choices.
        </p>

      </div>


      {/* TIPS */}

      <div className="nutrition-tips">

        {nutritionTips.map((tip) => (
          <NutritionCard
            key={tip.title}
            icon={tip.icon}
            title={tip.title}
            text={tip.text}
          />
        ))}

      </div>


      {/* DAILY HABITS */}

      <div className="daily-section">

        <div className="daily-heading">

          <p className="section-tag">
            SIMPLE HABITS
          </p>

          <h2>
            Build Healthier Habits
          </h2>

        </div>


        <div className="habits-container">

          <div className="habit">

            <span>01</span>

            <div>
              <h3>Start With Breakfast</h3>
              <p>
                Begin your day with a nutritious and
                balanced meal.
              </p>
            </div>

          </div>


          <div className="habit">

            <span>02</span>

            <div>
              <h3>Drink More Water</h3>
              <p>
                Keep water nearby and stay hydrated
                throughout the day.
              </p>
            </div>

          </div>


          <div className="habit">

            <span>03</span>

            <div>
              <h3>Add More Variety</h3>
              <p>
                Include different fruits, vegetables
                and nutritious foods in your meals.
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM MESSAGE */}

      <div className="nutrition-message">

        <div>
          <p className="section-tag">
            MEDCONNECT
          </p>

          <h2>
            Small choices can make
            a big difference.
          </h2>

          <p>
            Focus on simple, consistent habits rather
            than trying to change everything at once.
          </p>
        </div>

      </div>

    </section>
  );
}


export default Nutrition;