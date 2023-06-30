import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NavBar from './NavBar.jsx';
import ImageEmail from '/src/assets/images/email.jpg';


const Contato = () => {
  return (
    <div >
      <div >
        <NavBar />
      </div>
      <Form id='card' className=" d-block p-5 w-75 mx-auto mt-2">
        <Row className='container-fluid'>
          <img className=' col-6 w-50' src={ImageEmail} alt='email' ></img>
          <div className='w-50'>
            <h1>Contato</h1>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Nome</Form.Label>
              <Form.Control placeholder=" Digite seu nome" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Exemplo: je@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label></Form.Label>
              <Form.Control placeholder="Assunto" />
            </Form.Group><Form.Group className=" mb-3" controlId="formGridAddress2">

              <Form.Control placeholder="Mensagem" />
            </Form.Group>

            <Button className="text-black" id="btnContato" type="submit">
              Enviar Mensagem
            </Button>
          </div>
        </Row>

      </Form>
    </div>
  );
}

export default Contato;