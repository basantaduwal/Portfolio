function About() {
  const skills = [{ name: "HTML", level: 90 }];

  return (
    <section className="about">
      <div className="skills-grid">
        <h4>TECHNICAL SKILLS</h4>
        {skills.map((s) => (
          <div className="skill-row">

          </div>
        ))}
      </div>
      <div className="about-grid">
        <h2>
          About <span>Me</span>{" "}
        </h2>
        <p>
          I'm <span>Basanta Duwal</span>, a BSc IT student based in Nepal with a
          deep passion for crafting modern, responsive web experiences.
        </p>
        <p>
          My toolkit includes HTML, CSS, JavaScript, and React — technologies I
          use to turn ideas into clean, user-friendly digital products. I care
          deeply about UI design and believe great design should feel invisible.
        </p>
        <p>
          Currently available for freelance work and open to exciting
          opportunities where I can grow, collaborate, and build things that
          matter.
        </p>
      </div>
    </section>
  );
}

export default About;
