import React from 'react'

export default function ContentHero() {
  return (
    <section className="hero" id="hero">
        <aside className="social-links">
            <p>GitHub</p><a href="https://github.com/jsen07?tab=repositories" target="_blank"><img src="assets/icone-github-grise.png" alt="github-logo-icon"/></a>
            <a href="https://uk.linkedin.com/" target="_blank"><img src="assets/PngItem_494342.png" alt="linkedin-logo-icon"/></a><p>LinkedIn</p> 
                
        </aside>
        
        <div className="hero-container">
            <figure className="avatar"></figure>  

            <figcaption className="hero-caption"> 
                <h1> Hello, I'm Jayssen.</h1>  
                <h1 id="sub-heading"> (future) Full Stack Developer </h1>

            <h2> Lorem ipsum dolor sit amet. Qui sunt molestiae est dolor blanditiis qui quod provident cum ullam aperiam et provident voluptas? Rem atque galisum sed repellendus labore non error esse et labore magni eum voluptatem eveniet? Vel maiores deserunt quo blanditiis quam et similique quaerat ea obcaecati labore. Ab esse quas qui molestiae pariatur aut exercitationem officia </h2>

            <div className="button">
                <a href="#contact"> Contact me </a>  
            </div>
        </figcaption>
    </div>


    </section>
  )
}
