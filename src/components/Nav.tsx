/** Fixed top navigation with the stacked SMART | SCALE / a | i logo. */
export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        <div className="nl-top">
          <span className="nl-w">SMART</span>
          <div className="nl-vl" />
          <span className="nl-w">SCALE</span>
        </div>
        <div className="nl-hl" />
        <div className="nl-bot">
          <span className="nl-a">a</span>
          <div className="nl-vl" style={{ height: 20 }} />
          <span className="nl-i">i</span>
        </div>
      </div>
      <div className="nav-links">
        <a href="#product">Product</a>
        <a href="#how">How it works</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="nav-cta">
        Book a demo →
      </a>
    </nav>
  );
}
