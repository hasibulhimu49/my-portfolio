import { profile, socials } from '../../data'
import { ExternalLink, SocialIcons } from '../ui'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-media">
        {/* Above the fold, so no lazy loading; width/height reserve space before the photo arrives */}
        <img
          src={profile.banner}
          alt={`${profile.firstName} ${profile.lastName}`}
          width="2048"
          height="768"
          fetchPriority="high"
        />
        <p className="hero-script" aria-hidden="true">
          Build
          <br />
          Learn
          <br />
          Create
          <br />
          Impact
        </p>
      </div>

      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-hello">Hello, I&apos;m</p>
          <h1 className="hero-name">
            {profile.firstName} <span className="gradient-text">{profile.lastName}</span>
          </h1>
          <p className="hero-roles">
            {profile.roles.map((role, i) => (
              <span key={role}>
                {i > 0 && (
                  <span className="divider" aria-hidden="true">
                    |
                  </span>
                )}
                {role}
              </span>
            ))}
          </p>

          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-buttons">
            <a href="#work" className="btn btn-primary">
              Explore My Work <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
            <ExternalLink href={profile.youtubeUrl} className="btn btn-outline">
              <i className="fa-brands fa-youtube" aria-hidden="true"></i> Watch My YouTube
            </ExternalLink>
          </div>

          <div className="hero-connect">
            <SocialIcons items={socials} className="hero-socials" />
            <a href="#contact" className="hero-connect-link">
              Let&apos;s Connect!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
