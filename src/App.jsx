import "./App.css";

function App() {
  return (
    <>
      <div className="container-1">
        <header>
          Ahmad Faris
          <ul className="secondary-text">
            <li>
              <a href="#first-section">About me</a>
            </li>
            <li>
              <a href="#second-section">Featured</a>
            </li>
            <li>
              <a href="https://github.com/ahmadfariszk">github/ahmadfariszk</a>
            </li>
          </ul>
        </header>
        <div id="first-section">
          <div className="text">
            <h1>Ahmad Faris</h1>
            <p className="secondary-text">
              Electrical & Electronics Engineer transitioning to software
              engineering, specializing in web development. Leveraging embedded
              systems expertise and self-study to contribute technical skills
              and problem-solving abilities to a dynamic team as an Associate
              Junior Software Developer.
            </p>
            {/* <div className="btn-container">
              <button>Sign up</button>
            </div> */}
          </div>
          {/* <img src="./images/Eren.webp" alt="No, I don't want that!"></img> */}
        </div>
      </div>
      <div className="container-2">
        <h2>Web Dev Projects</h2>
        <div id="second-section">
          <ul>
            <div className="card">
              <button className="movieButton" onClick={() => window.open("https://ahmadfariszk.github.io/Movie-Search/", "_blank")}></button>
              <li>
                <h3>Movie-Search</h3> Explore an extensive database of movies
                and TV shows through our user-friendly search app
              </li>
            </div>
            <div className="card">
              <button className="cvButton" onClick={() => window.open("https://ahmadfariszk.github.io/CV-Form/", "_blank")}></button>
              <li>
                <h3>CV-Form</h3>Create professional resumes effortlessly by
                inputting your work experience, education, and contact details,
                then generate a formatted curriculum vitae ready for submission.
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="container-3">
        <div id="third-section">
          <div className="quote">
            An Electrical and Electronics Engineering graduate, currently
            working as an Embedded engineer with a specialization in Computer
            Engineering seeking to transition into the realm of software
            engineering, particularly in web development. Proficient in embedded
            systems design and implementation, now leveraging self-study and
            side projects to expand expertise in modern software development
            technologies and methodologies. Eager to contribute technical
            skills, problem-solving abilities, and a strong foundation in
            engineering principles to a dynamic team as an Associate Junior
            Software Developer.
          </div>
          {/* <div className="quotee">-Eren Jaeger, The Just an Idiot</div> */}
        </div>
      </div>
      {/* <div className="container-4">
        <div id="fourth-section">
          <div className="blue-card">
            <div className="blue-card-sub">
              <div className="call-action">
                <b>Call to action! It time!</b>
                <p>
                  Sign up for our product by clicking that button over there!
                </p>
              </div>
              <div className="btn-container">
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <footer>
        <div className="copyright">Web dev rocks</div>
      </footer>
    </>
  );
}

export default App;
