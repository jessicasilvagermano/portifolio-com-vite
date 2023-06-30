import NavBar from './NavBar.jsx';
import ImagePerfil from './../assets/images/perfilnova.png';
import Footer from './Footer.jsx';



function Home() {
  return (
    <>
      <NavBar />
      <div   >
        <div className='col' >
          <div className='row justify-content-center mx-3 '>
            <img src={ImagePerfil} style={{ width: 350 }} alt='Foto Perfil' />
            <h3 id='subTitle' >Olá, meu nome é Jéssica Silva e construo páginas web.</h3>
            <p className=" text-center">Atualmente estou cursando Superior em Sistemas para Internet e participando
              do Projeto Desenvolve, na trilha de Desenvolvedor FullStack ofertado pelo grupo
              Boticário.Conclui recentemente um curso de Desenvolvimento Web FrontEnd ofertado
              pelo projeto Mover em parceria com o Descomplica. </p>
          </div>
          <div id="card">
            <h2 className="text-center text-black mb-2">Sobre Mim</h2>
            <p className="  mx-2" > Tenho 28 anos, estou em transição de carreira e desde novembro de 2022  tenho feito cursos na área
              de tecnologia.
              Desde que decidi que quero seguir a carreira de desenvolvedora web foquei meus estudos, inicialmente em desenvolvimento Front-End,
              mas também estou buscando expandi-lo para me tornar desenvolvedora Back-end. Sou organizada, extrovertida, e determinada. Uma frase que me representa é:
              Floresça quantas vezes for necessário  </p>
            <p className="text-black mx-4"><i>Eu estou me preparando e me superando a cada dia, estou <b>florescendo</b>.</i></p>


          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home;