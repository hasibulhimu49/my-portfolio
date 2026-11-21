import { navLinks } from '../data'

export default function Header() {
  return (
    <header>
      <nav>
        <h2 className="logo">&gt;_hasib</h2>
        <ul>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
