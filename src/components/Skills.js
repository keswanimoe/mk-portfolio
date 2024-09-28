import PythonPic from './images/Python.png';
import Csharp from './images/c-sharp.png';
import RubyPic from './images/ruby-logo.png';
import JSLogo from './images/JavaScript-logo.png';
import HTMLCSS from './images/css-html.png';
import SASLogo from './images/sas-logo.png';
import SQLogo from './images/sql-db-logo.png';
import MLLogo from './images/Rstudio-logo.png';
import RLogo from './images/Matlab_Logo.png';
import GitIcon from './images/Git-Icon.png';
import AWSLogo from './images/awslogo.png';
import DockerLogo from './images/dockerlogo.webp';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Skills() {
  // Array of images
  const images = [PythonPic, Csharp, RubyPic, JSLogo, HTMLCSS, GitIcon, RLogo, SASLogo, SQLogo, MLLogo, AWSLogo, DockerLogo] ;

  return(
    <div>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col key={idx} style={{width: "15rem"}}>
            <img src={images[idx]} alt={`${idx}`} />
        </Col>
      ))}
    </Row>
    </div>
    );
}
