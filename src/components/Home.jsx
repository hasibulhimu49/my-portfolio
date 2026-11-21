import { RESUME_URL } from '../data'
import useInView from '../hooks/useInView'

export default function Home() {
  // Same effect as the old script.js: add "animate-in" to the h1 once it is visible.
  const [titleRef, titleVisible] = useInView()

  return (
    <section id="home">
      <div className="homealldetails">
        <div className="homedetails">
          <h1 ref={titleRef} className={titleVisible ? 'animate-in' : undefined}>
            Mohammad Hasibul Hasan
          </h1>
          <h3>Backend Developer</h3>
          <p>
            Backend Developer with a strong focus on Java and Spring Boot, experienced in designing
            and developing scalable, secure, and high-performance web applications. Proficient in
            clean architecture, RESTful APIs, and authentication/authorization systems. Driven by a
            passion for solving real-world problems and continuously enhancing skills through
            hands-on development.
          </p>
          <div className="homebutton">
            <a href="#project" id="btn1">View my work</a>
            <a href={RESUME_URL} id="btn2">Download Resume</a>
          </div>
        </div>

        <div className="homeimage">
          <img src="/assets/images/profile.jpg" alt="MHH" height="100" />

          <div className="homeicon">
            <a href="https://www.github.com/hasibulhimu49" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/hasibulhimu49" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://wa.me/8801302824849" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
