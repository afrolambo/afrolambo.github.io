import React from 'react'
import avatar from '../assets/img/avataaars.svg';
import { Jumbotron, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Masthead() {
    return (
        <Jumbotron className="masthead bg-primary text-white text-center">
            <Container className="container d-flex align-items-center flex-column">
                {/*Masthead Avatar Image*/}
                <img className="masthead-avatar mb-5" src={avatar} alt="" />
                {/* Masthead Heading */}
                <h1 className="masthead-heading text-uppercase mb-0">Stephen Galvan</h1>
                {/*Icon Divider*/}
                <Container className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="divider-custom-line"></div>
                </Container>
                {/*Masthead Subheading*/}
                <p className="masthead-subheading font-weight-light mb-0">Software Engineer</p>
            </Container>
        </Jumbotron>
    )
}
