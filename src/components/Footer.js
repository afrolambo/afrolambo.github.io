import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons' 

export default function Footer() {
    return (
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    {/* <!-- Footer Location--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            Brooklyn, New York
                            <br />
                            
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/afrolambo"><i class="fab fa-fw fa-github"><FontAwesomeIcon icon={faGithub} /></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://twitter.com/afrolambo"><i class="fab fa-fw fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/stephen-galvan-3288a416b/"><i class="fab fa-fw fa-linkedin-in"><FontAwesomeIcon icon={faLinkedin} /></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/neverl8thanbetter/"><i class="fab fa-fw fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i></a>
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">About Freelancer</h4>
                        <p class="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
