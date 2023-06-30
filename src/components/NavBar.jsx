import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';





function NavBar() {
  return (
    <Navbar className='mx-2 p-3 fixed' collapseOnSelect expand="lg" variant="ligth" >
      <Container className='responsive-navbar-nav d-flex p-2 justify-content-between align-items-center'>
        <Navbar.Brand as={Link} to="/" ><h1 ><span className=" material-symbols-outlined">
          auto_awesome</span > Meu Portifólio</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="d-flex responsive-navbar-nav" />
        <Navbar.Collapse className=' justify-content-end'   >


          <Nav >
            <Nav.Link id='linksNavBar' as={Link} to="/">Sobre Mim</Nav.Link>
            <Nav.Link id='linksNavBar' as={Link} to="/hobbies">Hobbies e Skills</Nav.Link>
            <Nav.Link id='linksNavBar' as={Link} to="/formacao">Formação</Nav.Link>
            <Nav.Link id='linksNavBar' as={Link} to="/experiencia" >Projetos</Nav.Link>
            <Nav.Link id='linksNavBar' as={Link} to="/contato">Contato</Nav.Link>
            <Nav.Link className='h1 font-weight-bold text-danger ' target="_blank" href="https://github.com/jessicasilvagermano?tab=repositories " ><AiFillGithub/></Nav.Link>
            <Nav.Link className=' h1 font-weight-bold text-danger ' target="_blank" href="https://www.linkedin.com/in/jessica-silva-developer"><AiFillLinkedin/></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;