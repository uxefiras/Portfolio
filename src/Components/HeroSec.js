function HeroSection() {
  return (
    <section className="hero-section">
      <div className="tittle">
        <div className="text-on">
          <h3>
            Welcome to <span>Firas M. Faraj</span>
          </h3>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </div>
        <button className="clicker">Contact</button>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1643858040028-44457eb60163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Guy"
        />
      </div>
    </section>
  );
}
export default HeroSection;
