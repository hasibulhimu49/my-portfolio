import { services, skills } from '../data'
import { Reveal } from './ui'

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

        <div className="service-cards">
          {services.map(({ title, icon, color, text }) => (
            <article key={title} className="service-card">
              <span className={`icon-badge badge-${color}`}>
                <i className={icon}></i>
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <aside className="skills-card">
          <h3>My Skills</h3>
          <ul className="chips">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </aside>
      </Reveal>
    </section>
  )
}
