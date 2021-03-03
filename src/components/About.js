import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function About() {
    return (
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                {/* <!-- About Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div class="row">
                    <div class="text-center"><p class="lead">Full Stack Web Developer with a background in Education Technology and Performing Arts Management. Project-oriented, with analytical, and creative skills, with experience in the following technologies: React.JS, JavaScript, CSS, Sass, HTML5, Ruby, Ruby on Rails, Github, JWT Authentication, PostgreSQL. Skillful in strategic and tactical planning with a test and performance oriented approach to project solutions, critical thinking, and design. Proven high-value performance record in community initiatives and projects. Recognized for outstanding leadership, flexibility and customer service skills.</p></div>
                </div>
                {/* <!-- About Section Button--> */}
                <div id="like_button_container" class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light" href="">
                        <i class="fas fa-download mr-2"></i>
                        Learn more? 
                    </a>
                </div>
            </div>
        </section>
    )
}
