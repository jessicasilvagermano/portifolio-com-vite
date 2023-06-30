import NavBar from './NavBar.jsx';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import ImageAlura from '/src/assets/images/alura-logo-cop.png';
import ImageUnifatecie from '../assets/images/logounifatecie-removebg-preview.png';
import ImageDescomplica from '../assets/images/descomplica-logo.png';
import  Ingles from '../assets/images/ingles-removebg-preview.png';


function Formacao() {


    const formacaoList = [
        { id: 1, title: 'Superior em Sistemas para Internet', img: ImageUnifatecie, description: "Previsão de término em 04/2025" },
        { id: 2, title: 'Desenvolvedor FullStack - Projeto  Desenvolve', img: ImageAlura, description: "Previsão de término em 08/2023" },
        { id: 3, title: 'Desenvolvedor FrontEnd - Projeto Mover', img: ImageDescomplica, description: "Concluído em 05/2023" },
        { id: 4, title: 'Inglês - Autodidata ', img: Ingles, description: "Em andamento..." },
    ]


    return (
        <div >
            <NavBar />
            <div>
                <h3 className="  my-4 text-center">Formacão Acadêmica em Andamento</h3>
            </div>

            <CardGroup className='row justify-content-around m-5'>
                {formacaoList.map((item) => (

                    <Card id='blocoCard' key={item.id} className=" shadow p-3 mb-5 bg-white rounded p-3 mx-2 my-3 border-white">
                        <Card.Body className='text-center'  >
                            <img className='img-fluid' style={{ width: 150 }} src={item.img} alt="logo-UniFatecie"></img>
                            <h5>{item.title}</h5>
                        </Card.Body>
                        <Button className="bg-white border-0  text-black" >{item.description}</Button>
                    </Card>
                ))}
            </CardGroup>
        </div>
    );
}

export default Formacao;