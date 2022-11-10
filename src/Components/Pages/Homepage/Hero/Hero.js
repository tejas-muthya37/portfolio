import "./hero.css";

function Hero() {
  return (
    <section className="hero-section standard-padding-x">
      <div className="hero-description">
        <p>
          Hey there, my name is Tejas. I am a Full Stack Engineer based in
          <span className="saffron"> In</span>d<span className="green">ia</span>
          .
        </p>
      </div>

      <div className="hero-image">
        <img src={process.env.PUBLIC_URL + "/media/hero.png"} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
