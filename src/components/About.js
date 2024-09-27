import React from "react"
import Card from 'react-bootstrap/Card';

export default function About() {
    return (
        <section id="about" style={{ padding: '20px'}}>
            <Card border="secondary">
            <   Card.Header>About Me</Card.Header>
                <Card.Body >
                    <blockquote className="blockquote mb-0">
                        <p>
                        This will be my about me section
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>
        </section>
    )
}