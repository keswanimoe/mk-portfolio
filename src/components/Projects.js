import Carousel from 'react-bootstrap/Carousel';
import Inavders1 from './images/makers-invaders1.png';
import Inavders2 from './images/makers-invaders2.png';
import Neuro1 from './images/ng1.png';
import Neuro2 from './images/ng2.png';
import Neuro3 from './images/ng3.png';
import Neuro4 from './images/ng4.png';
import Neuro5 from './images/ng-diagram.png';
import TermIcon from './images/terminal-icon.png';
import { Row, Col } from 'react-bootstrap';

export default function Projects() {
    return (
        <section>
            <div style={{ padding: '10px 0'}}>
                <Carousel>
                    <Carousel.Item>
                        <img src={Inavders1} alt="Gameplay screenshots" />
                        <Carousel.Caption>
                            <h3>Makers Inavders</h3>
                            <p>A game created using Pygame inspired by the classic arcade game Space Invaders</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Inavders2} alt="Gameplay screenshots showing different enemies" />
                        <Carousel.Caption>
                            <p>You can choose the Alien enemy or the Makers enemy!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{ padding: '10px 0'}}>
                <Carousel>
                    <Carousel.Item>
                        <img src={Neuro1} alt="Gameplay screenshots" />
                        <Carousel.Caption>
                            <h3>NeuroGames</h3>
                            <p>A game created on Unity for residents at PJ Care's care homes</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Neuro2} alt="Gameplay screenshots showing different enemies" />
                        <Carousel.Caption>
                            <p>some text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Neuro3} alt="Gameplay screenshots showing different enemies" />
                        <Carousel.Caption>
                            <p>some text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Neuro4} alt="Gameplay screenshots showing different enemies" />
                        <Carousel.Caption>
                            <p>some text</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Neuro5} alt="Gameplay screenshots showing different enemies" />
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <div style={{margin:"20px 0 50px 0"}}> 
            <img className="term-icon" src={TermIcon} alt="Terminal App" style={{width: "15rem"}}/>
            <a style={{textDecoration: "none", color: "black"}} href="https://github.com/fechachris4/downloading-money">
                <h2 className="wealthwizard"><span className="winner">Empower Pennies Hackathon Winner:</span> Wealth Wizard</h2>
            </a>
            <p style={{margin:"0 0 0 240px"}}>A terminal app which prompts a user to enter the file path to their monthly bank statement jpg or pdf file and using OCR technology and generative AI, extracts text from the file to output a categorised spending overview with financial advice based on spending</p>
            </div>

            <div style={{padding: "50px"}}>
                <h2 style={{margin:"0", padding: "0", justifyContent: "center"}}>Web Dev Practise (misc.)</h2>
                <p>Some projects la la la ...e t c </p>
            </div>

            {/* Need to refactor!  */}
                <Row>
                <Col md={3}>
                    <Carousel>
                        <Carousel.Item>
                            <img src={Inavders1} alt="Gameplay screenshots" />
                            <Carousel.Caption>
                                <h3>Makers Inavders</h3>
                                <p>A game created using Pygame inspired by the classic arcade game Space Invaders</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Inavders2} alt="Gameplay screenshots showing different enemies" />
                            <Carousel.Caption>
                                <p>You can choose the Alien enemy or the Makers enemy!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col md={3}>
                    <Carousel>
                        <Carousel.Item>
                            <img src={Neuro1} alt="Gameplay screenshots" />
                            <Carousel.Caption>
                                <h3>Makers Inavders</h3>
                                <p>A game created using Pygame inspired by the classic arcade game Space Invaders</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Neuro2} alt="Gameplay screenshots showing different enemies" />
                            <Carousel.Caption>
                                <p>You can choose the Alien enemy or the Makers enemy!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col md={3}>
                    <Carousel>
                        <Carousel.Item>
                            <img src={Neuro1} alt="Gameplay screenshots" />
                            <Carousel.Caption>
                                <h3>Makers Inavders</h3>
                                <p>A game created using Pygame inspired by the classic arcade game Space Invaders</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Neuro2} alt="Gameplay screenshots showing different enemies" />
                            <Carousel.Caption>
                                <p>You can choose the Alien enemy or the Makers enemy!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>

                <Col md={3}>
                    <Carousel>
                        <Carousel.Item>
                            <img src={Neuro1} alt="Gameplay screenshots" />
                            <Carousel.Caption>
                                <h3>Makers Inavders</h3>
                                <p>A game created using Pygame inspired by the classic arcade game Space Invaders</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Neuro2} alt="Gameplay screenshots showing different enemies" />
                            <Carousel.Caption>
                                <p>You can choose the Alien enemy or the Makers enemy!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                </Row>
        </section>
    );
}