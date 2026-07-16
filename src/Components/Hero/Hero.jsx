import profile from "../assets/Me.jpeg"

function Hero() {
  return (
    <section className="hero">
      <div className="left">
        <p>Front-End Developer | Ready For Work</p>
        <h1>Basanta Duwal</h1>
        <p>I’m a BSc IT student with knowledge of HTML, CSS, and basic React. I build modern, responsive websites using React and clean UI design.
          Passionate about creating user-friendly digital experiences.</p>
          <buttons className="buttons">
          <button className="download">⏬ Download CV</button>
          <button className="learn">Learn More</button>
          </buttons>
      </div>
      <div className="right">
        <img src={profile} alt="Profile Picture" />
      </div>
    </section>
  );
}

export default Hero;