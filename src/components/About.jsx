import { stats } from '../data'

export default function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        I am a Backend Developer specializing in Java and Spring Boot, focused on building
        scalable, maintainable, and high-performance web applications. I have worked on multiple
        real-world projects where I applied clean architecture principles, secure authentication
        using JWT, and well-structured RESTful API design.
        <br />
        <br />
        I am comfortable working with relational databases like PostgreSQL and MySQL, and I
        actively use Git for version control and collaboration in team environments. I regularly
        practice coding problems to strengthen my problem-solving ability and improve my logical
        thinking and development efficiency.
        <br />
        <br />
        Also learning new technologies and applying them to real-world problems. My goal is to grow
        as a backend engineer while contributing to impactful software systems.
      </p>
      <div className="aboutcart">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <h2>{value}</h2>
            <h3>{label}</h3>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => { window.location.hash = '#contact' }}>
        Get in Touch
      </button>
    </section>
  )
}
