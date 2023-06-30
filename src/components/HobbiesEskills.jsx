
import { MdMonitor, MdHeadphones } from 'react-icons/md';
import { FaWalking, FaGuitar,FaReact } from 'react-icons/fa';
import { GiKnifeFork, GiThreeFriends } from 'react-icons/gi';
import { TbBrandJavascript,TbBrandTypescript } from 'react-icons/tb';
import { AiFillHtml5,AiOutlineGithub } from 'react-icons/ai';
import { BsFiletypeCss } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import NavBar from './NavBar.jsx';


function HobbiesEskills() {

  const hobbiesList = [ 
    { id: 1, title: 'Assistir Séries', icon:<MdMonitor/> },
    { id: 2, title: 'Ouvir Música', icon:<MdHeadphones/> },
    { id: 3, title: 'Tocar Violão', icon:<FaGuitar/> },
    { id: 4, title: 'Comer', icon:<GiKnifeFork/> },
    { id: 5, title: 'Conversar com amigos', icon:<GiThreeFriends/> },
    { id: 6, title: 'Caminhar ao ar livre ', icon: <FaWalking/> },
   
  ];
  
  const skillsList = [
    { id: 1, title: 'Html 5', icon:<AiFillHtml5/>},
    { id: 2, title: 'CSS', icon:<BsFiletypeCss /> },
    { id: 3, title: 'Git e Github', icon: <AiOutlineGithub/>},
    { id: 4, title: 'JavaScript', icon:<TbBrandJavascript />},
    { id: 5, title: 'TypeScript', icon:<TbBrandTypescript />},
    { id: 6, title: 'React JS', icon: <FaReact />}
  
  ];

  return (

      <div >
        <NavBar />
        <div  >
          <h3 className="my-4  text-center">Hobbies</h3>
        </div>
        <div  className=' container-rounded'>
          <div className='row justify-content-center py-4 my-4 '>
            {hobbiesList.map((item) => (

              <Card id='blocoCard' key={item.id} className=' p-2  rounded col-6 justify-content-around m-3' style={{ width: '11rem' }}>

                <Card.Body className='h5'>
                  <Card.Text id="paragrado">
                    <h5>{item.icon}</h5>
                    <p  > {item.title} </p>
                  </Card.Text>
                </Card.Body>
              </Card>

            ))}

      </div>
      </div>
        <div  >
          <h3 className=" my-4 text-center">Skills</h3>
        </div>
        <div  className=' container-rounded'>
          <div className='row justify-content-center py-4 my-4 '>
            {skillsList.map((item) => (
              <Card id='blocoCard' key={item.id} className=' p-2  rounded col-6 justify-content-around m-3' style={{ width: '11rem' }}>
                <Card.Body className='h5'>
                  <Card.Text id="paragrado">
                    <h5>{item.icon}</h5>
                    <p  > {item.title} </p>
                  </Card.Text>
                </Card.Body>
              </Card>

            ))}

      </div>
      </div>
      </div>
  
  );
}

export default HobbiesEskills;