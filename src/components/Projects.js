import Carousel from 'react-bootstrap/Carousel';
import TestImage from './images/TestImage.png';
import TestImage2 from './images/TestImage2.png';

export default function Projects() {
    return (
        <section>
            <div style={{ padding: '10px 0'}}>
                <Carousel>
                    <Carousel.Item>
                        <img src={TestImage} alt="test" />
                        <Carousel.Caption>
                            <h3>la la la</h3>
                            <p>blah blah blaaaaah</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={TestImage2} alt="test" />
                        <Carousel.Caption>
                            <h3>la la la</h3>
                            <p>blah blah blaaaaah</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}