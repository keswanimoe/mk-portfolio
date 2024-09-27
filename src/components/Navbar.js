import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
    return (
    <Nav
      variant="underline"
      className="justify-content-center" 
      activeKey="#about"
    //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#skills">Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}