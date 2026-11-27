import { services, skills } from '../../data'
import { Reveal } from '../ui'
import './WhatIDo.css'

export default function WhatIDo() {
  return (
    <section id="work" className="section section-dark">
      <Reveal className="container whatido-grid">
        <div className="whatido-header">
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            I&apos;m focused on four key areas — building, teaching, creating, and growing communities.
          </p>
        </div>

        <ul className="service-cards">
          {services.map(({ title, icon, color, text }) => (
            <li key={title} className="service-card">
              <span className={`icon-badge badge-${color}`}>
                <i className={icon} aria-hidden="true"></i>
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>

        <aside className="skills-card">
          <h3>My Skills</h3>
          <ul className="chips">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </aside>
      </Reveal>
    </section>
  )
}
