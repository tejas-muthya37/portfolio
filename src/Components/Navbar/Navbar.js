import "./navbar.css";

function Navbar() {
  return (
    <section className="navbar standard-padding-x standard-padding-y">
      <div className="nav-logo">
        <p>Tejas Muthya</p>
        <p>Full Stack Engineer</p>
      </div>
      <ul className="nav-items">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:tejas.muthya37@gmail.com"
          >
            <button>Email</button>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/tejas-muthya/"
          >
            <button>LinkedIn</button>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/tejas-muthya37"
          >
            <button>GitHub</button>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
