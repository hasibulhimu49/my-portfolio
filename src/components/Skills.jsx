import { skillCategories, softSkills } from '../data'
import useInView from '../hooks/useInView'

export default function Skills() {
  // Replaces the progress-bar IntersectionObserver in the old script.js (30% visible, once).
  const [ref, visible] = useInView({ threshold: 0.3 })

  return (
    <section id="skills" ref={ref}>
      <div className="skills-container">
        <div className="skills-header">
          <h2>Technology Stack</h2>
          <p>Tools &amp; technologies I master to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map(({ icon, title, skills }) => (
            <div className="skill-category" key={title}>
              <div className="category-icon">
                <i className={`fa-solid ${icon}`}></i>
              </div>
              <h3>{title}</h3>
              <div className="skills-list">
                {skills.map(([name, percent]) => (
                  <div className="skill-item" key={name}>
                    <div className="skill-info">
                      <span className="skill-name">{name}</span>
                      <span className="skill-percent">{percent}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={visible ? { width: `${percent}%` } : undefined}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills">
          <div className="soft-skills-header">
            <i className="fa-solid fa-hand-peace"></i>
            <h3>Beyond Code</h3>
          </div>
          <div className="soft-skills-grid">
            {softSkills.map(({ icon, label }) => (
              <div className="soft-skill-card" key={label}>
                <i className={`fa-solid ${icon}`}></i>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
