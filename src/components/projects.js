import React from 'react'

export default function Projects() {
  return (

    <section className="project" id="projects">
        <h1> Projects </h1>
    
        <section className="project-container">   
            <figure className="project-1">
                <h2>Horiseon</h2>
                <a href="https://jsen07.github.io/CodingBootcamp-Week1-Assignment1/" target="_blank">
                <span className="link"></span></a> 
            </figure>
            
            <div className="sub-container">
                <figure className="project-2">
                <h2> Meal Plan </h2>
                <a href="https://abstynent.github.io/project1-meal-plan-app/" target="_blank">
                <span className="link"></span></a> 
            </figure>

            <figure className="project-3">
                <h2> Project 3 </h2>
                <a href="https://readsky.herokuapp.com/" target="_blank">
                    <span className="link"></span></a> 
            </figure>
        </div>
            
        <div className="sub-container-2">
            <figure className="project-4">
                <h2> Project 4 </h2>
            </figure>
            
            <figure className="project-5">
                <h2> Project 5 </h2>                        
            </figure>
        </div>
    </section>
</section>

  )
}
