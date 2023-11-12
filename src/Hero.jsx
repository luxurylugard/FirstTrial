import heroImage from "./imgs/hero-banner.png";

export default function Hero() {
  return (
    <>
      <section class="hero" id="home">
        <div class="hero-container">
          <div class="hero-content">
            <p class="hero-subtitle">We Are Product Designer From NG</p>

            <h2 class="h2 hero-title">
              We <span className="title-highlight">Design</span> Interfaces That
              Users <span className="title-highlight">Love</span>
            </h2>

            <p class="hero-text">
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus.
            </p>

            <button class="btn">Learn More</button>
          </div>

          <figure class="hero-banner">
            <img
              src={heroImage}
              width="694"
              height="529"
              loading="lazy"
              alt="hero-banner"
              class="w-100 banner-animation"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
