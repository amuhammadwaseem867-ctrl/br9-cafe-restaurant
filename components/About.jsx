import "./About.css";

export default function About() {
  return (
    <section className="br9-about" id="about">
      <div className="br9-about-container">

        {/* INTRO */}

        <div className="br9-about-intro">

          <div className="br9-about-intro-label">
            <span>01</span>
            <p>ABOUT BR 9</p>
          </div>

          <div className="br9-about-intro-content">
            <h2>
              Food tastes
              <br />
              better <em>together.</em>
            </h2>

            <p>
              BR 9 Cafe & Restaurant is a place to eat,
              relax and spend time with the people who
              matter.
            </p>
          </div>

        </div>


        {/* STORY */}

        <div className="br9-about-story">

          <div className="br9-about-story-image">
            <div className="br9-about-image-overlay">
              <span>BR 9</span>
              <p>CAFE & RESTAURANT</p>
            </div>
          </div>


          <div className="br9-about-story-content">

            <span className="br9-section-label">
              OUR STORY
            </span>

            <h3>
              A place for
              <br />
              <em>good moments.</em>
            </h3>

            <p>
              Located in Bahria Town, BR 9 brings together
              food, atmosphere and people in one relaxed
              dining experience.
            </p>

            <p>
              Whether it is a casual meal with friends,
              family time, an evening out or simply a break
              from the usual routine, BR 9 is made to feel
              comfortable from the moment you arrive.
            </p>

            <p>
              And when the evening calls for something
              different, the rooftop gives you an open,
              relaxed setting to enjoy your food and stay
              a little longer.
            </p>

          </div>

        </div>


        {/* EXPERIENCE */}

        <div className="br9-about-experience">

          <div className="br9-about-experience-heading">

            <span className="br9-section-label">
              THE EXPERIENCE
            </span>

            <h3>
              Come for the food.
              <br />
              <em>Stay for the vibe.</em>
            </h3>

          </div>


          <div className="br9-about-features">

            <article className="br9-about-feature">

              <span>01</span>

              <h4>Rooftop</h4>

              <p>
                An open rooftop setting for relaxed
                meals, conversations and evenings.
              </p>

            </article>


            <article className="br9-about-feature">

              <span>02</span>

              <h4>Good Food</h4>

              <p>
                A varied menu made for quick bites,
                proper meals and sharing with friends.
              </p>

            </article>


            <article className="br9-about-feature">

              <span>03</span>

              <h4>Good Company</h4>

              <p>
                A welcoming space for families,
                friends and everyday gatherings.
              </p>

            </article>


            <article className="br9-about-feature">

              <span>04</span>

              <h4>Your Table</h4>

              <p>
                Come in, sit back, order your favourites
                and make the moment yours.
              </p>

            </article>

          </div>

        </div>


        {/* FINAL STATEMENT */}

        <div className="br9-about-bottom">

          <div>
            <span>BR 9 / BAHRIA TOWN</span>
          </div>

          <h3>
            Good food.
            <br />
            <em>Good company.</em>
            <br />
            Good times.
          </h3>

          <a href="#menu">
            <span>Explore Menu</span>
            <strong>↗</strong>
          </a>

        </div>

      </div>
    </section>
  );
}