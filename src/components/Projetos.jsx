
import NavBar from './NavBar.jsx';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CardGroup } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import imageProjeto from '../assets/images/decodificador-de-textos.gif';
import imageProjeto1 from '../assets/images/loja-virtual.gif';


function Projetos() {

  return (
    <>
      <NavBar />

      <CardGroup className='container mt-5'>
        <Card className='col-10 mx-5  border-0 rounded'  >
          <Button className='gifProjetos' id='gifProjetos' >
            <img className='img-fluid rounded' src={imageProjeto1} alt='img' />
            <Nav  >
              <Nav.Link id='btn-pisca' target="_blank" as={Link} to="https://github.com/jessicasilvagermano/projeto-react"><b>Ver Projeto</b></Nav.Link>
            </Nav >
          </Button>
          <Card.Body>
            <ListGroup  variant="flush">
            <Card.Title className='text-center'>Aplicação do uso do ReactJS para criação de uma loja virtual</Card.Title>
              <ListGroup.Item className='text-rigth'>Apresenta uma página em que o usuário irá visualizar os produtos disponíveis, carregados dinamicamente. O usuário poderá
              adicionar esses produtos no carrinho de compras. </ListGroup.Item>
              <ListGroup.Item className='text-rigth'>Adicione os itens escolhidos em um localStorage.</ListGroup.Item>
              <ListGroup.Item className='text-rigth'>Apresente a tela do carrinho de compra com os itens escolhidos pelo usuário.</ListGroup.Item>
              <ListGroup.Item className='text-rigth'>Recupere essa informação do localStorage.</ListGroup.Item>
              <ListGroup.Item className='text-rigth'><b>Pontos importantes:</b> apresentar no carrinho de compra a quantidade de cada produto e o total da compra.</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        

        </Card>

        <Card className='col-10 mx-5  border-0 rounded'>
          <Button className='gifProjetos' id='gifProjetos'>

            <img className='img-fluid rounded' src={imageProjeto} alt='img' />
            <Nav  >
              <Nav.Link id='btn-pisca' target="_blank" as={Link} to="https://jessicasilvagermano.github.io/decodificador.github.io/"><b>Ver Projeto</b></Nav.Link>
            </Nav >
          </Button>
          <Card.Body>
            <ListGroup  variant="flush">
              <Card.Title className='text-center'>Aplicação que criptografa textos</Card.Title>
              <ListGroup.Item className='text-rigth'>Converte uma palavra para a versão criptografada e também retorna para a versão original.</ListGroup.Item>
              <ListGroup.Item className='text-rigth'>A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções.</ListGroup.Item>
              <ListGroup.Item className='text-rigth'>O resultado deve ser exibido na tela.</ListGroup.Item>
              <ListGroup.Item className='text-rigth'><b>Extra:</b> apresentar um botão  que tenha a mesma funcionalidade do CTRL+C do menu dos aplicativos.</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default Projetos;